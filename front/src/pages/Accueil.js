import { Box, Grid, Button } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom';

function Accueil() {

  return (

    <div className="Accueil">
  <Box sx={{ textAlign: 'center' }}>
    <h1>Outil de déclaration et d'analyse des erreurs médicamenteuses</h1>
  </Box>

  <Grid container spacing={2} height='100%'>
    <Grid item xs={12}sx={{ textAlign: 'center' }}>
      <Box>
        <p><b>Tout professionnel de l'établissement peut déclarer une erreur médicamenteuse</b></p>
        <Button component={Link} to="/DeclarerEM" variant='contained' sx={{ background: '#7DC4B2', color: '506C7A', margin: '10px', "&:hover": {
          "background-color": '#92D6B5'
        }}} >Déclarer les erreurs médicamenteuses</Button>
      </Box>  </Grid>
      
       <Grid container  height='100%' justifyContent="right" alignItems="center" >
       <Grid item xs={6} sx={{ textAlign: 'center'}}>
      <Box
        sx={{
          backgroundColor: '#ffdab9',
         
          border: '2px solid green',
          marginTop:'-10px'
      
        
        }}
      >
        <p><b>Ne pas utiliser, ces accès sont réservés aux professionnels habilités</b></p>
        <Box>
          <Button component={Link} to="/Crex" variant='contained' sx={{ background: '#7DC4B2', color: '506C7A', margin: '10px', width: '350px', "&:hover": {
            "background-color": '#92D6B5'
          }}}>
            Consulter les erreurs médicamenteuses
          </Button>
        </Box>
        <Box>
          <Button component={Link} to="/Crex" variant='contained' sx={{ background: '#7DC4B2', color: '506C7A', margin: '10px', width: '350px', "&:hover": {
            "background-color": '#92D6B5'
          }}}>
            Session du CREX
          </Button>
        </Box>
        <Box>
          <Button component={Link} to="/Archive" variant='contained' sx={{ background: '#7DC4B2', color: '506C7A', margin: '10px', width: '350px', "&:hover": {
            "background-color": '#92D6B5'
          }}}>
            Consulter les Archives
          </Button>
        </Box>
        <Box>
          <Button component={Link} to="/SaisieErreur" variant='contained' sx={{ background: '#7DC4B2', color: '506C7A', margin: '10px', width: '350px', "&:hover": {
            "background-color": '#92D6B5'
          }}}>
            Analyser une erreur médicamenteuse
          </Button>
        </Box>
      </Box>
    </Grid> </Grid>

    <Grid item xs={12}sx={{ textAlign: 'center' }}>
      <Box>
        <p><b>Si vous souhaitez en savoir plus, vous pouvez consulter les actions mises en place</b></p>
        <Button component={Link} to="/ConsultationAction" variant='contained' sx={{ background: '#7DC4B2', color: '506C7A', margin: '10px', "&:hover": {
          "background-color": '#92D6B5'
        }}}>Consulter les actions mises en place</Button>
      </Box>
    </Grid>
  </Grid>
</div>

  );
}

export default Accueil;