import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import Resources from "./Resources";
import Forum from "./Forum";
import Articles from './Articles';
import Home from "./Home";
import '../styles/Navbar.css';
import Login from "./Login";
import Signup from "./Signup";
import Faq from "./Faq";
import About from "./About";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Nav>
          <Link className="nav-link text-white" to="/">Home</Link>
          <Link className="nav-link text-white" to="/forum">Forum</Link>
          <Link className="nav-link text-white" to="/articles">Articles</Link>
          <Link className="nav-link text-white" to="/resources">Resources</Link>
          <Link className="nav-link text-white" to="/faq">FAQ</Link>
          <Link className="nav-link text-white" to="/about">About</Link>
          <Link className="nav-link text-white" to="/login"></Link>
          <Link className="nav-link text-white" to="/signup"></Link>
        </Nav>
      </div>

      <div className='routes--items'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/forum' element={<Forum />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/about' element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default Navbar;