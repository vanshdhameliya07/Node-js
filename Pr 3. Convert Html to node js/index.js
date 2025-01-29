const express = require('express');

const port = 9000;

const app = express();

app.set('view engine', 'ejs');

const path = require('path')

app.use(express.static(path.join(__dirname, "public")));



app.get('/dashboard', (req, res) => {
    return res.render('dashboard');
})
app.get('/chart', (req, res) => {
    return res.render('chart');
})
app.get('/widgets', (req, res) => {
    return res.render('widgets');
})
app.get('/table', (req, res) => {
    return res.render('table');
})
app.get('/fullwidth', (req, res) => {
    return res.render('fullwidth');
})
app.get('/formbasic', (req, res) => {
    return res.render('formbasic');
})
app.get('/formwizad', (req, res) => {
    return res.render('formwizad');
})
app.get('/button', (req, res) => {
    return res.render('button');
})
app.get('/material', (req, res) => {
    return res.render('material');
})
app.get('/fontawasomeicon', (req, res) => {
    return res.render('fontawasomeicon');
})
app.get('/element', (req, res) => {
    return res.render('element');
})
app.get('/dashbord2', (req, res) => {
    return res.render('dashbord2');
})
app.get('/gallery', (req, res) => {
    return res.render('gallery');
})
app.get('/calender', (req, res) => {
    return res.render('calender');
})
app.get('/invoice', (req, res) => {
    return res.render('invoice');
})
app.get('/chatoption', (req, res) => {
    return res.render('chatoption');
})
app.get('/login', (req, res) => {
    return res.render('login');
})
app.get('/register', (req, res) => {
    return res.render('register');
})
app.get('/error403', (req, res) => {
    return res.render('error403');
})
app.get('/error404', (req, res) => {
    return res.render('error404');
})
app.get('/error405', (req, res) => {
    return res.render('error405');
})
app.get('/error500', (req, res) => {
    return res.render('error500');
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false
    }
    console.log(`server is start on port :- ${port}`);

})