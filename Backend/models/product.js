const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  quintity: {
    type: String,
    require: true
  },
  productId: {
    type: Number,
    required: true
  },

  price: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    required: true
  },
  image:{
    type:String,
    required:true
  }

},  { timestamps: true });

module.exports = mongoose.model('Product', productSchema);