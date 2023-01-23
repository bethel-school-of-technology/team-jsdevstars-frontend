import { React, useState } from 'react';
import '../styles/Signup.css'
import Button from 'react-bootstrap/Button';

function SignUpForm() {
  //set states for all input values
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    alert(`Welcome ${firstName} ${lastName}! 
        Your registered email is: ${email}`);
    // setFirstName('');
    // setLastName('');
    // setEmail('');
    // setPassword('');
    // setUsername('');
    e.preventDefault();
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name:</label>
            <input
              type="text" required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text" required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="text" required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Username:</label>
            <input
              type="text" required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password" required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <Button variant='success' type="submit">Sign Up</Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUpForm;

