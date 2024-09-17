const mongoose=require("mongoose")

const blogSchema=new mongoose.Schema({
    title:String,
    content:String,
    category:{type:mongoose.Schema.ObjectId,ref:"categories"},
    author:String,
    createdAt:Date,
    updatedAt:Date,
})

const blogModel=mongoose.model('content',blogSchema);

module.exports=blogModel