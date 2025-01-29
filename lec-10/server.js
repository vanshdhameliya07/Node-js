const express = require('express');

const port = 8000;

const app = express();

app.use(express.urlencoded());

const path = require(`path`);

app.use('/upload', express.static(path.join(__dirname, 'upload')));

const db = require("./config/db");

app.set('view engine', 'ejs');

app.use('/', require("./routes/indexRoute"));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server start on port http://localhost:${port}`);

})