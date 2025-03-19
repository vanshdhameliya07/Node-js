const express = require('express');

const port = 9000;

const app = express();

const db = require('./config/db');

app.set('view engine', 'ejs')

app.use(express.urlencoded());

const passport = require('passport')
const passportLocal = require('passport-local');
const session = require('express-session')


app.use(session({
    name: 'ee',
    secret: 'ss',
    saveUninitialized: true,
    resave: true,

    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

app.use(passport.initialize())
app.use(passport.session());

app.use('/', require('./route/indexroute'));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;

    }
    console.log(`server start on port http://localhost:${port}`);
})