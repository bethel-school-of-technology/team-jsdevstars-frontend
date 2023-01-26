import React from "react";
import '../styles/Header.css';
import { Link, Routes, Route } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import Login from "./Login";
import Signup from "./Signup";

function Header() {
  return (
    <>
      <div className="header">
        <h1 className="header--title">For Dads</h1>
        <Nav>
          <Link className="nav-link text-white" to="/login">Login</Link>
          <Link className="nav-link text-white" to="/signup">Signup</Link>
        </Nav>
      </div>

      <div className='header'>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default Header;