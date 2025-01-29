const express = require(`express`);
const app = express();
const port = 9000;

const path = require(`path`)

app.set(`view engine`, `ejs`);

app.get(`/`, (req, res) => {
    return res.render(`home`);
})

app.use(`/`, express.static(path.join(__dirname, `public`)));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server start on port ${port}`)
})