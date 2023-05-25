import React from "react";
import { Box, Grid, Button, TextField } from "@mui/material";
import {Paper, Avatar,Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

function Authentification() {
  const paperStyle={padding : 30,height:'400PX',width:400, margin:"20px auto", marginTop:"10%" }
  const avatarStyle={backgroundColor:'#7DC4B2'}
  const btnstyle={margin:'8px 0',backgroundColor:'#7DC4B2',color:'white',padding:'10px'}

  return (



    <div className="Authentification">
           <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Se connecter</h2>
                </Grid>
                <TextField style={{marginBottom:'20px'}}  placeholder='Nom' fullWidth required/>
                <TextField style={{marginBottom:'20px'}}  placeholder='Mot de passe' type='password' fullWidth required/>
          
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Se connecter</Button>
          
              
            </Paper>
        </Grid>

    </div>
  );
}

export default Authentification;