const express = require('express');
const route = express.Router();
const categoryModule = require('../model/categoryModel');

// Route to get all categories
route.get('/', async (req, res) => {
    try {
        const categories = await categoryModule.find({});
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to get a category by ID
route.get('/:categoryId', async (req, res) => {
    const id = req.params.categoryId;
    try {
        const category = await categoryModule.findById(id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Route to add a new category

route.post('/',async (req,res)=>{

    const {name,slug,description}=req.body;

    try {

        
    const category=new categoryModule({name,slug,description});

    await category.save()


        
    } catch (error) {

        res.status(500).json({ message: error.message });
        
    }
})

route.put('/:id',async (req,res)=>{
    const id=req.params.id;
    const {name,slug,description}=req.body;
    try {

        const category=await categoryModule.findOneAndUpdate({_id:id},{name,slug,description},{new:true})
        res.json(category)
        
    } catch (error) {

        
        res.status(500).json({ message: error.message });
        
    }
})

route.delete('/:id',async (req,res)=>{
    const id=req.params.id;

    try {

        const category=await categoryModule.findByIdAndDelete(id)
        res.json(category)
        
    } catch (error) {
             
        res.status(500).json({ message: error.message });
        
    }

})

module.exports = route;
