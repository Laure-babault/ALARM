import React from "react";
import { Box, Grid, Button, TextField } from "@mui/material";
import {Paper, Avatar,Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
function Authentification() {
  const [nom, setNom] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [erreurNom, setErreurNom] = useState(false);
  const [erreurMotDePasse, setErreurMotDePasse] = useState(false);
  const navigate = useNavigate();
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
    backgroundColor: '#7DC4B2',
  };
  
  const btnstyle = {
    marginTop: '20px',
    backgroundColor:'#7DC4B2'
  };
  const handleNomChange = (e) => {
    setNom(e.target.value);
    setErreurNom(false);
  };

  const handleMotDePasseChange = (e) => {
    setMotDePasse(e.target.value);
    setErreurMotDePasse(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nom === '') {
      setErreurNom(true);
    }

    if (motDePasse === '') {
      setErreurMotDePasse(true);
    }


    if (nom !== '' && motDePasse !== '') {
      console.log('Formulaire soumis');
    }
  };

  return (



    <div className="Authentification">
       <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
          <h2>Se connecter</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            style={{ marginBottom: '20px' }}
            placeholder='Nom'
            fullWidth
            required
            value={nom}
            onChange={handleNomChange}
       
          />
          <TextField
            style={{ marginBottom: '20px' }}
            placeholder='Mot de passe'
            type='password'
            fullWidth
            required
            value={motDePasse}
            onChange={handleMotDePasseChange}
        
          />

          <Button
            type='submit'
            color='primary'
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Se connecter
          </Button>
           <Button

color="primary"
variant="contained"
style={btnstyle}
fullWidth
onClick={() => navigate('/Registre')}>
S'inscrire
</Button>
        </form>
       
      </Paper>
    </Grid>

    </div>
  );
}

export default Authentification;