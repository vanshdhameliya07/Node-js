const express = require('express');

const port = 9000;

const app = express();

const db = require('./config/db');

app.use(express.urlencoded());

app.use('/', require('./route/indexroute'));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server start on port http://localhost:${port}`)
})


