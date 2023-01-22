import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Nav, NavItem } from 'react-bootstrap';
import Signup from "./Signup";
import Login from "./Login";
import Resources from "./Resources";
import Forum from "./Forum";
import Articles from './Articles';
import '../styles/Navbar.css'

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Nav>
            <Link className="nav-link" to="/forum">Forum</Link>
            <Link className="nav-link" to="/articles">Articles</Link>
            <Link className="nav-link" to="/resources">Resources</Link>
            <Link className="nav-link" to="/signup">Sign up</Link>
            <Link className="nav-link" to="/login">Log in</Link> 
        </Nav>
      </div>

      <div className='routes--items'>
        <Routes>
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