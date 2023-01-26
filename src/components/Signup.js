import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Signup() {
  const signupBtn = "Click me!";
  return (
    <div className="mb-3">
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <h1>Sign up, awesome Dad!</h1> <br />
          <Form.Label>First name</Form.Label>
          <Form.Control type="firstName" required placeholder="Enter First Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="lastName" required placeholder="Enter Last Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email Username</Form.Label>
          <Form.Control type="username" required placeholder="Enter Username" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" required placeholder="Enter Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required placeholder="Password" />
        </Form.Group>
        <Button className="btn-login" variant="primary" type="submit">
          {signupBtn}
        </Button>
      </Form>
    </div>
  );
}

export default Signup;