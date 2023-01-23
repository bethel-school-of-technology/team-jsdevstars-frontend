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
        <h1>For dads</h1>
        </div>
    </>
  );
}

export default Header;