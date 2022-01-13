exports.register = (req, res, next) => {
    res.send("Register Route");
};

exports.login = (req, res, next) => {
    res.send("Login Route");
};

exports.forgotpassword = (req, res, next) => {
    res.send("Forgot Password Route");
};

exports.resetpassword = (req, res, next) => {
    res.send("Reset Password Route");
};
