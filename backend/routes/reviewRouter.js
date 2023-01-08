const express = require("express")
const {verfiyToken}=require("../controllers/userControllers")

const {getReview,getAllReviewData,createReview, deleteReviews, editReviews} = require("../controllers/reviewController")
const router = express.Router()
 

router.get("/",getAllReviewData )
router.get("/:id",getReview)
router.post("/:id",verfiyToken,createReview)
router.delete("/:id",verfiyToken,deleteReviews)
router.patch("/:id",editReviews)


module.exports = router