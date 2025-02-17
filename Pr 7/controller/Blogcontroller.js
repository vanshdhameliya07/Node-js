const BlogModel = require('../models/BlogModel');
const fs = require('fs');

const addblog = (req, res) => {
    return res.render(`addblog`);
}
const editblog = (req, res) => {
    return res.render(`editblog`);
}

const blogUser = async (req, res) => {
    try {
        const { title, description } = req.body;
        await BlogModel.create({
            title: title,
            description: description,
            image: req.file?.path,
        })
        console.log('user create');
        return res.redirect('/viewblog')

    } catch (err) {
        console.log(err);
        return false;
    }
}

const deleteUser = async (req, res) => {
    let id = req.query.did;
    try {
        const ff = await BlogModel.findById(id);
        fs.unlinkSync(ff?.image)
        await BlogModel.findByIdAndDelete(id);
        console.log('delete user');
        return res.redirect('/viewblog')
    } catch (err) {
        console.log(err);
        return false
    }
}

const editUser = async (req, res) => {
    let id = req.query.eid;
    try {

    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    addblog, blogUser, deleteUser, editblog, editUser
}