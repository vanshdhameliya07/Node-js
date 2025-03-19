const UserModel = require('../model/UserModel');
const JWT = require('jsonwebtoken');

const register = async (req, res) => {

    try {
        const { name, email, password } = req.body;


        if (!name || !email || !password) {
            return res.status(701).send({
                success: false,
                message: 'form all field required'
            })
        }

        const user = await UserModel.create({
            name: name,
            email: email,
            password: password
        })
        return res.status(200).send({
            success: true,
            message: 'user successfully register',
            user
        })

    } catch (err) {
        return res.status(401).send({
            success: false,
            error: err
        })
    }
}

const loginuser = async (req, res) => {

    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(501).send({
                success: false,
                message: 'form all field required'

            })
        }

        const user = await UserModel.findOne({ email: email });

        if (!user || user.password != password) {

            return res.status(501).send({
                success: false,
                message: 'email and password not valid'

            })
        }

        const token = await JWT.sign({ pa: user }, 'tk', { expiresIn: '2hr' })

        return res.status(200).send({
            success: true,
            message: "user  successfully login",
            token
        })

    } catch (err) {
        return res.status(401).send({
            success: false,
            error: err

        })
    }

}

const alluser = async (req, res) => {
    try {
        const user = await UserModel.find({});
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
    register, loginuser, alluser
}