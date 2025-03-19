const UserModel = require(`../models/UserModel`);
var nodemailer = require('nodemailer');

const registerpage = (req, res) => {
    return res.render(`register`);
}
const loginpage = (req, res) => {
    return res.render(`login`);
}
const dashboardpage = (req, res) => {
    return res.render('dashboard');
}



const registerUser = async (req, res) => {
    const { name, email, password, newpassword } = req.body;
    console.log(req.body);
    try {
        await UserModel.create({
            name: name,
            email: email,
            password: password,
            newpassword: newpassword
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
        console.log("done");
        return res.redirect('/dashboard');

    } catch (err) {
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

const Otppage = (req, res) => {
    try {
        return res.render('otp');

    } catch (err) {
        console.log(err);
        return false;
    }
}

const newpassword = (req, res) => {
    try {
        return res.render('newpassword');

    } catch (err) {
        console.log(err);
        return false;
    }
}

const emailOtp = async (req, res) => {
    try {
        const useremail = req.body.useremail;
        let user = await UserModel.findOne({ email: useremail });

        if (!user) {
            console.log('email is not found');
            return res.redirect('/');
        }

        const otp = Math.floor(Math.random() * 1000)

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'vanshdhameliya07@gmail.com',
                pass: 'pcpo tmru shub oqud'
            }
        });

        var mailOptions = {
            from: 'vanshdhameliya07@gmail.com',
            to: useremail,
            subject: 'Forgot Password',
            html: `<h1 style="color:green">otp genrate ${otp}</h1>`
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

    } catch (err) {
        console.log(err);
        return false;
    }
}
const userOtp = async (req, res) => {
    try {
        const otp = req.body.otp;
        if (req.cookies.user.otp == otp) {
            console.log('otp is  match');
            return res.redirect('/newpassword');
        }
        else {
            console.log('otp is not match');
            return res.redirect('/otp')
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}
const Usernewpassword = async (req, res) => {

    const newpass = req.body.newpass;
    const cpass = req.body.cpass;
    if (newpass == cpass) {
        let email = req.cookies.user.email
        let user = await UserModel.findOneAndUpdate({ email: email }, {
            password: newpass
        })
        res.clearCookie('user');
        return res.redirect('/')
    }

}
module.exports = {
    registerpage, loginpage, registerUser, loginUser, dashboardpage, logOut, Otppage, newpassword, emailOtp, userOtp, Usernewpassword
}