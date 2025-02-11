const UserModel = require(`../models/UserModel`)
const registerpage = (req, res) => {
    return res.render(`register`);
}
const loginpage = (req, res) => {
    return res.render(`login`);
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
module.exports = {
    registerpage, loginpage, registerUser
}