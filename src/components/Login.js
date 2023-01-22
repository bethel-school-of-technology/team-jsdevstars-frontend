import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/Login.css'

function Login() {
  const submitText = "Let's go!";
  return (
    <div>
      <Form className='login'>
        <Form.Group className="login" controlId="formHorizontalEmail">
          <Form.Label className='login'>Email address</Form.Label>
          <Form.Control type="email" placeholder="example@forDads.com" />
        </Form.Group>
        <Form.Group className="login" controlId="formHorizontalPassword">
          <Form.Label className='login'>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>
        <Button className="btn-login" variant="primary" type="submit">
          {submitText}
        </Button>
      </Form>
    </div>
  );
}

export default Login;