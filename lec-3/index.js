const express = require(`express`);

const port = 8000;

const app = express();

app.get(`/`, (req, res) => {
    res.send(`Hello, World!`);
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`port is running : localhost${port}`);
})