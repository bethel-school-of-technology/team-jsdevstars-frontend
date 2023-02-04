import React, { useState, useContext, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom'
import UserContext from '../contexts/UserContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let { loginUser } = useContext(UserContext);
  let navigate = useNavigate();

  const submitText = "Let's go!";
  const [show, setShow] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    loginUser(email, password).then(() => {
      navigate('/');
    }).catch(error => {
      console.log(error);
      window.alert('Failed login, please try again')
    })
  }

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
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="email"
                  value={email}
                  placeholder="Enter email"
                  onChange={e => setEmail(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Password" />
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
