import { AppBar, Avatar, IconButton, Stack, styled, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Apps';
import ChicCMLogo from '../image/Logo-CHIC-castres-mazamet.jpg'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Team from '../image/medicalteam.png';
import list from '../image/menu.png';

//couleur vert  	#7DC4B2
// couleur gris 	#506C7A

function TopBar() {

  const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: "inherit",
    marginTop:'10px',
    "&:hover": {
      "background-color": '#92D6B5' 
    }
  }));

  return (
  

<AppBar position='sticky' style={{ background: '#7DC4B2' }}>
  <Toolbar variant='dense' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <img height="30px" src={ChicCMLogo} alt="Logo du chic de Castres-Mazamet" />

    <div style={{ display: 'flex', alignItems: 'center' }}>  
    <Link to="/">
        <StyledIconButton aria-label="Menu" title="Menu">
          <img src={list} style={{ height: "20px", width: "20px" }} alt="Icône liste" />
        </StyledIconButton>
      </Link>
      <Link to="/Authentification">
        <StyledIconButton aria-label="Deconnexion" title="Deconnexion">
          <img src={Team} style={{ height: "30px", width: "30px" }} alt="Icône équipe" />
        </StyledIconButton>
      </Link>
    
    </div>
  </Toolbar>
</AppBar>
  )
}
export default TopBar;