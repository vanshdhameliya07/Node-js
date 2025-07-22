const express = require('express');

const port = 8000;

const app = express()

let record = []


app.set('view engine', 'ejs')

app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.render('add');
})
app.get('/view', (req, res) => {
    return res.render('view', {
        record
    });
})


app.get('/deleteuser', (req, res) => {
    let id = req.query.deleteid;
    let deletedata = record.filter((val => val.id != id))
    record = deletedata;
    return res.redirect("/view")

})
app.get('/edituser', (req, res) => {
    let id = req.query.editid;
    let single = record.find((val => val.id == id))

    return res.render("edit", {
        single
    })

})

app.post('/updateuser', (req, res) => {
    var { editid, name, email } = req.body
    let up = record.map((val) => {
        if (val.id == editid) {
            val.name = name;
            val.email = email
        }
        return val
    })
    record = up
    return res.redirect('/view')

})

app.post('/add', (req, res) => {
    var { name, email } = req.body

    var obj = {
        id: Math.floor(Math.random() * 100),
        name,
        email
    }
    record.push(obj)
    console.log("sucessfull add");
    res.redirect('/view')


})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false
    }
    console.log(`server start on port http://localhost:${port}`);

})