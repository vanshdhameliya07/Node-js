const UserModel = require(`../models/UserModel`)

const registerpage = (req, res) => {
    return res.render(`register`);
}
const loginpage = (req, res) => {
    if (res?.locals?.users) {
        return res.redirect(`/dashboard`);

    }
    return res.render(`login`);
}
const dashboardpage = (req, res) => {
    return res.render(`dashboard`);
}

const aboutpage = (req, res) => {
    return res.render(`about`);
}

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        await UserModel.create({
            name: name,
            email: email,
            password: password
        })
        console.log(`user register`);
        return res.redirect(`/`)

    } catch (err) {
        console.log(err);
        return false;
    }
}

const loginUser = (req, res) => {
    try {
        console.log("done");
        return res.redirect(`/dashboard`);

    } catch (error) {
        console.log(err);
        return false;
    }
}

const logOut = (req, res) => {
    req.logout((err) => {
        if (err) {
            console.log(err);
            return false;
        }
    })
    console.log('log out user')
    return res.redirect('/');
}

module.exports = {
    registerpage, loginpage, registerUser, loginUser, aboutpage, dashboardpage, logOut
}