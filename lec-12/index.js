const express = require(`express`);

const port = 9000;

const app = express();

app.set(`view engine`, `ejs`)

app.get('/', (req, res, next) => {
    let age = req.query.age;
    if (age > 18 && age < 100) {
        next()
    }

})

app.get('/', (req, res) => {
    return res.render('index')
})
app.get('/about', (req, res) => {
    return res.render('about')
})
app.get('/product', (req, res) => {
    return res.render('product')
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false
    }
    console.log(`server start on port http://localhost:${port}`);
})