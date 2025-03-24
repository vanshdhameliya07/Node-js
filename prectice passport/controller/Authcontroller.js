const UserModel = require('../models/UserModel')

const Registerpage = (req, res) => {
    return res.render('register');
}
const Loginpage = (req, res) => {
    return res.render('login');
}
const dashboardpage = (req, res) => {
    return res.render('dashboard');
}
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        await UserModel.create({
            name: name,
            email: email,
            password: password
        })
        return res.redirect('/')
    } catch (err) {
        console.log(err);
        return false;
    }
}
const loginUser = (req, res) => {
    try {
        console.log('done')
        return res.redirect('/dashboard')

    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    Registerpage, Loginpage, dashboardpage, registerUser, loginUser
}