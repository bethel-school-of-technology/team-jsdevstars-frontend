import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import Signup from "./Signup";
import Login from "./Login";
import Resources from "./Resources";
import Forum from "./Forum";
import Articles from './Articles';
import Home from "./Home";
import '../styles/Navbar.css'

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Nav>
          <Link className="nav-link text-white" to="/">Home</Link>
          <Link className="nav-link text-white" to="/forum">Forum</Link>
          <Link className="nav-link text-white" to="/articles">Articles</Link>
          <Link className="nav-link text-white" to="/resources">Resources</Link>
          <Link className="nav-link text-white" to="/signup">Sign up</Link>
          <Link className="nav-link text-white" to="/login">Log in</Link> 
        </Nav>
      </div>

      <div className='routes--items'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path='/forum' element={<Forum />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/resources' element={<Resources/>}/>
        </Routes>
      </div>
    </>
  );
}

export default Navbar;