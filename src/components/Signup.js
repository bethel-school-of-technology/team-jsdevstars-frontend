import { React, useState } from 'react';
import '../styles/Signup.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SignUp() {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [username, setUsername] = useState('');

  // const handleSubmit = (e) => {
  //   alert(`Welcome ${firstName} ${lastName}! 
  //       Your registered email is: ${email}`);
  //   // setFirstName('');
  //   // setLastName('');
  //   // setEmail('');
  //   // setPassword('');
  //   // setUsername('');
  //   e.preventDefault();

  return (
    <div className='mb-3'>
      <h3>Dad, fill it out with your information</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupFirstName">
          <Form.Label>First name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupLastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button className="btn-login" variant="primary" type="submit">
          Sign up!
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;


