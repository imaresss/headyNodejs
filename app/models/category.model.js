const mongoose = require('mongoose');


const CategorySchema = mongoose.Schema({
    id: Number,
    child_categories: [Number],
    creationDate :Number
});

module.exports = mongoose.model('Category', CategorySchema);
