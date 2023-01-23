import React from "react";
import '../styles/Header.css';
import { Link, Routes, Route } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import Login from "./Login";
import Signup from "./Signup";
import FormFloatingBasicExample from "./Signup";

function Header() {
  return (
    <>
      <div className="navbar">
        <h1>For dads</h1>
        <Nav>
          <Link className="header nav-link text-white" to="/signup">Signup</Link>
          <Link className="header nav-link text-white" to="/login">Login</Link>
        </Nav>
      </div>

      <div>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default Header;