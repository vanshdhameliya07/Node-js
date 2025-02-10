const { checkUser } = require('../middleware/checkuser');
const Usermodel = require('../models/UserModel');

const loginpage = (req, res) => {
    if (!req.cookies.auth) {
        return res.render(`login`);
    }
   
}
const aboutpage = (req, res) => {
    return res.render('about')
}
const productpage = (req, res) => {
    return res.render('product')
}
const dashboardpage = (req, res) => {
    if (!req.cookies?.auth) {
        return res.render('login');
    }
    return res.render('dashboard');
}
const registerpage = (req, res) => {
    return res.render('register')
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        let user = await Usermodel.findOne({ email: email });
        if (!user || user.password != password) {

            console.log(`email and password not valid`);
            return res.redirect(`/login`);
        }
        console.log(`email and password is valid`);
        res.cookie(`auth`, user);
        return res.redirect(`/dashboard`);
    }
    catch (err) {
        console.log(err);
        return false;
    }
}

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        await Usermodel.create({
            name: name,
            email: email,
            password: password
        })
        console.log('user create');
        return res.redirect('login');
    }
    catch (err) {
        console.log(err);
        return false;
    }
}

const logoutUser = (req, res) => {
    res.clearCookie(`auth`);
    console.log(`log out user`)
    return res.redirect(`/login`)
}

module.exports = {
    productpage, aboutpage, loginpage, dashboardpage, registerpage, registerUser, loginUser, logoutUser, checkUser
}