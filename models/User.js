const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const path_is_absolute = require('path-is-absolute');

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

UserSchema.pre("save", async function(next) {
    if(!this.isModified("password"))
    {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
    
});

UserSchema.methods.matchPasswords = async function(password) {
    return await bcrypt.compare(password, this.password);
}

const User = mongoose.model("User", UserSchema);

module.exports = User;
