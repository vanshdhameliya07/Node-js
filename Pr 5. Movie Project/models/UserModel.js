
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    moviename: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
})
const u = mongoose.model("users", userSchema);
module.exports = u;