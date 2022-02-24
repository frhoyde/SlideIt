const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [ true , "Please provide a username"],
        unique: true,
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
// password hashing
UserSchema.pre("save", async function(next) {
    if(!this.isModified("password"))
    {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
    
});
// login comparison
UserSchema.methods.matchPasswords = async function(password) {
    return await bcrypt.compare(password, this.password);
}

UserSchema.methods.getSignedToken = function() {
    return jwt.sign({id:this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
