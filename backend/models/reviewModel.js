const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
    tourreview:{
        type:String,
        unique:true
    },
    tourid:{
        type:String,
    },
    user:{
        type:String,
    },
    name:{
        type:String,

    },
    review:{
        type:String,
        require:true,
    },
    rating:{
        type:Number,
        min:1,
        max:5,
        require:true,
    }
},{timestamps:true})

const Review = new mongoose.model("Review" ,reviewSchema);

module.exports = Review