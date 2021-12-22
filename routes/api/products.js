const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


const Product = require('../../models/Product');
const validateProductCreate = require('../../validation/product');

router.get('/', (req, res) => {
      Product.find()
            .sort(-1)
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
            .then(res => {
                  res.status(200).send({
                        _id: res._id,
                        title: res.title,
                        description: res.description,
                        price: res.price,
                        user: res.user,
                        date: res.date
                  })
            }).catch( err => { 
                  res.json(err)
            })
})
