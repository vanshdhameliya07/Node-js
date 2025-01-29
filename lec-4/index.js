const express = require('express');

const port = 8000;

const app = express();

app.set(`view engine`, `ejs`);

app.get(`/`, (req, res) => {
    res.render(`home`)
})
app.get(`/about`, (req, res) => {
    res.render(`about`)
})
app.get(`/contact`, (req, res) => {
    res.render(`contact`)
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`port is start ${port}`)
})