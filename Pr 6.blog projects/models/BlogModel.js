const mongoose = require('mongoose');


const blogSchema = mongoose.Schema({
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
    },


})
const blog = mongoose.model("bloguser", blogSchema);
module.exports = blog;