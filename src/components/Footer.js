import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

function Footer() {
  return (
  
     <div className='footer'>
<div >
        <Link className="nav-link text-white" to="/faq">FAQ</Link>
          <Link className="nav-link text-white" to="/about">About</Link>
</div>
          

        <p>© 2023 | JSDevStars</p>
      </div>
  );
}

export default Footer;