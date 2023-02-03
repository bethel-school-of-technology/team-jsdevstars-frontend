import React, { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [show, setShow] = useState(false);
  const signupBtn = "Sign up!";
  let createUser = useContext(UserContext);
  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    createUser(userName, password, firstName, lastName)
      .then(() => {
        navigate('/login');
      }).catch(error => {
        console.log(error);
        window.alert('Failed registration: error creating user');
      });
  }

  const handleClose = () => {
    setShow(false)
    navigate('/')
  }

  const handleShow = () => setShow(true);

  useEffect(() => {
    handleShow()
  }, []);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h1>Sign up, awesome Dad!</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formGroupEmail"><br />
                <Form.Label>First name</Form.Label>
                <Form.Control type="firstName" required placeholder="Enter First Name"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="lastName" required placeholder="Enter Last Name"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="userName" required placeholder="Enter Username"
                  value={userName}
                  onChange={e => setUserName(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" required placeholder="Enter Email" />
              </Form.Group>
              <Button className="btn-login" variant="primary" type="submit">
                {signupBtn}
              </Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};


export default SignUp;