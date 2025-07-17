const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }

})
const us = mongoose.model("blog", BlogSchema);
module.exports = us;
