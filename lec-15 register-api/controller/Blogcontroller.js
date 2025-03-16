const BlogModel = require('../model/BlogModel');

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
        const blogs = await BlogModel.find({}).populate('userId');
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
module.exports = {
    createblog, viewblog
}