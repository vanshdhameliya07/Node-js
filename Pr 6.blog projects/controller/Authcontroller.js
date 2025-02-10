const UserModel = require(`../models/UserModel`);

const loginpage = (req, res) => {
    return res.render(`login`);
}
const registerpage = (req, res) => {
    return res.render(`register`);
}
const dashboardpage = (req, res) => {
    return res.render(`dashboard`);
}

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        await UserModel.create({
            name: name,
            email: email,
            password: password
        })
        console.log(`register`);
        return res.redirect(`/`);

    } catch (err) {
        console.log(err);
        return false;
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await UserModel.findOne({ email: email });
        if (!user || user.password != password) {
            console.log(`email and password wrong`);
            return res.redirect(`/`);
        }
        console.log(`email and password true`);
        res.cookie(`auth`, user)
        return res.redirect(`/dashboard`)

    } catch (err) {
        console.log(err);
        return false;
    }
}

const logOut = (req, res) => {
    res.clearCookie(`auth`);
    console.log(`log out user`);
    return res.redirect(`/`)
}

module.exports = {
    loginpage, registerpage, dashboardpage, registerUser, loginUser, logOut
}