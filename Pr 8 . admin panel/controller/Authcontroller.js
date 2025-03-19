const UserModel = require(`../models/UserModel`);

var nodemailer = require('nodemailer');


const registerpage = (req, res) => {
    return res.render(`register`);
}
const loginpage = (req, res) => {
    if (res.locals?.users) {
        return res.redirect(`/dashboard`);
    }
    return res.render(`login`);
}
const dashboardpage = (req, res) => {
    return res.render(`dashboard`);
}
const Otppage = (req, res) => {
    return res.render(`otp`);
}
const forgotpage = (req, res) => {
    return res.render('forgot');
}

const aboutpage = (req, res) => {
    return res.render(`about`);
}
const newpasswordpage = (req, res) => {
    return res.render(`newpassword`);
}

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        await UserModel.create({
            name: name,
            email: email,
            password: password
        })
        console.log(`user register`);
        return res.redirect(`/`)

    } catch (err) {
        console.log(err);
        return false;
    }
}

const loginUser = (req, res) => {
    try {
        return res.redirect(`/dashboard`);

    } catch (error) {
        console.log(err);
        return false;
    }
}
const logOut = (req, res) => {
    req.logout((err) => {
        if (err) {
            console.log(err);
            return false;
        }
    })
    console.log('log out user')
    return res.redirect('/');
}

const emailuser = async (req, res) => {
    const useremail = req.body.useremail
    let user = await UserModel.findOne({ email: useremail })

    if (!user) {
        console.log('email is not found');
        return res.redirect('/');
    }

    const otp = Math.floor(Math.random() * 100000);

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'vanshdhameliya07@gmail.com',
            pass: 'qfbz fefe uymr rmyw'
        }
    });

    var mailOptions = {
        from: 'vanshdhameliya07@gmail.com',
        to: useremail,
        subject: 'forgot password',
        html: `<h1 style='color:green'>Hello ${user?.name} your otp :-${otp}</h1>`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);

            let auth = {
                email: useremail,
                otp: otp
            }
            res.cookie('user', auth)
            return res.redirect('/otp')
        }
    });
}

const otpPage = async (req, res) => {
    try {
        return res.render('otp');

    } catch (err) {
        console.log(err);
        return false;
    }
}
const userOtp = async (req, res) => {
    try {
        const otp = req.body.otp;
        if (req.cookies.user.otp == otp) {
            return res.redirect('/newpassword')
        } else {
            console.log('otp is not match');
            return res.redirect('/otp')
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}
const usernewPassword = async (req, res) => {
    try {
        let newpass = req.body.newpass;
        let cpass = req.body.cpass;
        if (newpass == cpass) {
            let email = req.cookies.user?.email;
            let user = await UserModel.findOneAndUpdate({ email: email }, {
                password: newpass
            })
            res.clearCookie('user')
            return res.redirect('/');
        }
        else {
            console.log('newpassword and conform password is not match');
            return res.redirect('/newpassword')
        }

    } catch (err) {
        console.log(err);
        return false;
    }
}
module.exports = {
    registerpage, loginpage, registerUser, loginUser, aboutpage, dashboardpage, logOut, Otppage, forgotpage, emailuser, otpPage, userOtp, newpasswordpage, usernewPassword
}