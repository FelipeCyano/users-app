import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { login } from '../../services/authentication';
import { Button, TextField } from '@mui/material';
import './styles.css'

export default function LoginPage() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  function authenticate(e) {
    if (user === 'vendemmia' && password === '123123123' && login(import.meta.env.VITE_TOKEN)) {
      navigate('/users');
      setError(false);
    } else {
      setError(true);
      e.preventDefault();
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <em>
          <strong className="title">
            User List App
          </strong>
        </em>

        <span className="span-text">
          This is a subtitle for the app.
        </span>

        <form onSubmit={authenticate} className="login-form">
          <TextField
            value={user}
            label="Username"
            type="text"
            variant="filled"
            color="primary"
            margin="dense"
            fullWidth={true}
            onChange={e => setUser(e.target.value)}
            style={{
              backgroundColor: "#FAF9F5",
              border: "none",
              borderRadius: "5px"
            }}
          />

          <TextField
            value={password}
            label="Password"
            type="password"
            variant="filled"
            color="primary"
            margin="dense"
            fullWidth={true}
            onChange={e => setPassword(e.target.value)}
            style={{
              backgroundColor: "#FAF9F5",
              border: "none",
              borderRadius: "5px",
            }}
          />

          <Button
            type="submit"
            color="secondary"
            variant="contained"
            margin="dense"
            fullWidth={true}
            style={{
              margin: "1rem 0 0.5rem",
              color: "#FAF9F5"
            }}
          >
            Sign In
          </Button>
        </form>
        {error && <span className="span-text">Invalid user or password.</span>}
      </div> 
    </div>
  )
}
