import React, { useContext } from "react";
import { Link, Outlet, useNavigate, NavLink } from "react-router-dom";
import { Navbar, Nav, Form } from 'react-bootstrap'
import Stack from 'react-bootstrap/Stack'
import '../styles/Navigation.css';
import Footer from "./Footer";
import UserContext from "../contexts/UserContext";

function Navigation() {

    // let { user } = useContext(UserContext)


    let navigate = useNavigate();
    function handleSearch(event) {
        if (event.target.value === "") return;
        event.preventDefault();
        navigate(`/${event.target.value}/search`)
    }

    function signinorout() {

        let token = localStorage.getItem('myUserToken');



        function signOut() {
            localStorage.removeItem('user')
            localStorage.removeItem('myUserToken')
        }

        if (token) {

            let user = localStorage.getItem('user')

            if (!user) {
                return
            }

            let { firstName } = user

            return (
                <div className="header-links">
                    <p>Welcome {user}</p>
                    <p> </p>
                    <Link onClick={signOut} className="nav-link text-white">Log out</Link>
                </div>
            )

        } else {
            return (
                <div className="header-links">
                    <Link className="nav-link text-white" to="/login">Login</Link>
                    <Link className="nav-link text-white" to="/signup">Signup</Link>
                    <Form>
                        <Form.Control
                            onChange={handleSearch}
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>
                </div>
            )
        }


    }


    return (
        <>
            <div>{signinorout()}</div>
            <div className="title">
                <h1 className='h1-title'>For Dads.</h1>
                <img style={{ width: '5%', left: '-10%' }} src='../logo.png' alt='logo for dads site'></img>

            </div>
            <Navbar className="justify-content-center">
                <Nav className="pageLinks">
                    <NavLink className="nav-link text-white" to="/">Home</NavLink>
                    <NavLink className="nav-link text-white" to="/forum">Forum</NavLink>
                    <NavLink className="nav-link text-white" to="/articles">Articles</NavLink>
                    <NavLink className="nav-link text-white" to="/resources">Resources</NavLink>
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