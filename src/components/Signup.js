import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const signupBtn = "Sign up!";
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

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
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail"><br />
                <Form.Label>First name</Form.Label>
                <Form.Control type="firstName" required placeholder="Enter First Name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="lastName" required placeholder="Enter Last Name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" required placeholder="Enter Username" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required placeholder="Password" />
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
}

export default Signup;