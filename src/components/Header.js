import React from "react";
import '../styles/Header.css';
import { Link, Routes, Route } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import Signup from "./Signup";
import Login from "./Login";

function Header() {
  return (
    <>
      <div className="header">
        <h1 className="h1-header">For dads</h1>
        <Nav>
          <Link className="header nav-link text-white" to="/signup"><h3>Sign up</h3></Link>
          <Link className="header nav-link text-white" to="/login"><h3>Log in</h3></Link>
        </Nav>
      </div>
      <div>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route parth='/login' element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default Header;