const mongoose = require(`mongoose`);

mongoose.connect(`mongodb://localhost/mydatabase`);

const db = mongoose.connection;

db.on(`connection`, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`database successfully connectd`);
})
module.exports = db;