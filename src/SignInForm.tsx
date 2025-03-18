import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container } from '@mui/material';
import { firebaseAuth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const SignInForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in both fields');
    } else {
      try
      {
        await signInWithEmailAndPassword(firebaseAuth, email, password);

        setError('');
      }
      catch (error)
      {
        setError('Invalid credentials');
      }
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in both fields');
    } else {
      try
      {
        await createUserWithEmailAndPassword(firebaseAuth, email, password);

        setError('');
      }
      catch (error)
      {
        setError('Something went');
        console.log(error);
      }
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 4,
          p: 2,
          border: '1px solid #ddd',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Sign In
        </Typography>

        {error && <Typography color="error" variant="body2">{error}</Typography>}

        <form style={{ width: '100%' }}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleLogin}
          >
            Sign In
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default SignInForm;
