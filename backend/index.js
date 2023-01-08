require("dotenv").config();
const fileUpload = require("express-fileupload")
const cloudinary = require("./utils/cloudinary")
const express = require("express");
require("./db/conection");
const cors = require("cors");
const Tourist = require("./routes/tourRoute")

const userRoutes = require("./routes/userRoutes")
// review

const review = require("./routes/reviewRouter")

const app = express();
app.use(express.json())
const port = process.env.PORT ||9999

//requirefileupload
app.use(fileUpload({useTempFiles:true}))
app.use(cors())
app.use("/api/user",userRoutes);
app.use("/api/tourist",Tourist)
app.use("/api/review",review)

cloudinary();
 app.listen(port,()=>{
    console.log(`server is started at PORT:${port}`)
 })
