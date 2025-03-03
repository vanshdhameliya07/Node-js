const SubcategoryModel = require('../models/SubcategoryModel');

const CategoryModel = require('../models/CategoryModel');


const addsubcategorypage = async (req, res) => {
    try {
        let category = await CategoryModel.find({ status: 'active' });
        return res.render('subcategory/add_sub_category', {
            category: category
        })

    } catch (err) {
        console.log(err);
        return false;

    }
}
const viewsubcategorypage = async (req, res) => {
    try {
        let category = await SubcategoryModel.find({ status: "active" }).populate('categoryId');
        return res.render('subcategory/view_sub_category', {
            category: category
        })

    } catch (err) {
        console.log(err);
        return false;
    }
}
const deleteUser = async (req, res) => {
    try {
        const id = req.query.did;
        await SubcategoryModel.findByIdAndDelete(id);
        return res.redirect('/subcategory/viewsubcategory')

    } catch (err) {
        console.log(err);
        return false

    }
}
const editUser = async (req, res) => {

    try {
        const id = req.query.eid;
        let single = await SubcategoryModel.findById(id).populate('categoryId');
        let category = await CategoryModel.find({ status: 'active' });

        return res.render('subcategory/edit_sub_category', {
            single: single,
            category: category
        })

    } catch (err) {
        console.log(err);
        return false;
    }
}
const Updatesubcategory = async (req, res) => {

    try {
        const { editid, category, subcategory } = req.body;
        await SubcategoryModel.findByIdAndUpdate(editid, {
            categoryId: category,
            subcategory: subcategory,
        })
        console.log("user update")
        return res.redirect('/subcategory/viewsubcategory')
    } catch (err) {
        console.log(err);
        return false;
    }
}
const insertSubcategory = async (req, res) => {
    try {
        const { category, subcategory } = req.body;

        let sub = await SubcategoryModel.create({
            categoryId: category,
            subcategory: subcategory,
        })

        req.flash("success", "subcategory successfully create");
        return res.redirect('/subcategory/addsubcategory');

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
const Changestatus = async (req, res) => {
    let id = req.query.id;
    let status = req.query.status;
    
    if (status == "deactive") {
        await SubcategoryModel.findByIdAndUpdate(id, {
            status: "deactive"
        })
    }

    else {
        await SubcategoryModel.findByIdAndUpdate(id, {
            status: "active"
        })
    }
    req.flash('success', 'subCategory status Successfully Changed')
    return res.redirect('/subcategory/viewsubcategory');
}

module.exports = {
    addsubcategorypage, viewsubcategorypage, insertSubcategory, deleteUser, editUser, Updatesubcategory, logOut, Changestatus
}