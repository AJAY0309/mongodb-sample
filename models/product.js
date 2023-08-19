const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    place: {
        type: String,
        required: true,
    },
    plan: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Product', productSchema);