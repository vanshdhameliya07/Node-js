const express = require(`express`);
const cookieparser = require(`cookie-parser`)

const port = 8500;

const app = express();

const db = require(`./config/db`);

const path = require(`path`)

app.use('/upload', express.static(path.join(__dirname, 'upload')));

app.set(`view engine`, `ejs`);

app.use(express.urlencoded());

app.use(cookieparser());

app.use(`/`, require(`./route/indexroute`))

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false
    }
    console.log(`server start on port http://localhost:${port}`)
})