const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
    subcategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subcategory'
    },
    exsubcategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'exsubcategory'
    },
    product: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'active'
    },
    iamge: {
        type: String,
        required: true,
    }
})
const product = mongoose.model('product', productSchema);
module.exports = product