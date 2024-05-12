import './App.css';
import React, { useState } from 'react';

import { Button, TextField, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//import Stack from '@mui/material/Stack';

const useStyles = makeStyles({
  paper: {
    margin: 'auto',
    width: '30%',
    padding: '30px',
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center"
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
  );
}

export default App;
