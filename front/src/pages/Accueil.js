import { Box, Grid, Button } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom';
import Vaccine from '../image/Vaccine.gif';

function Accueil() {

  return (

    <div className="Accueil" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Grid container spacing={2} height='100%' style={{ marginTop: "4%" }}>
  
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Box>
          <h1>Outil de déclaration et d'analyse des erreurs médicamenteuses</h1>
          <p><b>Tout professionnel de l'établissement peut déclarer une erreur médicamenteuse</b></p>
          <Button component={Link} to="/DeclarerEM" variant='contained' sx={{ background: '#7DC4B2', color: '506C7A', "&:hover": {
            "background-color": '#92D6B5'
          } }}>Déclarer les erreurs médicamenteuses</Button>
         
        </Box>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={Vaccine} style={{ height: "300px", marginLeft: "-300px" , marginTop:"-100px"}} alt="Vaccine" />
          <Box
            sx={{
              backgroundColor: '#ffdab9',
              border: '2px solid green',
              marginTop: "2%",
              width: "600px",
              height: "auto",
              padding: "1%"
            }}
          >
            <p><b>Ne pas utiliser, ces accès sont réservés aux professionnels habilités</b></p>
            <Box>
              <Button component={Link} to="/Crex" variant='contained' sx={{ background: '#7DC4B2',  color: 'white', margin: '10px', width: '40%', "&:hover": { backgroundColor: '#92D6B5' } }}>
                Session du CREX
              </Button>
            </Box>
            <Box>
              <Button component={Link} to="/Archive" variant='contained' sx={{ background: '#7DC4B2', color: 'white', margin: '10px', width: '40%', "&:hover": { backgroundColor: '#92D6B5' } }}>
                Consulter les Archives
              </Button>
            </Box>
            <Box>
              <Button component={Link} to="/Dashboard" variant='contained' sx={{ background: '#7DC4B2',  color: 'white', margin: '10px', width: '40%', "&:hover": { backgroundColor: '#92D6B5' } }}>
                Tableau de bord
              </Button>
            </Box>
          </Box>
        </div>
      </Grid>
    </Grid>
      <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
   
     
         <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Box>
          <p><b>Si vous souhaitez en savoir plus, vous pouvez consulter les actions mises en place</b></p>
          <Button component={Link} to="/ConsultationAction" variant='contained' sx={{ background: '#7DC4B2', color: '506C7A',justifyContent: 'center', "&:hover": {
            "background-color": '#92D6B5'
          } }}>Consulter les actions mises en place</Button>
        </Box>
      </Grid>
      </Grid>
    </Grid>
    
   
  
  </div>
  );
}

export default Accueil;