const ProductModel = require('../models/ProductModel');
const fs = require('fs')

const addblogpage = (req, res) => {
    return res.render('add_blog')
}

const insertuserblog = async (req, res) => {
    try {
        const { name, price, qty, description } = req.body;
        await ProductModel.create({
            name: name,
            price: price,
            qty: qty,
            description: description,
            image: req.file.path
        })
        return res.redirect('/product/addblog')
    } catch (err) {
        console.log(err);
        return false
    }
}
const viewblogpage = async (req, res) => {
    try {
        const single = await ProductModel.find({});
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
        const ff = await ProductModel.findById(id);
        fs.unlinkSync(ff.image)

        await ProductModel.findByIdAndDelete(id)
        console.log("record delete");
        return res.redirect('/product/viewblog');
    } catch (err) {
        console.log(err)
        return false;
    }
}
const editid = async (req, res) => {
    let id = req.query.eid;

    try {
        let single = await ProductModel.findById(id)
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
        let ff = await ProductModel.findById(editid);
        if (req.file) {
            try {
                fs.unlinkSync(ff?.image);
            }
            catch (err) {
                console.log(err);
                return false;
            }
            await ProductModel.findByIdAndUpdate(editid, {
                name: name,
                price: price,
                qty: qty,
                description: description,
                image: req?.file?.path,
            })
            return res.redirect('/product/viewblog');

        }
        else {
            await ProductModel.findByIdAndUpdate(editid, {
                name: name,
                price: price,
                qty: qty,
                description: description,
                image: ff?.image,
            })
            console.log('User updated successfully');
            return res.redirect('/product/viewblog');
        }
    } catch (err) {
        console.error(err);
        return false;
    }
}
module.exports = {
    addblogpage, insertuserblog, viewblogpage, deleteuser, editid, Updaterecord
}