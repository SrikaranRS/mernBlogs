import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const Category = () => {
    const [blogs,setBlogs]=useState([])
    const [category,setCategory]=useState([]);
    const apiUrl = "http://localhost:8010";
    const navigate=useNavigate()

    const { id } = useParams();

    const getBlogs=async ()=>{
        try {
            const res = await axios.get(`${apiUrl}/categorie/${id}`);
            
            setBlogs(res.data);
            
            console.log(res.data)
          } catch (err) {
            console.error("Error fetching blogs:", err);
          }
    } 

    const getCategory=async ()=>{

        try {
            const res = await axios.get(`${apiUrl}/api/categories/${id}`);
            setCategory(res.data);
            console.log(res.data)
          } catch (err) {
            console.error("Error fetching categories:", err);
          }

    }

  useEffect(()=>{
    getCategory()
   getBlogs() 
  },[])

  return (
    <div className="container mt-5">
         <h2 className="card-title">{category?.name}</h2>
         {
            blogs.map((item)=>
                <div key={item._id} className="col-md-6 mb-4 p-5 mx-auto">
            <div className="card">
              <img
                src={item.image || "https://via.placeholder.com/350x200"} // Fallback image
                className="card-img-top"
                alt={item.title || "Blog image"} // Improved alt text
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">
                  Written by <strong>{item.author}</strong>
                </p>
                <Button variant="primary" onClick={() => navigate(`/details/${item._id}`)}>
                  Read More
                </Button>
              </div>
            </div>
          </div>)
         }
    </div>
  );
};

export default Category;
