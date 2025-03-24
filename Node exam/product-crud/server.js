const express = require('express');

const port = 8300;

const app = express();

const db = require('./config/db');

app.set('view engine', 'ejs');

const path = require('path');

app.use('/upload', express.static(path.join(__dirname, 'upload')))

app.use(express.urlencoded())

app.use('/', require('./route/indexroute'))

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false
    }
    console.log(`server start on port http://localhost:${port}`)
})

