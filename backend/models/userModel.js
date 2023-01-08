const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,

    },
    password: {
        type: String,
        required: true,
    },

}
   
);
//static signup function
userSchema.statics.signup = async (email, password) => {
    const exsist = await User.findOne({ email })
    if (exsist) {
        throw Error("Email is already exsist!")
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hash });
    return user;


}
// static logoin function
userSchema.statics.login = async (email, password) => {
    const user = await User.findOne({ email })
    if (!user) {
        throw Error("Incorrect email!")
    }
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw Error("Incorrect password")
    }
    return user;
}

const User = new mongoose.model("User", userSchema);
module.exports = User;