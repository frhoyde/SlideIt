const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [ true , "Please provide a username"]
    },
    email: {
        type: String,
        required: [ true, "Please provide a valid email address"],
        unique: true,
        match: [
           /([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])/, "Please provide a valid email address"
        ] // Email Validation RegEx 5322 According to IETF
    },
    password: {
        type: String,
        required: [ true,  "Please provide a password"],
        minlength: 8,
        select: false
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
   

});


const User = mongoose.model("User", UserSchema);

module.exports = User;
