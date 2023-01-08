const express = require("express");
const router = express.Router();


const { loginUser,signupUser} =require("../controllers/userControllers")



//login user
router.post("/login", loginUser);

//sigup user 
router.post("/signup", signupUser);
// tourist


module.exports = router;
