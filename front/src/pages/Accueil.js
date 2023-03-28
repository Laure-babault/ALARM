import { Box, Grid, Button } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom';

function Accueil() {

  return (

    <div className="Accueil">
      <Grid container spacing={2} height='100%'>
        <Grid item xs={5}>
          <Box sx={{ textAlign: 'center' }}>
            <h1 >Projet alarm</h1>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box>
            <p>Tout professionnel de l'établissement peut déclarer une erreur médicamenteuse</p>
            <Button component={Link} to="/SaisieErreur" variant='contained' sx={{ background: '#7DC4B2', color: '506C7A', margin: '10px' }}  >Déclarer une erreur médicale</Button>
          </Box>
          <Box>
            <p> Accès réservé au personnelle habilité</p>
          <Box>
            <Button variant='contained' sx={{ background: '#7DC4B2', color: '506C7A', margin: '10px' }} >Consulter les erreurs médicales</Button>
            <Button variant='contained' sx={{ background: '#7DC4B2', color: '506C7A', margin: '10px' }} >Session du CREX</Button>
          </Box>
          <Button variant='contained' sx={{ background: '#7DC4B2', color: '506C7A', margin: '10px' }}>Consulter les Archives</Button>
        </Box>
        </Grid>
      </Grid>

    </div>
  );
}

export default Accueil;