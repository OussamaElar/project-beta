const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
      user: {
            type: Schema.Types.ObjectId,
            ref: 'users',
            required: true
      },

      title: {
            type: String,
            required: true
      },

      description: {
            type: String,
            required: true
      },

      price: {
            type: Number,
            required: true
      },

      productImage: {
            type: String
      },

      date: {
            type: Date
      }
      
},{
            timestamps: true
})

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;