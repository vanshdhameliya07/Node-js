const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/passport');

const db = mongoose.connection;

db.on('connected', (err) => {
    if (err) {
        console.log(err);
        return false
    }
    console.log(`database successfully connect`)
})
module.exports = db