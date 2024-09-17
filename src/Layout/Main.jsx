import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap'; // For Bootstrap-styled buttons
import { useNavigate } from 'react-router-dom'; // Use 'react-router-dom' for navigation

const Main = () => {
  const [blog, setBlog] = useState([]);
  const [category, setCategory] = useState([]);
  const apiUrl = "http://localhost:8010";
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/blog`);
      setBlog(res.data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  const fetchCategory = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/categories`);
      setCategory(res.data);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  useEffect(() => {
    fetchData();
    fetchCategory();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Blog Section */}
        <div className="col-md-8 border p-5">
          <h2 className="mb-4">Recent Blogs...</h2>
          <div className="row">
            {blog.map((item) => (
              <div key={item._id} className="col-md-6 mb-4">
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
              </div>
            ))}
          </div>
        </div>

        {/* Category Section */}
        <div className="col-md-4 d-flex flex-column " style={{alignItems:"right"}}>
          <h4 className="mb-4">Categories</h4>
          <ul className="list-unstyled">
            {category.map((cat) => (
              <li key={cat._id}>
                <a onClick={()=> navigate(`/category/${cat._id}`)} style={{cursor:"pointer", textDecoration: 'underline' }} className="text-decoration-none">
                  {cat.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
