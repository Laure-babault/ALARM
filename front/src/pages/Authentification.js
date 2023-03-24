import React from "react";
import TopBar from "../component/TopBar";
import { Box, Grid , Button} from "@mui/material";

function Authentification() {


    return (


        
      <div className="Authentification">
        <Grid container spacing={2} height='100%'>
        <Grid item xs={5}>
          <Box sx={{textAlign: 'center'}}>
            <h1 >Projet alarm</h1>            
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box>
            <h2>Authentification</h2>
          </Box>
          <Box>
            
          </Box>
          
        </Grid>
      </Grid>

    </div>
    );
  }
  
  export default Authentification;