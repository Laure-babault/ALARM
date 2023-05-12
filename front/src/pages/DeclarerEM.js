import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, FormControlLabel, Stepper } from '@mui/material/';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, Grid } from '@mui/material/';
import  { TextField }  from '@mui/material/';
import { useState } from 'react';
import { MenuItem } from '@mui/material/';
import { Select } from '@mui/material/';
import {  RadioGroup } from '@mui/material/';
import Link from '@material-ui/core/Link';
import myPdf from '../pdf/patients_risque.pdf';
import myPdf1 from '../pdf/medicaments_risque.pdf';
import myPdf2 from '../pdf/administration_risque.pdf';
import myPdf3 from '../pdf/cotation.pdf';
import { FormControl } from '@mui/material/';
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio';
import { Checkbox} from '@material-ui/core';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { makeStyles } from '@material-ui/core/styles';

function DeclarerEM() {
    const [valuee, setValue] = useState('option1');

    const handleChange = (event) => {
        setValue(event.target.value);
      };
    const handleNoClick8 = () => {
        const container = document.getElementById("container8",);
        container.style.display = "none";
      };
      const handleYesClick8 = () => {
        const container = document.getElementById("container8");
        container.style.display = "block";
      };
      const [selectedValue, setSelectedValue] = useState('default'); // définit la valeur par défaut

      const handleChange1 = (event) => {
        setSelectedValue(event.target.value);
      };


    return (
        <><div>
            <Box sx={{ textAlign: 'center' }}>
                <h1>Déclarer une erreur médicamenteuse </h1>
            </Box>

            <h4><u> Ne sont pas concérnés les événements indésirables consécutifs en lien avec le médicament, ceci relevant de la pharmacovigilance</u></h4></div><div>









            </div>              <Card style={{ backgroundColor: '#F5B7B1 ' , boxShadow: '5px 5px 5px #F1948A ' , padding: '20px'}}>
                        <Grid container xs={12}> 
     
      <Grid item sm={12} >
        <Grid item sm={4}><h2>Identité</h2></Grid>
       <h3>Déclarer de manière anonyme</h3>
         <Grid item sm={3}>
     

      </Grid> <FormControl >
      <RadioGroup row valuee={valuee} onChange={handleChange}>
        <FormControlLabel value="yes" control={<Radio />} onClick={handleNoClick8} label="Oui" />
        <FormControlLabel value="no" control={<Radio />}   onClick={handleYesClick8} label="Non" />
      </RadioGroup>
    </FormControl>
      </Grid>
    </Grid>
                      
                      
          
                        <Grid item xs={12}>  
          
                                <Container id="container8" >
                                <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h7">Nom :</Typography>
                               <TextField
                                 hiddenLabel
                                 id="filled-hidden-label-small"
                                 style={{backgroundColor: "white" }}
                                 size="small"/> 
                            </Grid>
                            <Grid item xs={12} sm={4}>
                            <Typography variant="h7">Prénom :</Typography>
                               <TextField
                                 hiddenLabel
                                 id="filled-hidden-label-small"
                                 style={{backgroundColor: "white" }}
                                 size="small"/> 
                            </Grid>

                            <Grid item xs={12} sm={4}>
                             <Typography variant="h7">Fonction :</Typography>
                               <TextField
                                  hiddenLabel
                                  id="filled-hidden-label-small"
                                  style={{backgroundColor: "white" }}
                                 size="small"/>
                            </Grid>
                        </Grid>
                 </Container></Grid> 



                        

                    </Card>
                    
                    
                    
                    
                    
                    
                    <Card style={{ backgroundColor: '#F5B7B1 ' , boxShadow: '5px 5px 5px #F1948A ' , padding: '30px', marginTop:"30px"}}>
                   
                        <h2>Date de déclartion</h2>
                         <Grid container item xs={12}>
                          <Grid item xs={2}>
                             <Typography variant="h7">Date de la déclaration:</Typography>   </Grid> 
                             <Grid item xs={5} >
                             
                             <form >
  <TextField
    id="datetime-local"
    type="datetime-local"
    defaultValue="2017-05-24T10:30"
   
    InputLabelProps={{
      shrink: true,
    }}
  />
</form></Grid> 
                          </Grid>
                    </Card>            
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    <Card style={{ backgroundColor: '#F5B7B1 ' , boxShadow: '5px 5px 5px #F1948A ' , padding: '30px', marginTop:"30px"}}>
                   
                   <h2>Concernant l'événement</h2>
                    <Grid container item xs={12}>
                     <Grid item xs={2}>
                        <Typography variant="h7">Date de l'événement:</Typography>   </Grid> 
                        <Grid item xs={5} >
                        
                        <form >
<TextField
id="datetime-local"
type="datetime-local"
defaultValue="2017-05-24T10:30"

InputLabelProps={{
 shrink: true,
}}
/>
</form></Grid> </Grid>                 
                            <Grid item xs={12} style ={{marginTop:"20px"}}>
                        <Typography variant="h7">Service :</Typography>
                                
                          
                                <Select value={selectedValue} onChange={handleChange1}>
                                    <MenuItem value="default">Sélectionnez un service</MenuItem>
                                    <MenuItem style ={{display:'block'}} value={10}>Chirurigie</MenuItem>
                                    <MenuItem style ={{display:'block'}} value={20}>Médico-Technique</MenuItem>
                                    <MenuItem style ={{display:'block'}} value={30}>Gérontologie</MenuItem>
                                    <MenuItem style ={{display:'block'}} value={30}>Médecine</MenuItem>
                                    <MenuItem style ={{display:'block'}} value={30}>Mère enfant</MenuItem>
                                    <MenuItem style ={{display:'block'}} value={30}>Plateau Technique</MenuItem>
                                  

                                </Select>

                   </Grid> 

                            <hr style={{ border: "0", borderBottom: "1px dashed black",background: "#black"}}></hr>   
               </Card>            
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    </>
  );
}

export default DeclarerEM;