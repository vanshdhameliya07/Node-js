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
        const record = await BlogModel.findById(id);
        console.log(`edit user`);
        return res.render('editblog', {
            single: record
        })

    } catch (err) {
        console.log(err);
        return false;
    }
}
const UpdateUser = async (req, res) => {
    const { editid, title, description } = req.body;
    try {
        const ff = await BlogModel.findById(editid);
        if (req.file) {
            try {
                fs.unlinkSync(ff?.image)
            } catch (err) {
                console.log(err);
                return false
            }
            await BlogModel.findByIdAndUpdate(editid, {
                title: title,
                description: description,
                image: req.file?.path
            })
            console.log('update user');
            return res.redirect('/viewblog')

        } else {
            await BlogModel.findByIdAndUpdate(editid, {
                title: title,
                description: description,
                image: ff?.image,
            })
            console.log('User updated successfully');
            return res.redirect('/viewblog');
        }

    } catch (err) {
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
    addblog, blogUser, deleteUser, editblog, editUser, UpdateUser, logOut
}