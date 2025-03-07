const UserModel = require('../model/UserModel');
const JWT = require(`jsonwebtoken`)

const registeruser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(401).send({
                success: false,
                message: "All field is required"
            })
        }

        let user = await UserModel.create({
            name: name,
            email: email,
            password: password
        })


    } catch (err) {
        return res.status(501).send({
            success: false,
            error: err
        })
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(401).send({
            success: false,
            message: 'All field required'
        })
    }

    const user = await UserModel.findOne({ email: email });

    if (!user || user.password != password) {
        return res.status(401).send({
            success: false,
            message: "Email and password not valid"
        })
    }

    const token = await JWT.sign({ payload: user }, 'jee', { expiresIn: '3hr' });
    return res.status(200).send({
        success: true,
        message: "Login successfully",
        token: token
    })

}
const alluser = async (req, res) => {
    try {
        let user = await UserModel.find({});
        return res.status(200).send({
            success: true,
            message: 'user successfully fetch',
            user: user
        })

    } catch (err) {
        return res.status(501).send({
            success: false,
            error: err
        })
    }
}
module.exports = {
    registeruser, loginUser, alluser
}