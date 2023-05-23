import { AppBar, Avatar, IconButton, Stack, styled, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Apps';
import ChicCMLogo from '../image/Logo-CHIC-castres-mazamet.jpg'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
//couleur vert  	#7DC4B2
// couleur gris 	#506C7A

function TopBar() {

  const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: "inherit",
    marginTop:'10px',
    "&:hover": {
      "background-color": '#506C7A'
    }
  }));

  return (
    <AppBar position='sticky' style={{ background: '#7DC4B2' }}>
      <Toolbar variant='dense'>

        <img height="30px" src={ChicCMLogo} alt="Logo du chic de Castres-Mazamet" />

        <Stack direction="row" width={"100%"} spacing={2} justifyContent="flex-end">
          <Link to="/">
            <StyledIconButton aria-label="Menu" title="Menu" >{<HomeIcon  />}</StyledIconButton>
          </Link>
          <Link to="/Authentification">
            <StyledIconButton aria-label="Deconnection" title="Deconnection">{<Avatar />}</StyledIconButton>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
export default TopBar;