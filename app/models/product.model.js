const mongoose = require('mongoose');


const Product = mongoose.Schema({
    name: String,
    price: Number,
	categories : [Number]
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', Product);
