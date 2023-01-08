const jwt = require("jsonwebtoken");
const createToken =(id, email)=>{
   return jwt.sign({id, email},"mySecret",{
        expiresIn:"20d"
    })
}
module.exports =createToken;