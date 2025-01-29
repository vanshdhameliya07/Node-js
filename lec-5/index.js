const express = require('express');

const port = 8000;

const app = express();

app.set(`view engine`, `ejs`);

app.get(`/`, (req, res) => {
    res.render(`home`)
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`port is start ${port}`)
})