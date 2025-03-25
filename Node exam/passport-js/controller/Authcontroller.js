const UserModel = require('../models/UserModel')

const registerpage = (req, res) => {
    return res.render('register')
}
const loginpage = (req, res) => {

    return res.render('login')
}
const dashboardpage = (req, res) => {
    return res.render('dashboard')
}

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        await UserModel.create({
            name: name,
            email: email,
            password: password
        })
        console.log('user successfully register')
        return res.redirect('/');

    } catch (err) {
        console.log(err);
        return false;
    }
}
const loginUser = (req, res) => {
    try {
        return res.redirect('/dashboard')

    } catch (err) {
        console.log(err);
        return false;
    }
}

const Logout = (req, res) => {
    try {
        req.logout((err) => {
            if (err) {
                console.log(err);
                return false
            }
        })
        console.log(`logout user`)
        return res.redirect('/')

    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    registerpage, loginpage, registerUser, loginUser, dashboardpage, Logout
}