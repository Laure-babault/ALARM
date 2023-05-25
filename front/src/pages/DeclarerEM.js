import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, FormControlLabel, Stepper } from '@mui/material/';
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
import myPdf3 from '../pdf/neverevents.pdf';
import myPdf4 from '../pdf/degres.pdf';
import { FormControl } from '@mui/material/';
import Radio from '@mui/material/Radio';
import { Checkbox} from '@material-ui/core';
import InfoIcon from '@mui/icons-material/Info';
import { Modal, Paper} from '@material-ui/core';
import WarningIcon from '@mui/icons-material/Warning';

function DeclarerEM() {
  
    const [value, setValue] = useState('option1');
    const [valuee, setValuee] = useState('yes');
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleOpen1 = () => {
      setOpen1(true);
    };
  
    const handleClose1 = () => {
      setOpen1(false);
    };
    const [state, setState] = useState({
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: false,
        checked5: false,
        checked6: false,
        checked7: false,
        checked8: false,
        checked9: false,
        checked10: false,
        checked11: false,
        checked12: false,
        checked13: false,
        checked14: false,
        checked15: false,
        checked16: false, 
        checked17: false,
        checked18: false,
        checked19: false,
        checked20: false,
        checked21: false,
        checked22: false,
        checked23: false,
        checked24: false,
        checked25: false,

  
      });
      const handleChange2 = (event) => {
        setValuee(event.target.valuee);
      };
        
    
      const handleChange3 = (event) => {
        setValuee(event.target.valuee);
      };
      
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
        setState({ ...state, [event.target.name]: event.target.checked });
      };
  
      const handleChange5 = (event) => {
        setSelectedValue(event.target.value);
      };


    return (
        <><div>
            <Box sx={{ textAlign: 'center' }}>
                <h1>Déclarer une erreur médicamenteuse </h1>
            </Box>

            <h4><WarningIcon fontSize="medium" style={{ color: 'red', marginRight: '10px' }} /><u> 
   Ne sont pas concérnés les événements indésirables consécutifs en lien avec le médicament, ceci relevant de la pharmacovigilance</u></h4></div><div>









            </div>             
             <Card style={{ backgroundColor: '#e2d2c1  ' , boxShadow: '5px 5px 5px #c7a988  ' , padding: '20px', margin:"40px"}}>
                     <h2>Identité</h2>   

                     <Grid container spacing={2}>
      <Grid item xs={4}>
      <Typography variant="h6" ><b>Déclarer de manière anonyme</b></Typography>
      </Grid>
      <Grid item xs={4}>
      <FormControl >
      <RadioGroup row valuee={valuee} onChange={handleChange}>
        <FormControlLabel value="yes" control={<Radio />} onClick={handleNoClick8} label="Oui" />
        <FormControlLabel value="no" control={<Radio />}   onClick={handleYesClick8} label="Non" />
      </RadioGroup>
    </FormControl>

    
      </Grid>
      <Container id="container8" style={{marginTop:"20px"}} >
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
                 </Container>
    </Grid>




                  

















                  
                    </Card>
                    
                    
                    
                    
                    
                    
                    <Card style={{ backgroundColor: '#e2d2c1  ' , boxShadow: '5px 5px 5px #c7a988 ' , padding: '30px',  margin:"40px"}}>
                   
                        <h2>Date de déclartion</h2>
                         <Grid container item xs={12}>
                          <Grid item xs={2}>
                             <Typography variant="h7">Date de la déclaration:</Typography>   </Grid> 
                             <Grid item xs={2} >
                             
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
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    <Card style={{ backgroundColor: '#e2d2c1 ' , boxShadow: '5px 5px 5px #c7a988 ', padding: '20px' ,  margin:"40px"}}>
                   
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

<Grid container item xs={12} style ={{marginTop:"20px"}}>
                     <Grid item xs={2}>
                        <Typography variant="h7">Service :</Typography>   </Grid> 
                        <Grid item xs={5} >
                        <Select value={selectedValue} onChange={handleChange5}>
                                    <MenuItem value="default">Sélectionnez un service</MenuItem>
                                    <MenuItem style ={{display:'block'}} value={10}>Chirurigie</MenuItem>
                                    <MenuItem style ={{display:'block'}} value={20}>Médico-Technique</MenuItem>
                                    <MenuItem style ={{display:'block'}} value={30}>Gérontologie</MenuItem>
                                    <MenuItem style ={{display:'block'}} value={40}>Médecine</MenuItem>
                                    <MenuItem style ={{display:'block'}} value={50}>Mère enfant</MenuItem>
                                    <MenuItem style ={{display:'block'}} value={60}>Plateau Technique</MenuItem>
                                  

                                </Select></Grid> </Grid>   


                            <hr style={{ border: "0", borderBottom: "1px dashed black",background: "#black",marginTop:"20px",marginButtom:"20px"}}></hr>   
             
             
             
             
                            <Grid container spacing={2} style={{marginTop:"20px"}}>
      <Grid item xs={12} sm={3} >
  <Typography variant="h7" >Est-ce un never-event :</Typography>  
  
    
      </Grid>
      <Grid item xs={12} sm={4}>
   <RadioGroup row valuee={valuee} onChange={handleChange3}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
        <FormControlLabel value="Je ne sais pas" control={<Radio />} label="Je ne sais pas" /> 
      </RadioGroup>
        
        
      </Grid>
      <Grid item xs={12} sm={5} style={{marginTop:"10px"}}>
    <Link href={myPdf3}>Cliquer pour consulter les 12 Never-Event</Link> 
    
       
      </Grid>
    </Grid>
             
             
             
             
             
             
































    <>


    <Grid container spacing={2} style={{marginTop:"5px"}}>
      <Grid item xs={12} sm={3} >
  <Typography variant="h7" >S'agit-il d'un never-event (NE) :</Typography>  
  
    
      </Grid>
      <Grid item xs={12} sm={4}>
      <RadioGroup row valuee={valuee} onChange={handleChange3}>
                           <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                           <FormControlLabel value="no" control={<Radio />} label="Non" />
                           <FormControlLabel value="Je ne sais pas" control={<Radio />} label="Je ne sais pas" />
                         </RadioGroup>
        
      </Grid>
    
    </Grid>
             








    <Grid container spacing={2} style={{marginTop:"5px"}}>
      <Grid item xs={12} sm={3} >
  <Typography variant="h7" >Si oui Le(s)quel(s) :</Typography>  
  
    
      </Grid>
      <Grid item xs={12} sm={4}>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checked1}
            onChange={handleChange1}
            name="checked1"
            color="primary"
          />
        }
        label="NE1"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checked2}
            onChange={handleChange1}
            name="checked2"
            color="primary"
          />
        }
        label="NE2"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checked3}
            onChange={handleChange1}
            name="checked3"
            color="primary"
          />
        }
        label="NE3"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checked4}
            onChange={handleChange1}
            name="checked4"
            color="primary"
          />
        }
        label="NE4"
      />
       <FormControlLabel
        control={
          <Checkbox
            checked={state.checked5}
            onChange={handleChange1}
            name="checked5"
            color="primary"
          />
        }
        label="NE5"
      />
       <FormControlLabel
        control={
          <Checkbox
            checked={state.checked6}
            onChange={handleChange1}
            name="checked6"
            color="primary"
          />
        }
        label="NE6"
      />
       <FormControlLabel
        control={
          <Checkbox
            checked={state.checked7}
            onChange={handleChange1}
            name="checked7"
            color="primary"
          />
        }
        label="NE7"
      />
       <FormControlLabel
        control={
          <Checkbox
            checked={state.checked8}
            onChange={handleChange1}
            name="checked8"
            color="primary"
          />
        }
        label="NE8"
      />
       <FormControlLabel
        control={
          <Checkbox
            checked={state.checked9}
            onChange={handleChange1}
            name="checked9"
            color="primary"
          />
        }
        label="NE9"
      />
       <FormControlLabel
        control={
          <Checkbox
            checked={state.checked10}
            onChange={handleChange1}
            name="checked10"
            color="primary"
          />
        }
        label="NE10"
      />
       <FormControlLabel
        control={
          <Checkbox
            checked={state.checked11}
            onChange={handleChange1}
            name="checked11"
            color="primary"
          />
        }
        label="NE11"
      />
       <FormControlLabel
        control={
          <Checkbox
            checked={state.checked12}
            onChange={handleChange1}
            name="checked12"
            color="primary"
          />
        }
        label="NE12"
      />
        
      </Grid>
    
    </Grid>
             


    <Grid item xs={12} style={{marginTop:"10px" , marginBottom:"10px"}}>
                                    <Typography variant="h7" >Précision sur l'état du patient :</Typography>
                                        <TextField 
                                    hiddenLabel
                                    id="filled-hidden-label-small"
                                    size="small"
                                    style={{ width: '95%', backgroundColor: "white",marginTop: '0.5rem'  }}

                                    />
                                </Grid>


         
    <Grid container spacing={2} style={{marginTop:"5px"}}>
      <Grid item xs={12} sm={3} >
  <Typography variant="h7" >S'agit-il d'un patient à risque ? :</Typography>  
  
    
      </Grid>
      <Grid item xs={12} sm={4}>
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
                           <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                           <FormControlLabel value="no" control={<Radio />} label="Non" />
                           <FormControlLabel value="Je ne sais pas" control={<Radio />} label="Je ne sais pas" />
                           

                         </RadioGroup>
        
      </Grid>
      <Grid item xs={12} sm={5} style={{marginTop:"10px"}}>
      <Link href={myPdf}>Cliquer pour consulter les patients à risque</Link> 
    
       
      </Grid>
    </Grid>








    <Grid container spacing={2} style={{marginTop:"5px"}}>
      <Grid item xs={12} sm={3} >
  <Typography variant="h7" >Catégorie du patient à risque :</Typography>  
  
    
      </Grid>
      <Grid item xs={12} sm={4}>
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
                           <FormControlLabel value="1" control={<Radio />} label="1" />
                           <FormControlLabel value="2" control={<Radio />} label="2" />
                           <FormControlLabel value="3" control={<Radio />} label="3" />
                           <FormControlLabel value="4" control={<Radio />} label="4" />

                         </RadioGroup>
      </Grid>
   
    </Grid>


                        


                               
                               
                               






                                <Grid item xs={12} style={{marginTop:"10px" , marginBottom:"10px"}}>
                                     <Typography variant="h7" >Nom du médicament :</Typography>
                                        <TextField
                                    hiddenLabel
                                    id="filled-hidden-label-small"
                                    size="small"
                                    style={{ width: '95%', backgroundColor: "white",marginTop: '0.5rem' }}
                                    
                                    />
                                 </Grid>







                                <Grid container spacing={2} style={{marginTop:"5px"}}>
      <Grid item xs={12} sm={3} >
  <Typography variant="h7" >S'agit-il d'un médicament à risque ? :</Typography>  
  
    
      </Grid>
      <Grid item xs={12} sm={4}>
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
                           <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                           <FormControlLabel value="no" control={<Radio />} label="Non" />
                           <FormControlLabel value="Je ne sais pas" control={<Radio />} label="Je ne sais pas" />
                           

                         </RadioGroup>
        
      </Grid>
      <Grid item xs={12} sm={5} style={{marginTop:"10px"}}>
      <Link href={myPdf1}>Cliquer pour consulter les catégories du médicament à risque</Link>
    
       
      </Grid>
    </Grid>












    <Grid container spacing={2} style={{marginTop:"5px"}}>
      <Grid item xs={12} sm={3} >
  <Typography variant="h7" >Si oui, préciser la catégorie:</Typography>  
  
    
      </Grid>
      <Grid item xs={12} sm={6}>
      <FormControl component="fieldset">
                         <RadioGroup row valuee={valuee} onChange={handleChange2}>
                           <FormControlLabel value="1" control={<Radio />} label="1" style={{color:"darkblue"}}/>
                           <FormControlLabel value="2" control={<Radio />} label="2" style={{color:"red"}}/>
                           <FormControlLabel value="3" control={<Radio />} label="3" style={{color:"green"}}/>
                           <FormControlLabel value="4" control={<Radio />} label="4" style={{color:"orange"}}/>
                           <FormControlLabel value="5" control={<Radio />} label="5"style={{color:"purple"}} />
                           <FormControlLabel value="6" control={<Radio />} label="6" style={{color:"blue"}} />
                           <FormControlLabel value="7" control={<Radio />} label="7" style={{color:"darkred"}} />    
                            <InfoIcon fontSize="large" style={{ color: '#fb9628' }} onClick={handleOpen}/>
                            <Modal open={open} onClose={handleClose}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          outline: 'none',
          boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)',
          padding: '2rem',
          borderRadius: '8px',
          width: '400px',
          maxWidth: '90%',
        }}>
          <Typography variant="h6" style={{ marginBottom: '1rem' }}>Information</Typography>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>Numéro catégorie</th>
                <th style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>Signification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>1</td>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>Anti-cancéreux</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>2</td>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>Morphiniques</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>3</td>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>Electrolytes injectables</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>4</td>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>Insulines</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>5</td>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>Anticoagulants</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>6</td>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>Médicaments perfusés par pompe</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>7</td>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>Benzodiazépines</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal>
                         </RadioGroup>
                    
                       </FormControl>
        
      </Grid>
   
    </Grid>
























                                
















                      

    <Grid item xs={12} style={{marginTop:"10px" , marginBottom:"10px"}}>
                                       <Typography variant="h7">Nom de la voie d'administration :</Typography>
                                           <TextField
                                              hiddenLabel
                                              id="filled-hidden-label-small"
                                              size="small"
                                              style={{ width: '95%', backgroundColor: "white" }}

                                            />
                                    </Grid>









                                 <Grid container spacing={2} style={{marginTop:"5px"}}>
      <Grid item xs={12} sm={3} >
  <Typography variant="h7" >S'agit-il d'un e voie d'administration à risque ? :</Typography>  
  
    
      </Grid>
      <Grid item xs={12} sm={4}>
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
                           <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                           <FormControlLabel value="no" control={<Radio />} label="Non" />
                           <FormControlLabel value="Je ne sais pas" control={<Radio />} label="Je ne sais pas" />
                           

                         </RadioGroup>
      </Grid>
      <Grid item xs={12} sm={5} style={{marginTop:"10px"}}>
      <Link href={myPdf2}>Cliquez pour consulter les catégories de la voie d'administration à risque </Link>
    
       
      </Grid>
    </Grid>












    <Grid container spacing={2} style={{marginTop:"5px"}}>
      <Grid item xs={12} sm={3} >
  <Typography variant="h7" >Si oui, préciser la catégorie:</Typography>  
  
    
      </Grid>
      <Grid item xs={12} sm={4}>
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
                           <FormControlLabel value="1" control={<Radio />} label="1"/>
                           <FormControlLabel value="2" control={<Radio />} label="2" />
                           <FormControlLabel value="3" control={<Radio />} label="3"/>
                           <InfoIcon fontSize="large" style={{ color: '#fb9628' }} onClick={handleOpen1}/>
                            <Modal open={open1} onClose={handleClose1}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          outline: 'none',
          boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)',
          padding: '2rem',
          borderRadius: '8px',
          width: '400px',
          maxWidth: '90%',
        }}>
          <Typography variant="h6" style={{ marginBottom: '1rem' }}>Information</Typography>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>Numéro catégorie</th>
                <th style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>Signification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>1</td>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>La voie Injectable Intra-Veineuse</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>2</td>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>La voie orale dès lors </td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>3</td>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>La voie intrathécale (intra-rachidienne) :</td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </Modal>
                         </RadioGroup>
      </Grid>
 
    </Grid>
















                      























                                    <Grid container spacing={2} style={{marginTop:"5px"}}>
      <Grid item xs={12} sm={3} >
  <Typography variant="h7" >Degré de réalisation :</Typography>  
  
    
      </Grid>
      <Grid item xs={12} sm={5}>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checked20}
            onChange={handleChange1}
            name="checked20"
            color="primary"
          />
        }
        label="EM intercepté avant atteinte du patient"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checked21}
            onChange={handleChange1}
            name="checked21"
            color="primary"
          />
        }
        label="EM non interceptée"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checked22}
            onChange={handleChange1}
            name="checked22"
            color="primary"
          />
        }
        label="Evènement Porteur de Risque"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checked23}
            onChange={handleChange1}
            name="checked23"
            color="primary"
          />
        }
        label="Je ne sais pas"
      />
      </Grid>
      <Grid item xs={12} sm={4} style={{marginTop:"10px"}}>
      <Link href={myPdf4}>Cliquez pour consulter les degré de réalisation </Link>
    
       
      </Grid>
    </Grid>
















    <Grid container spacing={2} style={{marginTop:"5px"}}>
      <Grid item xs={12} sm={3} >
  <Typography variant="h7" >Etape de survenue dans le circuit médicament :</Typography>  
  
    
      </Grid>
      <Grid item xs={12} sm={9}>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checked13}
            onChange={handleChange1}
            name="checked13"
            color="primary"
          />
        }
        label="Prescription"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checked14}
            onChange={handleChange1}
            name="checked14"
            color="primary"
          />
        }
        label="Dispensation"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checked15}
            onChange={handleChange1}
            name="checked15"
            color="primary"
          />
        }
        label="Transport"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checked16}
            onChange={handleChange1}
            name="checked16"
            color="primary"
          />
        }
        label="Administration"
      />
       <FormControlLabel
        control={
          <Checkbox
            checked={state.checked17}
            onChange={handleChange1}
            name="checked17"
            color="primary"
          />
        }
        label="Suivi et réévaluation"
      />
       <FormControlLabel
        control={
          <Checkbox
            checked={state.checked18}
            onChange={handleChange1}
            name="checked18"
            color="primary"
          />
        }
        label="je ne sais pas"
      />
       <FormControlLabel
        control={
          <Checkbox
            checked={state.checked19}
            onChange={handleChange1}
            name="checked19"
            color="primary"
          />
        }
        label="Autre"
       
        />
 
  <TextField
                                        id="outlined-multiline-static"
                                        multiline
                                        rows={1}

                                        variant="outlined"
                                        style={{ width: '35%', backgroundColor: "white" }}
                                        placeholder="Autre" />
      </Grid>
  
    </Grid>





















                               
                     
                        
                               <hr style={{ border: "0", borderBottom: "1px dashed black",background: "#black"}}></hr>   

                       <Grid item xs={12} style={{marginTop:"20px" , marginBottom:"10px"}}>
                                <Typography variant="h7" >Description de l'événement : </Typography>  
                                 <Grid item xs={12} style={{ marginTop: '0.5rem' }}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        multiline
                                        rows={1}

                                        variant="outlined"
                                        style={{ width: '95%', backgroundColor: "white" }}
                                        placeholder="Détails" />
                                 </Grid>
                                
                            </Grid>


                            <Grid item xs={12} style={{marginTop:"20px" , marginBottom:"10px"}}>
                                <Typography variant="h7">Quel impact cela a-t-il eu ? </Typography>  
                                 <Grid item xs={12} style={{ marginTop: '0.5rem' }}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        multiline
                                        rows={1}

                                        variant="outlined"
                                        style={{ width: '95%', backgroundColor: "white" }}
                                        placeholder="Détails" />
                                 </Grid>
                                
                            </Grid>
                       
                        </>
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
               </Card>            
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    </>
  );
}

export default DeclarerEM;