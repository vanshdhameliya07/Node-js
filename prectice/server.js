const express = require('express');

const port = 8000;

const app = express();

const UserModel = require('./models/UserModel')

const db = require('./config/db');

app.set(`view engine`, `ejs`);

app.use(express.urlencoded());

app.get(`/`, (req, res) => {
    res.render(`form`);

})

app.get('/view', (req, res) => {
    UserModel.find({})
        .then((record) => {
            return res.render("table", {
                allrecord: record
            })
        }).catch((err) => {
            console.log(err);
            return false;
        })
})


app.post('/userdata', (req, res) => {
    const { name, email, password } = req.body;
    UserModel.create({
        username: name,
        useremail: email,
        userpassword: password
    }).then((record) => {
        console.log(record);
        console.log("user create")
        return res.redirect('/view');
    }).catch((err) => {
        console.log(err);
        return false;
    })
})

app.get("/deleteid", (req, res) => {
    let id = req.query.did;
    UserModel.findByIdAndDelete(id)
        .then((data) => {
            console.log("record delete");
            return res.redirect("/view");
        }).catch((err) => {
            console.log(err);
            return false;
        })
})

app.get("/editid", (req, res) => {
    let id = req.query.eid;
    UserModel.findById(id)
        .then((single) => {
            return res.render("edit", {
                single
            })
        }).catch((err) => {
            console.log(err);
            return false;
        })
})

app.post("/updateuser", (req, res) => {
    const { editid, name, email, password } = req.body;

    UserModel.findByIdAndUpdate(editid, {
        username: name,
        useremail: email,
        userpassword: password
    }).then((single) => {
        console.log("user update");
        return res.redirect("/view");
    }).catch((err) => {
        console.log(err);
        return false;
    })

})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`server start on port http://localhost:${port}`);

})