var express = require(`express`);

var port = 9000;

var app = express();

var record = [];

app.set(`view engine`, `ejs`)
app.use(express.urlencoded())

app.get(`/edituser`, (req, res) => {
    let id = req.query.editid
    let single = record.find(val => val.id == id);
    return res.render(`edit`, {
        single
    })
})
app.post(`/updateuser`, (req, res) => {
    const { editid, username, userphone } = req.body;
    let up = record.map((val) => {
        if (val.id == editid) {
            val.name = username;
            val.phone = userphone;
        }
        return val;
    })
    record = up;
    return res.redirect(`/`);
})
app.get(`/add`, (req, res) => {
    res.render(`form`);
});

app.get(`/`, (req, res) => {
    return res.render(`table`, {
        record
    })
})
app.get(`/deleteuser`, (req, res) => {
    let id = req.query.deleteid;
    let deletedata = record.filter(val => val.id != id);
    record = deletedata;
    return res.redirect(`/`);

})

app.post(`/adduser`, (req, res) => {
    var { username, userphone } = req.body;
    console.log(req.body)

    var obj = {
        id: Date.now(),
        name: username,
        phone: userphone,
    }
    record.push(obj);
    console.log(`user successfully register`)
    return res.redirect(`/`);

})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`port is start on :- ${port}`);
})
