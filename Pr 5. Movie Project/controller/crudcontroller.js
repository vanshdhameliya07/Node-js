const UserModel = require('../models/UserModel');
const fs = require('fs')

const addpage = (req, res) => {
    return res.render('crud/add');
}
const editpage = (req, res) => {
    return res.render('crud/edit');
}
const viewpage = async (req, res) => {
    try {
        let allrecord = await UserModel.find({});
        return res.render('crud/view', {
            record: allrecord
        });
    }
    catch (err) {
        console.log(err);
        return false;
    }
}

const editId = async (req, res) => {
    let id = req.query.eid;

    try {
        let single = await UserModel.findById(id)
        console.log('edit user')
        return res.render('crud/edit', {
            record: single
        });
    } catch (err) {
        console.log(err)
        return false;
    }
}

const deleteId = async (req, res) => {

    let id = req.query.did;
    await UserModel.findByIdAndDelete(id)
    
    try {
       
        console.log("record delete");
        return res.redirect('/crud/view');
    } catch (err) {
        console.log(err)
        return false;
    }

}
const updateRecord = async (req, res) => {
    const { editid, name, description, price } = req.body
    try {
        await UserModel.findByIdAndUpdate(editid, {
            name: name,
            description: description,
            price: price,

        });
        console.log('user update');
        return res.redirect('/crud/view');
    }
    catch (err) {
        console.log(err);
        return false;
    }
}

const insertRecord = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        console.log(req.body)
        await UserModel.create({
            name: name,
            description: description,
            price: price,
            image: req?.file?.path

        })
        console.log("user add");
        return res.redirect('/crud/view');
    }
    catch (err) {
        console.log(err)
        return false;
    }
}

module.exports = {
    addpage, viewpage, editpage, insertRecord, deleteId, editId, updateRecord
}