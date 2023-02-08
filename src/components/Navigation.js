import React from "react";
import { Link, Routes, Route, Outlet, useNavigate, NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap'
import Stack from 'react-bootstrap/Stack'
import Resources from "./Resources";
import Forum from "./Forum";
import Articles from './Articles';
import Home from "./Home";
import '../styles/Navigation.css';
import Login from "./Login";
import Signup from "./Signup";
import Footer from "./Footer";

function Navigation() {

    let navigate = useNavigate();
    function handleSearch(event) {

        if (event.target.value === "") return;

        event.preventDefault();

        navigate(`/${event.target.value}/search`)

    }


    return (
        <>
            <Navbar >
                <Container>
                    <Navbar.Brand>
                        <NavLink to={`/`}>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <img
                                src="https://t3.ftcdn.net/jpg/04/06/91/92/360_F_406919209_O9Sy4SKu3dVx0mE3RqYfCH5hqMwVWbOk.jpg"
                                width="40"
                                height="30"
                                className="d-inline-block align-center"
                                alt="React Bootstrap logo"
                            /> {' '}
                            <Navbar.Brand className="d-inline-block align-top" >For Dads.</Navbar.Brand>
                        </NavLink>
                    </Navbar.Brand>

                    <Nav className="justify-content-center">
                        <Link className="nav-link text-white" to="/">Home</Link>
                        <Link className="nav-link text-white" to="/forum">Forum</Link>
                        <Link className="nav-link text-white" to="/articles">Articles</Link>
                        <Link className="nav-link text-white" to="/resources">Resources</Link>
                        <Link className="nav-link text-white" to="/login"></Link>
                        <Link className="nav-link text-white" to="/signup"></Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            onChange={handleSearch}
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>
                </Container>
            </Navbar>

            <Stack className="col-md-10 mx-auto mt-3">
                <Outlet />
            </Stack>
            <br />
            <Stack gap={3} className="col-md-10 mx-auto mt-3">
                <br />
                <Footer className="footer" />
            </Stack>

        </>
    );
}

export default Navigation;