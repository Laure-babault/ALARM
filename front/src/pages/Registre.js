import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { Paper, Avatar} from "@material-ui/core";

import { Grid } from "@mui/material";

function Registre() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


 
  const paperStyle = {
    padding: "20px",
    width: "400px",
    height: "auto",
    marginTop: "5% ",
    marginLeft:"auto",
    marginRight:"auto",
    marginButtom:"auto",
  };

  const avatarStyle = {
    backgroundColor: "#7DC4B2",
  };

  const btnstyle = {
    marginTop: "20px",
    backgroundColor: "#7DC4B2",
  };
  return (

    <Grid >
    <Paper elevation={10} style={paperStyle}>
      <Grid align="center">
        <Avatar style={avatarStyle}>
       
        </Avatar>
        <h2>S'inscrire</h2>
      </Grid>
    <form>
      <TextField
      placeholder='Email'
        value={email}
 
        fullWidth
        required
        style={{ marginBottom: "20px" }}

      />
      <TextField
      placeholder='Mot de passe '
        value={password}
   
        type="password"
        fullWidth
        required
        style={{ marginBottom: "20px" }}

      />
      <Button type="submit"    
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth>
        S'inscrire
      </Button>
    </form>
    </Paper>
      </Grid>
  );
};

export default Registre;
