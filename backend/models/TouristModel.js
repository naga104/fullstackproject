
const mongoose=require("mongoose");
const geocoder = require("../utils/map");
const TourSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    addresses:{
        type:String,
        required:true
    },
    location:{type:{
        type:String,
        enum:["Point"]
    },coordinate:{
        type:[Number],
        index:"2dsphere"
    },
    Address:String
},
    description:{
        type:String,
        required:true
    },
    locationfee:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true,
    },
   
},{timestamps:true})


TourSchema.pre('save',async function(next){
    const loc=await geocoder.geocode(this.addresses);
    // console.log(loc);
    this.location={type:"Point",
    coordinate:[loc[0].longitude,loc[0].latitude],
    Address:loc[0].formattedAddress
        
    } 
})


const Tourist=new mongoose.model("model",TourSchema)

module.exports=Tourist;