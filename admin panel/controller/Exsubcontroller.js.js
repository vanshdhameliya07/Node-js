const ExsubcategoryModel = require('../models/ExsubcategoryModel.js')
const CategoryModel = require('../models/CategoryModel')
const SubcategoryModel = require('../models/SubcategoryModel');




const exsubcategorypage = async (req, res) => {
    try {
        let category = await CategoryModel.find({ status: 'active' });
        let subcategory = await SubcategoryModel.find({ status: 'active' });

        return res.render('exsubcategory/ex_add_sub_category', {
            category: category,
            subcategory: subcategory
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}
const ajaxCategorywiseRecord = async (req, res) => {
    let categoryid = req.query.categoryid;

    try {

        let category = await SubcategoryModel.find({ categoryId: categoryid }).populate('categoryId');
        let subcategory = await ExsubcategoryModel.find({ categoryId: categoryid }).populate('categoryId').populate('subcategoryId');

        return res.status(200).send({
            success: true,
            message: "record successfully fetch",
            category: category,
            subcategory: subcategory
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const insertExsubcategory = async (req, res) => {
    try {
        const { category, subcategory, exsubcategory } = req.body;

        await ExsubcategoryModel.create({
            categoryId: category,
            subcategoryId: subcategory,
            exsubcategory: exsubcategory
        })
        req.flash('success', "Exsubcategory successfully add");
        return res.redirect('/exsubcategory/exaddsubcategory')

    } catch (err) {
        console.log(err);
        return false;
    }

}

const exsubviewcategorypage = async (req, res) => {
    try {
        const exsubcategories = await ExsubcategoryModel.find({}).populate('categoryId').populate('subcategoryId');
        return res.render('exsubcategory/ex_view_sub_category', {
            exsubcategories: exsubcategories
        })

    } catch (err) {
        console.log(err);
        return false;
    }
}
const edituser = async (req, res) => {
    try {
        const id = req.query?.eid;

        let category = await CategoryModel.find({ status: 'active' });
        const subcategory = await SubcategoryModel.find({ status: 'active' })

        const single = await ExsubcategoryModel.findById(id).populate('categoryId').populate('subcategoryId')

        return res.render('exsubcategory/ex_edit_sub_category', {
            category: category,
            subcategory: subcategory,
            single
        })
    } catch (err) {
        console.log(err);
        return false;
    }

}
const deleteUser = async (req, res) => {
    try {
        const id = req.query.did;
        await ExsubcategoryModel.findByIdAndDelete(id);
        return res.redirect('/exsubcategory/exviewsubcategory');

    } catch (err) {
        console.log(err);
        return false

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

const UpdateExsubcategory = async (req, res) => {
    try {
        const { editid, category, subcategory, exsubcategory } = req.body;
        await ExsubcategoryModel.findByIdAndUpdate(editid, {
            categoryId: category,
            subcategoryId: subcategory,
            exsubcategory: exsubcategory,
        })
        return res.redirect('/exsubcategory/exviewsubcategory')

    } catch (err) {
        console.log(err);
        return false;
    }
}

const Changestatus = async (req, res) => {
    let id = req.query.id;
    let status = req.query.status;
    if (status == "deactive") {
        await ExsubcategoryModel.findByIdAndUpdate(id, {
            status: "deactive"
        })
    }

    else {
        await ExsubcategoryModel.findByIdAndUpdate(id, {
            status: "active"
        })
    }
    req.flash('success', 'Category Successfully Changed')
    return res.redirect('/exsubcategory/exviewsubcategory');
}

module.exports = {
    exsubcategorypage, exsubviewcategorypage, logOut, insertExsubcategory, deleteUser, ajaxCategorywiseRecord, edituser, UpdateExsubcategory, Changestatus
}