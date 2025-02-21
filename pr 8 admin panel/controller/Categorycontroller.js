const CategoryModel = require('../models/CategoryModel');


const addcategorypage = (req, res) => {
    return res.render('category/addcategory');
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

const deleteUser = async (req, res) => {
    const id = req.query.did;
    await CategoryModel.findByIdAndDelete(id);
    return res.redirect('/category/viewcategory');

}

const editUser = async (req, res) => {
    const single = await CategoryModel.find({});
    console.log(single)
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

module.exports = {
    addcategorypage, viewcategorypage, insertCategory, deleteUser, editUser
}