const UserModel = require('../models/UserModel');
const fs = require('fs')

const addblogpage = (req, res) => {
    return res.render('add_blog')
}

const insertuserblog = async (req, res) => {
    try {
        const { name, price, qty, description } = req.body;
        await UserModel.create({
            name: name,
            price: price,
            qty: qty,
            description: description,
            image: req.file.path
        })
        return res.redirect('/addblog')
    } catch (err) {
        console.log(err);
        return false
    }
}
const viewblogpage = async (req, res) => {
    try {
        const single = await UserModel.find({});
        return res.render('view_blog', {
            product: single
        })

    } catch (err) {
        console.log(err);
        return false
    }
}
const deleteuser = async (req, res) => {
    let id = req.query.did;
    try {
        const ff = await UserModel.findById(id);
        fs.unlinkSync(ff.image)

        await UserModel.findByIdAndDelete(id)
        console.log("record delete");
        return res.redirect('/viewblog');
    } catch (err) {
        console.log(err)
        return false;
    }
}
const editid = async (req, res) => {
    let id = req.query.eid;

    try {
        let single = await UserModel.findById(id)
        console.log('edit user')
        return res.render('edit_blog', {
            record: single
        });
    } catch (err) {
        console.log(err)
        return false;
    }
}
const Updaterecord = async (req, res) => {
    const { editid, name, price, qty, description } = req.body;

    try {
        let ff = await UserModel.findById(editid);
        if (req.file) {
            try {
                fs.unlinkSync(ff?.image);
            }
            catch (err) {
                console.log(err);
                return false;
            }
            await UserModel.findByIdAndUpdate(editid, {
                name: name,
                price: price,
                qty: qty,
                description: description,
                image: req?.file?.path,
            })
            return res.redirect('/viewblog');

        }
        else {
            await UserModel.findByIdAndUpdate(editid, {
                name: name,
                price: price,
                qty: qty,
                description: description,
                image: ff?.image,
            })
            console.log('User updated successfully');
            return res.redirect('/viewblog');
        }
    } catch (err) {
        console.error(err);
        return false;
    }
}
module.exports = {
    addblogpage, insertuserblog, viewblogpage, deleteuser, editid, Updaterecord
}