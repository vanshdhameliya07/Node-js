const UserModel = require('../models/UserModel')

const addpage = (req, res) => {
    return res.render('crud/add')
}
const viewpage = (req, res) => {
    return res.render('crud/view')
}



module.exports = {
    addpage, viewpage
}