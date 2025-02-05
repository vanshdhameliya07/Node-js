const Usermodel=require(`../models/UserModel`)
const loginpage = (req, res) => {
    return res.render('login')
}
const loginUser = (req, res) => {

    try {
        const { name, email } = req.body;
        console.log(req.body)
    }
    catch (err) {
        console.log(err);
        return false;
    }
}
module.exports = {
    loginpage,loginUser
}