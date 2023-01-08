const Review = require("../models/reviewModel");
const Tour = require("../models/TouristModel")


//get id
const getReview = async(req,res)=>{
    try{
        const id=req.params.id
        const ReviewData=await Review.findById({_id:id})
        res.status(200).json(ReviewData)
    }catch(err){
        res.status(400).json({error:err.messege})
    }
}
//get while data
 const getAllReviewData = async(req,res)=>{
    console.log(req, "kkkkk");
    try{
        const AllReviewData=await Review.find()
        res.status(200).json(AllReviewData)
    }catch(err){  
        res.status(400).json({error:err.messege})
    }
 }
 // create review
const  createReview =async(req,res)=>{
    console.log(req)
    try{
        const  tour =await Tour.findById(req.params.id)
        if(!tour){
            return res.status(401).json({
                meassage:"no tour found"
            })
        }
        console.log(tour)
        const token = req.headers.authorization
        const tokenid = JSON.parse(Buffer.from(token.split(".")[1],"base64").toString())
        // console.log(""+req.params.id+tokenid._id)
        console.log(tokenid);
        const responsiveReview= await Review.create({
            tourreview:""+req.params.id+tokenid.id,
            user:tokenid.id,
            tourid:req.params.id,
            name:tokenid.email,
            review:req.body.review,
            rating:req.body.rating
        })
        res.status(200).json(responsiveReview
            // status:"correct",
            // data:{
            //  data:responsiveReview
            // }
        )

    }catch (err){
        res.status(400).json({
        //   status: "wrong",
        //    meassage:"creation of review is fail",
          error:err.messege
        })
    }
}
 //delete
 const  deleteReviews = async(req,res)=>{
    try{
        const token = req.headers.authorization
        const tokenid = JSON.parse(Buffer.from(token.split(".")[1],"base64").toString())
        const Reviews = await Review.findById(req.params.id)
        if(tokenid.id == Reviews.user){
            const deleteReviews = await Review.findByIdAndDelete(req.params.id);
            res.status(200).json({
                status:"succesfully deleted"
            })
        }else{
            res.status(400).json({
                message:"you are not Authorized"
            })

        }
      

    }catch(err){
        res.status(400).json({error:err.message})
    }
 }
 //update
 const  editReviews = async(req,res)=>{
    try{
        const id=req.params.id;
        const Reviewdata = await Review.findByIdAndUpdate({_id:id},req.body,{new:true});
        res.status(200).json(Reviewdata)

    }catch(err){
        res.status(400).json({error:err.message})
    }
 }

module.exports = {
    getReview,
    getAllReviewData,
    createReview,
    editReviews,
    deleteReviews

}