import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom'

function Login() {
  const submitText = "Let's go!";
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
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
          <Modal.Title><h1>Login to start posting!</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="userName" placeholder="Enter username" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button className="btn-login" variant="primary" type="submit">
                {submitText}
              </Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
