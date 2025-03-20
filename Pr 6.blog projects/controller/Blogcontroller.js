const BlogModel = require(`../models/BlogModel`);
const fs = require(`fs`);

const addblogpage = (req, res) => {
    return res.render(`blog/addblog`);
}
const editblogpage = (req, res) => {
    return res.render(`blog/editblog`);
}
const viewblogpage = async (req, res) => {
    try {
        let allrecord = await BlogModel.find({});
        return res.render(`blog/viewblog`, {
            record: allrecord
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}

const deleteId = async (req, res) => {
    let id = req.query.did;
    try {
        const ff = await BlogModel.findById(id);
        fs.unlinkSync(ff?.image);

        await BlogModel.findByIdAndDelete(id);
        console.log(`delete user`);
        return res.redirect(`viewblog`);

    } catch (err) {
        console.log(err);
        return false
    }
}

const editId = async (req, res) => {

    let id = req.query.eid;
    try {
        const record = await BlogModel.findById(id);
        console.log(`edit user`);
        return res.render(`blog/editblog`, {
            single: record
        })

    }
    catch (err) {
        console.log(err);
        return false;
    }
}

const UpdateRecord = async (req, res) => {
    const { editid, title, description } = req.body;
    console.log(req.body)

    try {

        let ff = await BlogModel.findById(editid);

        if (req.file) {
            try {
                fs.unlinkSync(ff?.image);
            } catch (err) {
                console.log(err);
                return false;
            }
            await BlogModel.findByIdAndUpdate(editid, {
                title: title,
                description: description,
                image: req?.file?.path
            })
            console.log(`user update`);
            return res.redirect(`/blog/viewblog`);
        }
        else {
            await BlogModel.findByIdAndUpdate(editid, {
                title: title,
                description: description,
                image: ff?.image,
            })
            console.log('User updated successfully');
            return res.redirect('/blog/viewblog');
        }

    } catch (err) {
        console.log(err);
        return false;
    }
}

const insertRecord = async (req, res) => {
    try {
        const { title, description } = req.body;
        console.log(req.file);
        await BlogModel.create({
            title: title,
            description: description,
            image: req.file?.path,
        })
        console.log(`blog user add`);
        return res.redirect(`viewblog`);

    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    addblogpage, viewblogpage, insertRecord, deleteId, editId, UpdateRecord, editblogpage
}