import React from "react";
import { Box, Grid, Button, TextField } from "@mui/material";

function Authentification() {


  return (



    <div className="Authentification">
      <Grid container spacing={2} height='100%'>
        <Grid item xs={5}>
          <Box sx={{ textAlign: 'center' }}>
            <h1 >Projet alarm</h1>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box>
            <h2>Authentification</h2>
          </Box>
          <Box>
            <TextField>

            </TextField>
          </Box>
          <Box>
            <Button variant='contained' sx={{ background: '#7DC4B2', color: '506C7A', margin: '10px' }} >
              Connexion
            </Button>
          </Box>
        </Grid>
      </Grid>

    </div>
  );
}

export default Authentification;