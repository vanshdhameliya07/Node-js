const CheckUser = (req, res, next) => {
    if (!req.cookies?.auth) {
        return res.redirect(`login`)
    }
    return next()
}

module.exports={
    CheckUser
}