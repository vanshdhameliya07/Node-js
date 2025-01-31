const express = require(`express`);


const port = 8080;

const app = express();

app.set(`view engine`, `ejs`);

const db = require('./config/db');

app.use('/', require(`./route/indexroute`))

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server start on port http://localhost:${port}`)
})