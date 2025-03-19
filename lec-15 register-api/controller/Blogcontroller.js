const BlogModel = require('../model/BlogModel');

const fs = require('fs');


const createblog = async (req, res) => {
    try {
        const { title, content } = req.body;

        const blog = await BlogModel.create({
            userId: req.user._id,
            title: title,
            content: content,
            image: req.file.path
        })
        return res.status(200).send({
            success: true,
            message: 'blog data success',
            blog
        })

    } catch (err) {
        return res.status(401).send({
            success: false,
            message: err
        })
    }
}
const viewblog = async (req, res) => {
    try {
        const user = req.user;
        const blogs = await BlogModel.find({ userId: req.user?._id }).populate('userId');
        return res.status(200).send({
            success: true,
            message: 'blog data success',
            length: blogs.length,
            blogs
        })

    } catch (err) {
        return res.status(401).send({
            success: false,
            message: err
        })
    }
}

const deleteBlog = async (req, res) => {
    try {
        const id = req.query?.id;
        const blogid = await BlogModel.findById(id);
        fs.unlinkSync(blogid?.image)
        const deleteuser = await BlogModel.findByIdAndDelete(id)

        return res.status(200).send({
            success: true,
            message: 'blog  successfully delete',
            deleteuser
        })

    } catch (err) {
        return res.status(401).send({
            success: false,
            message: err
        })
    }

}


module.exports = {
    createblog, viewblog, deleteBlog
}