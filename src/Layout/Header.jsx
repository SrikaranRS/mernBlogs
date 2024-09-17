import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FaBars } from 'react-icons/fa'; // Using react-icons for the menu icon
import { useNavigate } from "react-router";

const Header = () => {

  const navigate=useNavigate()
  return (
    <header className="bg-dark text-white py-3">
      <Navbar expand="md" className="container">
        <Navbar.Brand href="#" className="me-2"><h2 style={{color:"white"}}>Blog</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-5">
          <FaBars className="text-white" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-5" >
            <Nav.Link href="#" style={{fontSize:"20px",color:"white",marginLeft:"50px"}} onClick={()=>navigate('/')}>Home</Nav.Link>
            <Nav.Link href="#" style={{fontSize:"20px",color:"white",marginLeft:"50px"}}>About</Nav.Link>
            <Nav.Link href="#" style={{fontSize:"20px",color:"white",marginLeft:"50px"}}>Menu</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
