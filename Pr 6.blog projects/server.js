const express = require(`express`);

const cookieparser = require(`cookie-parser`)

const port = 8100;

const app = express();

const db = require(`./config/db`)

app.use(express.urlencoded())

app.set(`view engine`, `ejs`)


const path = require(`path`);

app.use(`/upload`, express.static(path.join(__dirname, `upload`)))

app.use(cookieparser());
app.use(`/`, require(`./route/indexroute`));


app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server start on port http://localhost:${port}`);
})