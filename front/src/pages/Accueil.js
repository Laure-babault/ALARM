import { Box, Grid, Button } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom';

function Accueil() {

  return (

    <div className="Accueil"> 
<Box sx={{ textAlign: 'center' }}>           
 <h1 >Outil de déclaration et d'analyse des erreurs médicamenteuse</h1>

          </Box>

      <Grid container spacing={2} height='100%'>
     
       
        <Grid item xs={12}  sx={{ textAlign: 'center' }}>
          <Box>
            <p><b>Tout professionnel de l'établissement peut déclarer une erreur médicamenteuse</b></p>
            <Button component={Link} to="/DeclarerEM" variant='contained' sx={{ background: '#7DC4B2', color: '506C7A', margin: '10px' }} >Déclarer les erreurs médicales</Button>

          </Box>    
        
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center', marginLeft: '40%' }}>
      <Box
        sx={{
          backgroundColor: '#ffdab9',
          padding: '5px',
          border: '2px solid green',
          marginTop: '-30px',
          position: 'absolute',
          marginLeft: '70px'

          
        }}
      >
        <p><b>Ne pas utiliser , ces accès sont résérvés aux professionnels habilités</b></p>
        <Box>
          <Button
            component={Link}
            to="/Crex"
            variant='contained'
            sx={{ background: '#7DC4B2', color: '506C7A', margin: '10px',width:'350px' }}
          >
            Consulter les erreurs médicales
          </Button>
        </Box>
        <Box>
          <Button
            component={Link}
            to="/Crex"
            variant='contained'
            sx={{ background: '#7DC4B2', color: '506C7A', margin: '10px' ,width:'350px' }}
          >
            Session du CREX
          </Button>
        </Box>
        <Box>
          <Button
            component={Link}
            to="/Archive"
            variant='contained'
            sx={{ background: '#7DC4B2', color: '506C7A', margin: '10px' ,width:'350px' }}
          >
            Consulter les Archives
          </Button>
        </Box>
        <Box>
          <Button
            component={Link}
            to="/SaisieErreur"
            variant='contained'
            sx={{ background: '#7DC4B2', color: '506C7A', margin: '10px',width:'350px'  }}
          >
            Analyser une erreur médicale
          </Button>
        </Box>
      </Box>
    </Grid>





















        </Grid>
    
  
    </div>
  );
}

export default Accueil;