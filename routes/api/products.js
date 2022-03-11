const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');;
require('dotenv').config();


const Product = require('../../models/Product');
const validateProductCreate = require('../../validation/product');

router.get('/', (req, res) => {
      Product.find()
            .sort({date: -1})
            .then((products) => res.json(products))
            .catch((err) => res.status(404).json({ "error": 'No Product found' }));
})

router.get('/:id', (req, res) => {
      Product.findOne({ _id: req.params.id })
            .then((product) => res.json(product))
            .catch((err) => res.status(402).json({ 'error': 'Product not found' }))
})

router.get('/user/:userId', (req, res) => {
      Product.find({ user: req.params.userId })
            .sort({date: -1})
            .then(products => res.json(products))
            .catch(err => res.status(404).json({'error': 'No product found'}))
})

router.delete('/:id', (req, res) => {
      Product.findOne({ _id: req.params.id })
            .then((product) => res.json(product))
            .catch((err) => res.status(404).json({'error': 'No product found'}))
})


router.patch('/:id', (req, res) => {
      Product.findOne({ _id: req.body.id }, (err, product) => {
            if (err) {
                  return res.status(400).json(err)
            } else {
                  product.updateOne({
                        title: req.body.title,
                        description: req.body.description,
                        price: req.body.price,
                        date: req.body.date
                  }, (err) => {
                        if (err) {
                              return res.status(400).json(err)
                        } else {
                              return res.json({
                                    title: product.title,
                                    description: product.description,
                                    price: product.price,
                                    date: req.body.date
                              })
                        }
                  })
            }
      })
})

const storage = multer.memoryStorage({
      destination: function (req, file, cb) {
            cb(null, '')
      }
})

const fileFilter = (req, file, cb) => {
      const allowedTypes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif',
      ]
      if (allowedTypes.includes(file.mimetype)) {
            cb(null, true)
      } else {
            cb(null, false)
      }
}

const upload = multer({ storage: storage, fileFilter: fileFilter });

const s3 = new Aws.S3({
      
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
}) 


router.post('/', upload.single('productImage'), (req, res) => {
      if (!req.file) return res.send('Please upload a file')
      console.log(req.file)
      const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: req.body.title,
            Body: req.file.buffer,
            ACL: "public-read-write",
            ContentType: "image/jpeg"
      }
      

      s3.upload(params, (error, data) => {
      
            if (error) {
                  res.status(500).json(error)
            }
            const product = new Product({
                  title: req.body.title,
                  description: req.body.description,
                  price: req.body.price,
                  productImage: data.Location,
                  user: req.body.user,
                  date: req.body.date
            });
            
            
            product.save()
                  .then(product => (
                        res.status(200).send({
                              _id: product._id,
                              title: product.title,
                              description: product.description,
                              price: product.price,
                              user: product.user,
                              date: product.date,
                              productImage: data.Location,
                        })
                        
                  )).catch(err => {
                        res.json(err)
                  })
      })
      
})


module.exports = router;
