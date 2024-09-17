const mongoose=require("mongoose");

const categorySchema=new mongoose.Schema({
    name:String,
    slug:String,
    description:String
},{
    timestamps:true
})

const categoryModel=mongoose.model('category',categorySchema);

module.exports=categoryModel