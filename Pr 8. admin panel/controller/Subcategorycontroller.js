const CategoryModel = require('../models/CategoryModel');
const SubcategoryModel = require('../models/SubcategoryModel');

const viewSubcategory = async (req, res) => {
    try {
        let categories = await SubcategoryModel.find({}).populate("categoryId");
        return res.render('subcategory/view_subcategory', {
            category: categories
        })

    } catch (err) {
        console.log(err);
        return false;
    }
}

const deleteUser = async (req, res) => {
    const id = req.query.did;
    await SubcategoryModel.findByIdAndDelete(id);
    return res.redirect('/subcategory/view_subcategory')
}

const editUser = async (req, res) => {

    try {
        const id = req.query.eid;
        let single = await SubcategoryModel.findById(id).populate('categoryId');
        let category = await CategoryModel.find({ status: 'active' });
        return res.render('subcategory/edit_subcategory', {
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
        console.log(category, subcategory)
        await SubcategoryModel.findByIdAndUpdate(editid, {
            categoryId: category,
            subcategory: subcategory,
        })
        console.log("user update")
        return res.redirect('/subcategory/view_subcategory')
    } catch (err) {
        console.log(err);
        return false;
    }
}

const addSubcategory = async (req, res) => {
    try {
        let scategory = await CategoryModel.find({ status: 'active' });
        console.log(scategory)
        return res.render('subcategory/add_subcategory', {
            category: scategory
        })

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
        return res.redirect('/subcategory/add_subcategory');

    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    addSubcategory, insertSubcategory, viewSubcategory, deleteUser, editUser, Updatesubcategory
}