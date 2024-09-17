const express=require('express');
const cors=require('cors')
const bodyParser=require('body-parser')
const mongoose=require('mongoose');
const categoryRoutes=require('./route/categoryRoute')
const Category=require('./model/categoryModel')
const blogModel=require('./model/blogModel')


const app=express();


app.use(cors())
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/blog')
.then(()=>{
    console.log("Database connected")
})

.catch(()=>{
    console.log("Database not connected");
})



app.use('/api/categories',categoryRoutes)




app.post('/blog',async (req,res)=>{

    const data=new blogModel({
        title:req.body.title,
        content:req.body.content,
        category:req.body.category,
        author:req.body.author,
        createdAt:req.body.createdAte,
        updatedAt:req.body.updatedAt,
    })

    await data.save();

    res.json()
})

app.get('/blog',async (req,res)=>{

    const data=await blogModel.find({});
    res.json(data)

})

app.get('/blog/:id',async (req,res)=>{

    const id=req.params.id;

    const data=await blogModel.findById(id);

    res.json(data)
})

app.put('/blog/:id',async (req,res)=>{

    const id=req.params.id;

    const data=await blogModel.findOneAndUpdate({_id:id},{
        title:req.body.title,
        content:req.body.content,
        category:req.body.category,
        author:req.body.author,
        createdAt:req.body.createdAte,
        updatedAt:req.body.updatedAt,
    },{new:true})

    res.json(data)
})

app.delete('/blog/:id',async (req,res)=>{

    const id=req.params.id;

    const deletDATA=await blogModel.findByIdAndDelete(id)

    res.json(deletDATA)
})

app.get('/categorie/:categorieId',async (req,res)=>{
    const categorieID=req.params.categorieId;

    const categoryExists = await Category.findById(categorieID);
    if(!categoryExists) {
        res.status(400).json({message: 'Invalid Category ID'})
    }


    const post=await blogModel.find({category:categorieID})
    res.json(post)
})



app.listen(8010,()=>{
    console.log("Port Connected")
})