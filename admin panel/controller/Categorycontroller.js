const CategoryModel = require('../models/CategoryModel')


const addcategorypage = (req, res) => {
    return res.render('category/addcategory')
}
const viewcategorypage = async (req, res) => {
    try {
        let categories = await CategoryModel.find({});
        return res.render('category/viewcategory', {
            category: categories
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}
const insertCategory = async (req, res) => {
    try {
        const { category } = req.body;
        const add = await CategoryModel.create({
            category: category
        })
        req.flash('success', 'category add successfully')
        return res.redirect('/category/addcategory');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const Changestatus = async (req, res) => {
    let id = req.query.id;
    let status = req.query.status;
    if (status == "deactive") {
        await CategoryModel.findByIdAndUpdate(id, {
            status: "deactive"
        })
    }

    else {
        await CategoryModel.findByIdAndUpdate(id, {
            status: "active"
        })
    }
    req.flash('success', 'Category Successfully Changed')
    return res.redirect('/category/viewcategory');
}
const deleteUser = async (req, res) => {
    const id = req.query.did;
    await CategoryModel.findByIdAndDelete(id);
    return res.redirect('/category/viewcategory');

}
const editUser = async (req, res) => {
    let id = req.query.eid;
    try {

        let single = await CategoryModel.findById(id);
        return res.render('category/editcategory', {
            single: single
        })

    } catch (err) {
        console.log(err);
        return false;
    }
}
const Updatecategory = async (req, res) => {

    try {
        const { editid, category } = req.body;
        console.log(req.body)
        await CategoryModel.findByIdAndUpdate(editid, {
            category: category
        })
        return res.redirect('/category/viewcategory')
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
    addcategorypage, insertCategory, viewcategorypage, Changestatus, deleteUser, editUser, Updatecategory, logOut
}