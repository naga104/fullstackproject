const express = require("express")

const Tourist = require("../models/TouristModel")

const router = express.Router()

//require the controllers
const { getTourist,createTourist,editTourist,deleteTourist }=require("../controllers/tourController")
const { getallTourist } = require("../controllers/tourController")


router.get("/:id",getTourist)

router.get("/",getallTourist)

router.post("/",createTourist)

router. patch("/:id",editTourist)

router.delete("/:id",deleteTourist)

module.exports=router