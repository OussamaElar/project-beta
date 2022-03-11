const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User')
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys')
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const { json } = require("body-parser");
const { findById } = require("../../models/User");
const multer = require('multer')           
const Aws = require('aws-sdk')
const multerS3 = require('multer-s3')
require('dotenv').config()

// router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get('/', (req, res) => {
      User.find()
            .sort({ date: -1 })
            .then((users) => res.json(users)).catch(err => res.status(404).json({ usersn: 'No users found'}))
})

router.get('/:id', (req, res) => {
      User.findById(req.params.id)
            .then((user => {
                  res.json(user)
            }))
            .catch(err => res.status(404).json({ usern: 'User not found'}))
})



router.post('/register', (req, res) => {
      const { errors, isValid } = validateRegisterInput(req.body)

      if (!isValid) {
            return res.status(400).json(errors)
      }
      // look for existing emails
      User.findOne({ email: req.body.email })
            .then(user => {
                  if (user) {
                        // throw 400 error if the email exists
                        errors.handle = 'User already exist'
                        return res.status(400).json(errors)
                        // return res.status(400).json({err: 'User already exists'})
                  } else {
                        const newUser = new User({
                              handle: req.body.handle,
                              email: req.body.email,
                              password: req.body.password,
                              accountType: req.body.accountType
                        })
                        bcrypt.genSalt(10, (err, salt) => {
                              bcrypt.hash(newUser.password, salt, (err, hash) => {
                                    if (err) throw err;
                                    newUser.password = hash;
                                    newUser.save()
                                          .then(user => {
                                                const payload = { id: user.id, handle: user.handle };
                                                jwt.sign(
                                                      payload,
                                                      keys.secretOrKey,
                                                      { expiresIn: 3600 },
                                                      (err, token) => {
                                                            res.json({success: 'true', token: 'Bearer' + token})
                                                      }
                                                )
                                          })
                                          .catch(err => console.log(err))
                              })
                        })
                  }
            })
})


router.post('/login', (req, res) => {
      const { errors, isValid } = validateLoginInput(req.body)
      
      if (!isValid) {
            return res.status(400).json(errors);
      }

      const email = req.body.email;
      const password = req.body.password;

      User.findOne({ email })
            .then(user => {
                  if (!user) {
                        // return res.status(400).json({email: 'email not found'})
                        errors.email = 'User not found';
                        return res.status(404).json(errors);
                  }

                  bcrypt.compare(password, user.password)
                        .then(isMatch => {
                              if (isMatch) {
                                    const payload = { id: user.id, hnadle: user.handle };
                                    jwt.sign(
                                          payload,
                                          keys.secretOrKey,
                                          // tell the key to expire in 1h
                                          { expiresIn: 3600 },
                                          (err, token) => {
                                                res.json({ success: true, token: 'Bearer' + token, 'id': user.id})
                                          }
                                          
                                    )
                                    
                              } else {
                                    errors.password = 'Incorrect Password'
                                    return res.status(400).json(errors)
                                    // return res.status(400).json({err: 'Incorrect Password'})
                              }
                        })
            })
})

const storage = multer.memoryStorage({
      destination: function (req, file, cb) {
            cb(null, '')
      }
})

const filefilter = (req, file, cb) => {
      const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif',
      ]

      if (allowedMimes.includes(file.mimetype)) {
            cb(null, true)
      } else {
            cb(null, false)
      }
}
const upload = multer({ storage: storage, fileFilter: filefilter });

const s3 = new Aws.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})


router.patch('/:id/profile', upload.single('userImage'), (req, res) => {
      if (!req.file) return res.send('Please upload a file')
      const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: req.body.handle,
            Body: req.file.buffer,
            ACL: "public-read-write",
            ContentType: "image/jpeg" 
      }

      s3.upload(params, (error, data) => {
            if (error) {
                  res.status(500).json(error)
            }
      

            User.findById({ _id: req.params.id }, (err, user) => {
                  if (err) {
                        return res.status(400).json(err)
                  } else {
                        user.updateOne({ userImage: data.Location, accountType: req.body.accountType }, (err, docs) => {
                              if (err) {
                                    return res.status(400).json(err)
                              } else {
                                    return res.json({
                                          id: user.id,
                                          handle: user.handle,
                                          email: user.email,
                                          accountType: user.accountType,
                                          userImage: user.userImage
                                    })
                              }
                        })
                  }
            })
      })
})

module.exports = router;