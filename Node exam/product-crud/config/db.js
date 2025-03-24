const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost/product`);

const db = mongoose.connection;

db.on('connected', (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`database successfully conected`);

})
module.exports = db;