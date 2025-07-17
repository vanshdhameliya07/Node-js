const { CheckUser } = require(`../middleware/CheckUser`)
const Usermodel = require(`../models/UserModel`);


const UserModelBlog = require(`../models/UserModelBlog`);




const registerpage = (req, res) => {
    return res.render(`register`);
}
const loginpage = (req, res) => {
    return res.render(`login`);
}

const blogpage = (req, res) => {
    if (!req.cookies?.auth) {
        return res.redirect(`login`)
    }
    return res.render(`blog`);
}
const blogUser = async (req, res) => {
    try {
        const { title, description } = req.body;
        console.log(req.file);
        await UserModelBlog.create({
            title: title,
            description: description,
            image: req.file?.path,
        });
        return res.redirect(`view`)

    } catch (err) {
        console.log(err);
        return false;
    }
}
const viewpage = async (req, res) => {
    try {
        const allrecord = await UserModelBlog.find({});
        return res.render(`view`, {
            record: allrecord
        });

    } catch (err) {
        console.log(err);
        return false;
    }
}
const deleteUser = async (req, res) => {
    const id = req.query.did;
    try {
        const ff = await UserModelBlog.findById(id)
        fs.unlinkSync(ff?.image)

        await UserModelBlog.findByIdAndDelete(id);
        console.log(`delete user`);
        return res.redirect(`view`)
    }
    catch (err) {
        console.log(err);
        return false;
    }
}
const editUser = async (req, res) => {
    const id = req.query.eid;
    try {
        const record = await UserModelBlog.findById(id);
        console.log(`edit user`);
        return res.render(`edit`, {
            single: record
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const updateRecord = async (req, res) => {
    const { title, description } = req.body;
    console.log(req.body.title);


}

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        await Usermodel.create({
            name: name,
            email: email,
            password: password,
        })
        console.log(`user create`);
        return res.redirect(`login`);

    } catch (err) {
        console.log(err);
        return false;
    }
}
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Usermodel.findOne({ email: email });
        if (!user || user.password != password) {
            console.log(`email and password wrong`);
            return res.redirect(`login`);
        }
        console.log(`email and password true`);
        res.cookie(`auth`, user);
        return res.redirect(`blog`);


    }
    catch (err) {
        console.log(err);
        return false;
    }
}
const logoutUser = (req, res) => {
    res.clearCookie(`auth`);
    console.log(`log out user`);
    return res.redirect(`login`);

}
module.exports = {
    registerpage, loginpage, registerUser, loginUser, blogpage, logoutUser, blogUser, viewpage, deleteUser, editUser, updateRecord
}