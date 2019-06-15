const mongoose = require('mongoose');


const CategorySchema = mongoose.Schema({
    id: Number,
    categories: [Number]
}, {
    timestamps: true
});

module.exports = mongoose.model('Category', CategorySchema);
