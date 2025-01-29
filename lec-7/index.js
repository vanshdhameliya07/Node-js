const express = require(`express`);

const port = 8080;

const app = express();

const db = require(`./config/db`)

app.listen(port, (req, res) => {

    if (err) {

        console.log(err);
        return false;
    }
    console.log(`server start on port ${port}`)

})