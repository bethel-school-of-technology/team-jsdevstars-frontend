import React from "react";
import '../styles/Header.css';
import { Link } from "react-router-dom";


function Header(props) {
  // function DateDisplay() {
  //   const date = new Date().toLocaleDateString();
  //   return <p>{date}</p>;
  // }

  return (
    <>
      <div className='date'>
        {/* <DateDisplay /> */}
        <div className="header">
          <h1>For Dads.</h1>
        </div>
        <div className="header-links">
          <Link className="nav-link text-white" to="/login">Login</Link>
          <Link className="nav-link text-white" to="/signup">Signup</Link>
        </div>
      </div>
    </>
  );
}

export default Header;