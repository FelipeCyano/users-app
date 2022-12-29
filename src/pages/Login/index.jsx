import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, TextField } from '@mui/material';
import './styles.css'

export default function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

   function authenticate(e) {
    if (user === 'vendemmia' && password === '123123123') {
      navigate('/users');
      setError(false);
    } else {
      setError(true);
      e.preventDefault();
    }
  }

  return (
    <div id="login-container">
      <em>
        <strong className='title'>
          Users App
        </strong>
      </em>

      <span className="span-text">
        A user app for a single user.
      </span>

      <form onSubmit={authenticate} id="login-form">
        <TextField
          value={user}
          label="Username"
          type="text"
          color="primary"
          margin="dense"
          fullWidth={true}
          onChange={e => setUser(e.target.value)}
        />

        <TextField
          value={password}
          label="Password"
          type="password"
          color="primary"
          margin="dense"
          fullWidth={true}
          onChange={e => setPassword(e.target.value)}
        />

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          margin="dense"
          fullWidth={true}
          style={{
            margin: "1rem 0 0.5rem"
          }}
        >
          Sign In
        </Button>
      </form>
      {error && <span className='span-text'>Invalid user or password.</span>}
    </div> 
  )
}
