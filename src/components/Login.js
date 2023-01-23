import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/Login.css';

function Login() {
  
  const submitText = "Let's go!";
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <h1>Log in to start posting!</h1>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          <Button className="btn-login" variant="primary" type="submit">
            {submitText}
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Login;


