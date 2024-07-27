import './App.css';
import React, { useState } from 'react';

import { Button, TextField, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import Container from '@mui/material/Container';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  paper: {
    margin: 'auto',
    width: '30%',
    padding: '30px',
    flexDirection: "column",
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
});

function App() {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <Typography variant="h4" align="center">Login</Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default App;
