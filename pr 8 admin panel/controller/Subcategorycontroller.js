const CategoryModel = require('../models/CategoryModel');
const SubcategoryModel = require('../models/SubcategoryModel')

const addSubcategory = async (req, res) => {
    try {
        let scategory = await CategoryModel.find({ status: 'active' });
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
        console.log(category, subcategory)
        let sub = await SubcategoryModel.create({
            categoryId: category,
            subcategory: subcategory
        })
        req.flash("success", "subcategory successfully create");
        return res.redirect('/subcategory/add_subcategory')

    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    addSubcategory, insertSubcategory
}