import React, { useEffect } from 'react';
import { NavLink, Outlet, useNavigate, Link } from 'react-router-dom';
import { Navbar, Nav, Form } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import '../styles/Navigation.css';
import Footer from './Footer';

function Navigation() {
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    function handleScroll() {
        const h1 = document.querySelector('.h1-title');
        const img = document.querySelector('.img-title');
        if (window.scrollY > 0) {
            h1.style.color = "lightgrey";
            h1.style.position = 'fixed';
            h1.style.left = '25%';
            img.style.opacity = '0.5';
        } else {
            h1.style.color = "white";
            h1.style.position = 'relative';
            h1.style.left = '0';
            img.style.opacity = '4.5';
        }
    }

    function signInOrOut() {
        let token = localStorage.getItem('myUserToken');
        function signOut() {
            localStorage.removeItem('user');
            localStorage.removeItem('myUserToken');
        }
        if (token) {
            let user = localStorage.getItem('user');
            return (
                <div className="header-links">
                    <p>Welcome, {user}!</p>
                    <Link onClick={signOut} className="nav-link text-white">Log out</Link>
                </div>
            )
        } else {
            return (
                <div className="header-links">
                    <br />
                    <Link className="nav-link text-white" to="/login">Login</Link>
                    <Link className="nav-link text-white" to="/signup">Signup</Link>
                </div>
            )
        }
    }

    return (
        <>
            <div>{signInOrOut()}</div>
            <div className="title">
                <h1 className="h1-title"><img className="img-title" style={{ width: '3%' }} src="../logo.png" alt="logo for dads site"></img>For Dads</h1>
                <br />
                <hr />
            </div>
            <Navbar className="justify-content-center">
                <Nav className="pageLinks">
                    <NavLink className="nav-link text-white" to="/">Home</NavLink>
                    <NavLink className="nav-link text-white" to="/forum">Forum</NavLink>
                    <NavLink className="nav-link text-white" to="/articles">Articles</NavLink>
                    <NavLink className="nav-link text-white" to="/resources">Resources</NavLink>
                    <NavLink className="nav-link text-white" to="/faq">FAQ</NavLink>
                    <NavLink className="nav-link text-white" to="/about">About</NavLink>
                </Nav>
            </Navbar>
            <Stack className="col-md-10 mx-auto mt-3">
                <Outlet />
            </Stack>
            <Footer />
        </>
    );
}

export default Navigation;


// import React, { useEffect } from "react";
// import { Link, Outlet, useNavigate, NavLink } from "react-router-dom";
// import { Navbar, Nav, Form } from 'react-bootstrap'
// import Stack from 'react-bootstrap/Stack'
// import '../styles/Navigation.css';
// import Footer from "./Footer";

// function Navigation() {
//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         }
//     }, []);

//     function handleScroll() {
//         const h1 = document.querySelector('.h1-title');
//         const img = document.querySelector('.img-title');
//         if (window.scrollY > 0) {
//             h1.style.color = "white";
//             img.style.opacity = '0.5';
//         } else {
//             h1.style.color = "white";
//             img.style.opacity = '4.5';
//         }
//     }

//     let navigate = useNavigate();
//     function handleSearch(event) {
//         if (event.target.value === "") return;
//         event.preventDefault();
//         navigate(`/${event.target.value}/search`)
//     }

//     function signinorout() {
//         let token = localStorage.getItem('myUserToken');
//         function signOut() {
//             localStorage.removeItem('user')
//             localStorage.removeItem('myUserToken')
//         }
//         if (token) {
//             let user = localStorage.getItem('user');
//             return (
//                 <div className="header-links">
//                     <p>Welcome, {user}!</p>
//                     <Link onClick={signOut} className="nav-link text-white">Log out</Link>
//                 </div>
//             )
//         } else {
//             return (
//                 <div className="header-links" >
//                     <Link className="nav-link text-white" to="/login">Login</Link>
//                     <Link className="nav-link text-white" to="/signup">Signup</Link>
//                 </div >
//             )
//         }
//     }

//     return (
//         <>
//             <div>{signinorout()}</div>
//             <div className="title">
//                 <h1 className='h1-title'>For Dads</h1>
//                 <img className='img-title' style={{ width: '3%', left: '59%', top: '7.5%' }} src='../logo.png' alt='logo for dads site'></img>
//                 <br />
//                 <hr />
//             </div>
//             <Navbar className="justify-content-center">
//                 <Nav className="pageLinks">
//                     <NavLink className="nav-link text-white" to="/">Home</NavLink>
//                     <NavLink className="nav-link text-white" to="/forum">Forum</NavLink>
//                     <NavLink className="nav-link text-white" to="/articles">Articles</NavLink>
//                     <NavLink className="nav-link text-white" to="/resources">Resources</NavLink>
//                     <NavLink className="nav-link text-white" to="/faq">FAQ</NavLink>
//                     <NavLink className="nav-link text-white" to="/about">About</NavLink>
//                 </Nav>
//             </Navbar>
//             <Stack className="col-md-10 mx-auto mt-3">
//                 <Outlet />
//             </Stack>
//             <Footer />
//         </>
//     );
// }

// export default Navigation;