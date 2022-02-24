const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

exports.register = async (req, res, next) => {
    const { username, email, password } = req.body;


    try {
        const user = await User.create({
            username,
            email,
            password
        });

        res.status(201).json({
            success: true,
            user,
        });
    } catch(error){
        next(error);
    }

};

exports.login = async (req, res, next) => {
    const {email, password } = req.body;

    if(!email || !password){
        return next(new ErrorResponse("Please Provide an Email and a password", 401));
    }

    try{
        const user = await User.findOne({ email }).select("+password");

        if(!user){
            return next(new ErrorResponse("Invalid Credentials", 401));
        }

        const isMatch = await user.matchPasswords(password);

        if(!isMatch){
            res.status(404).json({ success: false, error: "Password Incorrect"});
        }

        res.status(200).json({ success: true, token: "12345"});
    } catch(error){
        res.status(500).json({success: false, error: error.message})
    }

};

exports.forgotpassword = (req, res, next) => {
    res.send("Forgot Password Route");
};

exports.resetpassword = (req, res, next) => {
    res.send("Reset Password Route");
};
