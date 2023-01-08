const User = require("../models/userModel");
const webtoken = require("jsonwebtoken")
const createToken = require("../utils/token");


//login user

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password);
        // crate token
         
        const token = createToken(user._id, email)
        res.status(200).json({ user:user._id, email, password, token });


    } catch (err) {
        res.status(400).json({ error: err.message })

    }

};

//signup user

const signupUser = async (req, res) => {
    // res.json({msg:"user signed up!"});
    const { _id, email, password } = req.body;
    try {
        const user = await User.signup(email, password);
        // crate token

        const token = createToken(user._id, email)
        res.status(200).json({_id, email, password, token });


    } catch (err) {
        res.status(400).json({ error: err.message })

    }

}

const verfiyToken = (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1]
    } else {
        return res.status(401).json({
            message: "please login or register first"
        })
    }
    // webtoken.verify(token,createToken,(err)=>{
    //     if(err){
    //         return res.status(401).json({
    //             inavalid:"invalid token"
    //         })
    //     }
    //     next()

    // }) 

    next()
    
}

module.exports = {
    loginUser,
    signupUser,
    verfiyToken
}