const mongoose = require("mongoose")
mongoose.set('strictQuery',true)
mongoose.connect("mongodb://localhost:27017/tours")
.then(()=>{
    console.log("Connection Established")

})
.catch((err)=>{
    console.log(`Error is:${err}`)
})