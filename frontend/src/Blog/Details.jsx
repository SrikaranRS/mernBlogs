import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const [blog, setBlog] = useState(null); // Initialize with null
  const { id } = useParams(); // Extract id from URL params

  
  console.log(id)


  const apiUrl = "http://localhost:8010";

  const getDetails = async () => {
    try {
      const response = await axios.get(`${apiUrl}/blog/${id}`);
      setBlog(response.data);
    } catch (error) {
      console.error("Error fetching blog details:", error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []); // Dependency array includes id

  // Conditional rendering to handle loading and no data states
 /*  if (!blog) return <div>Loading...</div>;
  if (!blog.title) return <div>Blog not found</div>; */

  return (
    <div className="container mt-5">
     {blog && <div className="card mb-4">
        <img
          src={blog.image || "https://via.placeholder.com/350x200"} // Fallback image
          className="card-img-top"
          alt={blog.title}
        />
        <div className="card-body">
          <h5 className="card-title">{blog?.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{blog?.category}</h6>
          <p className="card-text">{blog?.content}</p>
          <p className="card-text">
            <small className="text-muted">Written by {blog?.author}</small>
          </p>
          <p className="card-text">
            <small className="text-muted">Created at: {new Date(blog?.createdAt).toLocaleDateString()}</small>
          </p>
          <p className="card-text">
            <small className="text-muted">Updated at: {new Date(blog?.updatedAt).toLocaleDateString()}</small>
          </p>
          {/* Button can be added if needed */}
        </div>
  
        
      </div>}
    </div>
  );
};

export default Details;
