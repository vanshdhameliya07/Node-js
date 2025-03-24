const express = require('express');

const port = 8300;

const app = express();

const db = require('./config/db');

app.set('view engine', 'ejs');

app.use(express.urlencoded())

const passport = require('passport')
const passportLocal = require('./config/passport');
const session = require('express-session');

app.use(session({
    name: 'rr',
    secret: 'pp',
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setuser)
app.use('/', require('./route/indexroute'))

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false
    }
    console.log(`server start on port http://localhost:${port}`)
})

