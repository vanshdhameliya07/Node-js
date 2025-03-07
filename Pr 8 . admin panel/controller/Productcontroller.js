const CategoryModel = require('../models/CategoryModel')
const SubcategoryModel = require('../models/SubcategoryModel');
const ExsubcategoryModel = require('../models/ExsubcategoryModel.js')
const ProductModel = require('../models/ProductModel');

const path = require('path');
const fs = require('fs')

const addproductpage = async (req, res) => {
    try {

        let category = await CategoryModel.find({})
        let subcategory = await SubcategoryModel.find({}).populate("categoryId")

        return res.render('product/addproduct', {
            category: category,
            subcategory: subcategory,


        })
    } catch (err) {
        console.log(err);
        return false;
    }
}
const insertProduct = async (req, res) => {
    const { category, subcategory, exsubcategory, product, qty, price } = req.body;
    try {
        await ProductModel.create({
            categoryId: category,
            subcategoryId: subcategory,
            exsubcategoryId: exsubcategory,
            product: product,
            image: req?.file?.path,
            qty: qty,
            price: price,

        })

        console.log('product create user');
        req.flash('success', 'product create')
        return res.redirect('/product/viewproduct')

    } catch (err) {
        console.log(err);
        return false;
    }
}
const viewproductpage = async (req, res) => {
    try {
        const product = await ProductModel.find({}).populate('categoryId').populate('subcategoryId').populate('exsubcategoryId')
        return res.render('product/viewproduct', {
            product: product,

        })
    } catch (err) {
        console.log(err);
        return false;
    }
}
const deleteUser = async (req, res) => {
    try {
        const id = req.query.did;
        const rr = await ProductModel.findById(id);
        fs.unlinkSync(rr.image)
        await ProductModel.findByIdAndDelete(id);
        console.log('product delete');
        return res.redirect('/product/viewproduct')

    } catch (err) {
        console.log(err);
        return false;
    }
}

const Changestatus = async (req, res) => {
    let id = req.query.id;
    let status = req.query.status;
    if (status == "deactive") {
        await ProductModel.findByIdAndUpdate(id, {
            status: "deactive"
        })
    }

    else {
        await ProductModel.findByIdAndUpdate(id, {
            status: "active"
        })
    }
    req.flash('success', 'Category Successfully Changed')
    return res.redirect('/product/viewproduct');
}

const edituser = async (req, res) => {
    try {
        const id = req.query?.eid;

        let category = await CategoryModel.find({ status: 'active' });
        const subcategory = await SubcategoryModel.find({ status: 'active' });
        const exsubcategory = await ExsubcategoryModel.find({ status: 'active' })

        const single = await ProductModel.findById(id).populate('categoryId').populate('subcategoryId').populate('exsubcategoryId')

        return res.render('product/editproduct', {
            category: category,
            subcategory: subcategory,
            exsubcategory: exsubcategory,
            single: single
        })
    } catch (err) {
        console.log(err);
        return false;
    }

}
const Updateproduct = async (req, res) => {
    const { editid, category, subcategory, exsubcategory, product, qty, price } = req.body;

    try {
        const ff = await ProductModel.findById(editid);
        if (req.file) {
            try {
                fs.unlinkSync(ff?.image)
            } catch (err) {
                console.log(err);
                return false
            }
            await ProductModel.findByIdAndUpdate(editid, {
                categoryId: category,
                subcategoryId: subcategory,
                exsubcategoryId: exsubcategory,
                product: product,
                qty: qty,
                price: price,
                image: req.file?.path

            })
            console.log('update product user')
            return res.redirect('/product/viewproduct')

        } else {
            await ProductModel.findByIdAndUpdate(editid, {
                categoryId: category,
                subcategoryId: subcategory,
                exsubcategoryId: exsubcategory,
                product: product,
                qty: qty,
                price: price,
                image: ff?.image,

            })
            console.log('update product user')
            return res.redirect('/product/viewproduct')
        }


    } catch (err) {
        console.log(err);
        return false;
    }
}
const AjaxCategorywiseRecord = async (req, res) => {
    try {
        let subcategoryid = req.query.subcategoryId;
        let subcategory = await SubcategoryModel.find({ subcategoryId: subcategoryid }).populate('categoryId')
        let exsubcategory = await ExsubcategoryModel.find({ subcategoryId: subcategoryid }).populate('categoryId').populate('subcategoryId')
        return res.status(200).send({
            success: true,
            message: 'record successfully fetch',
            exsubcategory: exsubcategory,
            subcategory: subcategory,
        })

    } catch (err) {
        console.log(err);
        return false;
    }
}
module.exports = {
    addproductpage, insertProduct, viewproductpage, deleteUser, Changestatus, edituser, Updateproduct, AjaxCategorywiseRecord
}