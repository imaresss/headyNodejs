const mongoose = require('mongoose');


const Product = mongoose.Schema({
    name: String,
    price: Number,
	categories : [Number],
	creationDate : Number,
	modificationDate : Number
});

module.exports = mongoose.model('Product', Product);
