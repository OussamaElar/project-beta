const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


const Product = require('../../models/Product');
const validateProductCreate = require('../../validation/product');

router.get('/', (req, res) => {
      Product.find()
            .sort({date: -1})
            .then((products) => res.json(products))
            .catch((err) => res.status(404).json({ "error": 'No Product found' }));
})

router.delete('/:id', (req, res) => {
      Product.findOne({ _id: req.params.id })
            .then((product) => res.json(product))
            .catch((err) => res.status(404).json({'error': 'No product found'}))
})

router.post('/', (req, res) => {

      const product = new Product({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            user: req.body.user,
            date: req.body.date
      })
      
      
      product.save()
            .then(product => (
                  res.status(200).send({
                        _id: product._id,
                        title: product.title,
                        description: product.description,
                        price: product.price,
                        user: product.user,
                        date: product.date
                  })
                  
            )).catch( err => { 
                  res.json(err)
            })
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

module.exports = router;
