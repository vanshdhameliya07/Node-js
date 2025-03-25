const UserModel = require(`../models/UserModel`)
const BlogModel = require('../models/BlogModel');

const registerpage = (req, res) => {
    return res.render(`register`);
}
const loginpage = (req, res) => {
    if(res.locals.users){
        return res.redirect('/viewblog')
    }
    return res.render(`login`);
}
const viewblogpage = async (req, res) => {
   
        const allrecord = await BlogModel.find({});
        return res.render('viewblog', {
            record: allrecord
        })
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

        return res.redirect(`/viewblog`);

    } catch (error) {
        console.log(err);
        return false;
    }
}

module.exports = {
    registerpage, loginpage, registerUser, loginUser, aboutpage, viewblogpage
}