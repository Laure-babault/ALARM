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
import Radio from '@mui/material/Radio';
import { Checkbox} from '@material-ui/core';


//Definition des nom des étapes sur le menu
const steps = ['Qui je suis', 'Etape 1', 'Etape 2', 'Etape 3', 'Etape 4', 'Etape 5', 'Validation'];

function SaisieErreur() {
    
    const [value, setValue] = useState('option1');
    const [valuee, setValuee] = useState('no');
    
   


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

    });

    const handleChange1 = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };


  const handleChange = (event) => {
    setValue(event.target.value);
  };
     
  const handleChange2 = (event) => {
    setValuee(event.target.valuee);
  };
    

  const handleChange3 = (event) => {
    setValuee(event.target.valuee);
  };
  
    
      const handleChangeTextField = (event) => {
        setValue(event.target.value);
      };
    


      const handleNoClick = () => {
        const container = document.getElementById("container",);
        container.style.display = "none";
      };
      const handleYesClick = () => {
        const container = document.getElementById("container");
        container.style.display = "block";
      };

      const handleNoClick1 = () => {
        const container = document.getElementById("container1",);
        container.style.display = "none";
      };
      const handleYesClick1 = () => {
        const container = document.getElementById("container1");
        container.style.display = "block";
      };



      const handleNoClick2 = () => {
        const container = document.getElementById("container2",);
        container.style.display = "none";
      };
      const handleYesClick2 = () => {
        const container = document.getElementById("container2");
        container.style.display = "block";
      };

      
      const handleNoClick3 = () => {
        const container = document.getElementById("container3",);
        container.style.display = "none";
      };
      const handleYesClick3 = () => {
        const container = document.getElementById("container3");
        container.style.display = "block";
      };

      const handleNoClick4 = () => {
        const container = document.getElementById("container4",);
        container.style.display = "none";
      };
      const handleYesClick4 = () => {
        const container = document.getElementById("container4");
        container.style.display = "block";
      };

      
      const handleNoClick5 = () => {
        const container = document.getElementById("container5",);
        container.style.display = "none";
      };
      const handleYesClick5 = () => {
        const container = document.getElementById("container5");
        container.style.display = "block";
      };


        
      const handleNoClick6 = () => {
        const container = document.getElementById("container6",);
        container.style.display = "none";
      };
      const handleYesClick6 = () => {
        const container = document.getElementById("container6");
        container.style.display = "block";
      };



      const handleNoClick7 = () => {
        const container = document.getElementById("container7",);
        container.style.display = "block";
      };
      const handleYesClick7 = () => {
        const container = document.getElementById("container7");
        container.style.display = "none";
      };

      const handleNoClick8 = () => {
        const container = document.getElementById("container8",);
        container.style.display = "none";
      };
      const handleYesClick8 = () => {
        const container = document.getElementById("container8");
        container.style.display = "block";
      };



    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 0;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };



    return (
        <div>
            <Box sx={{ textAlign: 'center' }}>
                <h1 >Analyse des causes de l'erreur médicamenteuse N° </h1>
            </Box>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = (
                                <Typography variant="caption">Optionnel</Typography>
                            );
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>

                {/* contenu de l'étape 1 */}
                {activeStep === 0 && (
                    <Card style={{ backgroundColor: '#F5B7B1 ' , boxShadow: '5px 5px 5px #F1948A ' , padding: '20px'}}>
                        <Grid container xs={12}>
      <Grid item sm={4}>
       
        <div><h2>Je m'identifie ( Etape Optionnel ) </h2></div>
      </Grid>
      <Grid item sm={8} style={{marginTop:'13px'}}>
        <div> <FormControl >
      <RadioGroup row valuee={valuee} onChange={handleChange}>
        <FormControlLabel value="yes" control={<Radio />} onClick={handleYesClick8} label="Oui" />
        <FormControlLabel value="no" control={<Radio />}   onClick={handleNoClick8} label="Non" />
      </RadioGroup>
    </FormControl></div>
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



                               <h2>Evénement </h2>
                               
                    <Grid container spacing={2} justifyContent={'left'}>
                          <Grid container item xs={12}>
                          <Grid item xs={2}>
                             <Typography variant="h7">Date de l'analyse :</Typography>   </Grid> 
                             <Grid item xs={5} style={{marginTop:"-20px"}}>
                             
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


                          <Grid container item xs={12}>
                          <Grid item xs={2}>
                             <Typography variant="h7">Présenté au CREX du :</Typography>   </Grid> 
                             <Grid item xs={5} style={{marginTop:"-10px"}}>
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





















                        <Grid item xs={12}>
                            <Typography variant="h7">L'erreur médicamenteuse a été déclarée de manière anonyme : </Typography>
                        </Grid>
                        <Grid item xs={12}>
                           <Typography variant="h7">Déclaration faite par :</Typography>  
                        </Grid>
                     </Grid>

                    </Card>
                )}

                {/* contenu de l'étape 2 */}
                {activeStep === 1 && (
                
                     <><Card style={{ backgroundColor: '#EBDEF0' , boxShadow: '5px 5px 5px #C39BD3 ', padding: '20px' }}>
                        <h2>ETAPE 1 : Quel est le problème ? (Description de l'événement) </h2>


                     

                        




                          <Grid container spacing={2} justifyContent={'left'} style={{marginTop:"5px"}}>
                          <Grid container item xs={12}>
                          <Grid item xs={2}>
                             <Typography variant="h7">Date de l'événement :</Typography>   </Grid> 
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







                           
                          <Grid item xs={12}>
                                <Typography variant="h7">Pole :</Typography>
                                

                              

                            </Grid>




                           
                            <Grid item xs={12}>
                                <Typography variant="h7">Service :</Typography>
                                

                              

                            </Grid>



                            <Grid item xs={12}>
                                <Typography variant="h7">Quoi? Que s'est-il passé ? </Typography>  
                                 <Grid item xs={12}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        multiline
                                        rows={1}

                                        variant="outlined"
                                        style={{ width: '95%', backgroundColor: "white" }}
                                        placeholder="Détails" />
                                 </Grid>
                                
                            </Grid>

                            <Grid item xs={12}>
                                <Typography variant="h7">Quel impact cela a-t-il eu ? </Typography>  
                                 <Grid item xs={12}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        multiline
                                        rows={1}

                                        variant="outlined"
                                        style={{ width: '95%', backgroundColor: "white" }}
                                        placeholder="Conséquences" />
                                 </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography variant="h7">En quoi est-ce un problème ? </Typography>  
                                <Grid item xs={12}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        multiline
                                        rows={1}

                                        variant="outlined"
                                        style={{ width: '95%', backgroundColor: "white" }}
                                        placeholder="Conséquences" />
                                 </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h7">Décrire ici les premières actions mises en place à la découverte de l'événement  ? </Typography>  
                                <Grid item xs={12}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        multiline
                                        rows={1}

                                        variant="outlined"
                                        style={{ width: '95%', backgroundColor: "white" }}
                                        placeholder="Actions" />
                                 </Grid>
                            </Grid>

                        </Grid>


                    </Card>

                    <Card style={{ backgroundColor: '#EBDEF0' , boxShadow: '5px 5px 5px #C39BD3 ', padding: '20px' , marginTop: '20px' }}>
                        <h2>Caractériser l'erreur médicamenteuse (EM)</h2>
                        <Grid container spacing={2}>
                        


                           
                   
                      
                                           <Grid item xs={12}> 
                         <Typography variant="h7" >Est-ce un never-event :</Typography>       </Grid>                
                        
               















































                                <Grid item xs={12}>
                                   <Typography variant="h7">Le(s)quel(s) :</Typography></Grid>
                              





                                 <Grid item xs={12}> 
                         <Typography variant="h7" >S'agit-il d'un patient à risque ? :</Typography>                           
                          <Link href={myPdf}>Consulter les catégories du patient à risque</Link> </Grid>                
                        























                                <Grid item xs={12}>
                                     <Typography variant="h7">Catégorie du patient à risque :</Typography>
                             
                                
                                </Grid>
                               
                               
                               
                                 <Grid item xs={12}>
                                    <Typography variant="h7">Commentaires sur l'état du patient :</Typography>
                                        
                                </Grid>



                                <Grid item xs={12}> 
                         <Typography variant="h7" >S'agit-il d'un médicament à risque ? :</Typography>                           
                         <Link href={myPdf1}>Consulter les catégories du médicament à risque</Link></Grid>                
                        














                                 <Grid item xs={12}>
                                     <Typography variant="h7">Catégorie du médicament à risque :</Typography>
                             
                                    
                                 </Grid>
                               

                                  <Grid item xs={12}>
                                     <Typography variant="h7">Nom du médicament :</Typography>
                                      
                                 </Grid>








                                 <Grid item xs={2}> 
                         <Typography variant="h7" >Elle concerne :</Typography>                           
                        </Grid>                
                         <Grid item xs={10} >    <FormControl component="fieldset">
                         <RadioGroup row valuee={valuee} onChange={handleChange2}>
                         <Typography variant="h7" style={{marginRight: '20px' }}>Un médicament qui est :</Typography>                           

                           <FormControlLabel value="Réfugéré" control={<Radio />} label="Réfugéré" />
     
                           <FormControlLabel value="noRéfugéré" control={<Radio />} label="Non Réfugéré" />
                           

                         </RadioGroup>
                         <RadioGroup row valuee={valuee} onChange={handleChange2}>

                           <FormControlLabel value="Unsupéfiant" style={{ marginTop:'5px',marginLeft: '165px' }} control={<Radio />} label="Un supéfiant" />
     
                           

                         </RadioGroup>
                         <RadioGroup row valuee={valuee} onChange={handleChange2}>
                         <Typography variant="h7" style={{ marginTop:'10px',marginRight: '40px' }}>Une chimiothérapie : </Typography>                           

                           <FormControlLabel value="Réfugéré" control={<Radio />} label="Réfugéré" />
     
                           <FormControlLabel value="noRéfugéré" control={<Radio />} label="Non Réfugéré" />
                           

                         </RadioGroup>
                       </FormControl>
                       </Grid>
































                                  <Grid item xs={12}> 
                         <Typography variant="h7" >S'agit-il d'un e voie d'administration à risque ? </Typography>                           
                         </Grid>                
                        


                                  <Grid item xs={12}>
                                     <Typography variant="h7">Catégorie de la voie d'administration à risque :</Typography>
                                     <Link href={myPdf2}>Consulter les catégories de la voie d'administration à risque </Link>
                               
                                   </Grid>



                                  <Grid item xs={12}>
                                       
                                    </Grid>


                                  <Grid item xs={12}>
                                     <Typography variant="h7">Degré de réalisation :</Typography>
                             
                                     
                                 </Grid>



                                    <Grid item xs={12}>
                                        <Typography variant="h7">Etape de survenue dans le circuit médicament :</Typography>
                                    
                                      
                                    </Grid>

                               </Grid>

                    
                        </Card>
                        
                        
                        <Card style={{  backgroundColor: '#EBDEF0' , boxShadow: '5px 5px 5px #C39BD3 ', padding: '20px' , marginTop: '20px' }}>
                            <h2>Cotation de l'événement</h2>
                            <Grid container spacing={2}>
                               
       
                            <Grid item xs={12}>
                                <Typography variant="h7">Gravité :</Typography>
                             
                                <Select style={{ height: ' 50%' ,width: 'auto', backgroundColor: "white" }}> 

                                    <MenuItem style ={{display:'block'}} value={10}>Risque innacceptable </MenuItem>
                                    <MenuItem style ={{display:'block'}} value={20}>Risque acceptable sous controle  </MenuItem>
                                    <MenuItem style ={{display:'block'}} value={30}>Risque acceptable </MenuItem>
                                
                                </Select>
                                <Link href={myPdf3}>Consulter l'échelle de cotation des événements indésirables </Link>
                            </Grid>


                               </Grid>


                               <Grid container spacing={2}>
                               <Grid item xs={12}>
                                <Typography variant="h7">Occurence :</Typography>
                             
                                <Select style={{ height: ' 50%' ,width: 'auto', backgroundColor: "white" }}> 

                                    <MenuItem style ={{display:'block'}} value={10}>Très probable </MenuItem>
                                    <MenuItem style ={{display:'block'}} value={20}>Très <b>peu</b> probable  </MenuItem>
                                    <MenuItem style ={{display:'block'}} value={30}>Peu probable </MenuItem>
                                    <MenuItem style ={{display:'block'}} value={30}>Probable </MenuItem>
                                    <MenuItem style ={{display:'block'}} value={30}>Très probable à certain </MenuItem>
                                
                                </Select>
                    
                            

                               </Grid>
                               </Grid>

                               <Grid container spacing={2}>
                               <Grid item xs={12}>
                                <Typography variant="h7">Niveau de  maîtrise  :</Typography>
                             
                                <Select style={{ height: ' 50%' ,width: 'auto', backgroundColor: "white" }}> 

                                    <MenuItem style ={{display:'block'}} value={10}>Très bon </MenuItem>
                                    <MenuItem style ={{display:'block'}} value={20}>Bon  </MenuItem>
                                    <MenuItem style ={{display:'block'}} value={30}>Moyen </MenuItem>
                                    <MenuItem style ={{display:'block'}} value={30}>Faible </MenuItem>
                                    <MenuItem style ={{display:'block'}} value={30}>Inexistant </MenuItem>
                                
                                </Select>
                    
                            

                            </Grid>
                               </Grid>
                               <Grid container spacing={2}>
                               <Grid item xs={12}>
                                <Typography variant="h7">Criticité :</Typography>
                             
                                <Select style={{ height: ' 50%' ,width: 'auto', backgroundColor: "white" }}> 

                                    <MenuItem style ={{display:'block'}} value={10}>1 à 14 Risque acceptable </MenuItem>
                                    <MenuItem style ={{display:'block'}} value={20}>45 à 125 Risque inacceptable  </MenuItem>
                                    <MenuItem style ={{display:'block'}} value={30}>15 à 44 Risque acceptable sous controle </MenuItem>
                                
                                </Select>  </Grid></Grid>
                            
                        </Card> 
                       
                        </>

                )}


                {/* contenu de l'étape 3 */}
                {activeStep === 2 && (
                     <Card style={{  backgroundColor: '#D6EAF8 ' , boxShadow: '5px 5px 5px #AED6F1  ' , padding: '20px'}}>
                     <h2>ETAPE 2 : Quels sont les dysfonctionnements, les erreurs ?</h2>

                     <Grid item xs={12}>
                                <h4>Défaillances actives ou immédiates ou défauts de soin</h4>
                                    <TextField
                                        id="outlined-multiline-static"
                                        multiline
                                        rows={5}

                                        variant="outlined"
                                        style={{ width: '95%', backgroundColor: "white" }}
                                         />
                                </Grid>

                     </Card>
                )}
                {activeStep === 3 && (
                     <><Card style={{ backgroundColor: '#D4EFDF ', boxShadow: '5px 5px 5px #A9DFBF', padding: '20px' ,marginTop: '20px'}}>
                        <h2>ETAPE 3 : Pourquoi cela est-il arrivé ? (causes latentes systématiques)</h2> 
                        <Grid container style={{ padding:"5px", marginBottom:"20px"}}>
                        < Grid item xs={6} > 
                            <Typography variant="h6"><b>L'erreur est-elle liée à des facteurs propres aux patients ?</b></Typography>           
             </Grid>
                            < Grid item xs={6} > 
              <FormControl >
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} onClick={handleYesClick} label="Oui" />
        <FormControlLabel value="no" control={<Radio />}   onClick={handleNoClick} label="Non" />
      </RadioGroup>
    </FormControl></Grid>
               </Grid>


                        <Grid container spacing={1} style={{padding:"5px", marginBottom:"20px"}} id="container">
                       
<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                    
 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
          />
        }
        label="L'état de santé du patient est-il grave,complexe ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white" }}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>

</Grid>



<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                    
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
          />
        }
        label="L'EI est-il survenu dans un contexte de prise en charge en urgence ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white" }}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>





<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
          />
        }
        label="L'expression du patient ou la communication étaient-elles difficiles ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white" }}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>


<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="La personnalité du patient est-elle particulière et peut-elle expliquer en partie le dysfonctionnement ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white",marginLeft:'30px'}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>


<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                      
                           
 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="Existe-t-il des facteurs sociaux particuliers suceptibles d'expliquer tout ou partie des dysfonctionnements ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white",marginLeft:'30px'}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>

<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="Autre ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white"}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid></Grid>
 </Card>






 <Card style={{ backgroundColor: '#D4EFDF ', boxShadow: '5px 5px 5px #A9DFBF', padding: '20px' ,marginTop: '20px'}}>
                        
                        <Grid container style={{ padding:"5px", marginBottom:"20px"}}>
                        < Grid item xs={6} > 
                            <Typography variant="h6"><b>L'erreur est-elle liée à des facteurs individuels ?</b></Typography>           
             </Grid>
                            < Grid item xs={6} > 
              <FormControl >
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} onClick={handleYesClick1} label="Oui" />
        <FormControlLabel value="no" control={<Radio />}   onClick={handleNoClick1} label="Non" />
      </RadioGroup>
    </FormControl></Grid>
               </Grid>


                        <Grid container spacing={1} style={{ padding:"5px", marginBottom:"20px"}} id="container1">
                       
<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                    
 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
          />
        }
        label="Y a-t-il un défaut de qualification des personnes chargées du soin / de l'acte ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white" }}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>

</Grid>



<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                    
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
          />
        }
        label="Y a-t-il un défaut de connaissances théoriques ou techniques des professionnels ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white" }}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>





<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
          />
        }
        label="Y a-t-il un défaut d'aptitude,de compétence des professionnels chargés du soin / de l'acte ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white" }}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>








<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="Les professionnels chargés des soins étaient-ils en mauvaise disposition physique et mentale ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white",marginLeft:'30px'}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>







<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="Y a-t-il eu une insuffisance d'échange d'information entre les professionnels de santé et le patient ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white",marginLeft:'30px'}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>

<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="Y a-t-il eu une insuffisance d'échange d'information entre les professionnels de santé et la famille du patient ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white"}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>




<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="A-t-on relevé un défaut de qualité de la relation avec le patient et sa famille ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white"}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>

<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="Autre ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white"}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>
</Grid>
 </Card>











 <Card style={{ backgroundColor: '#D4EFDF ', boxShadow: '5px 5px 5px #A9DFBF', padding: '20px' ,marginTop: '20px'}}>
                        
                        <Grid container style={{ padding:"5px", marginBottom:"20px"}}>
                        < Grid item xs={6} > 
                            <Typography variant="h6"><b>L'erreur est-elle liée à des facteurs concernant l'équipe ?</b></Typography>           
             </Grid>
                            < Grid item xs={6} > 
              <FormControl >
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} onClick={handleYesClick2} label="Oui" />
        <FormControlLabel value="no" control={<Radio />}   onClick={handleNoClick2} label="Non" />
      </RadioGroup>
    </FormControl></Grid>
               </Grid>


                        <Grid container spacing={1} style={{padding:"5px", marginBottom:"20px"}} id="container2">
                       
<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                    
 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
          />
        }
        label="La composition de l'équipe chargée du soin était-elle mauvaise ou inadaptée ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white" }}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>

</Grid>



<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                    
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
          />
        }
        label="A-t-on relevé un défaut de communication interne orale et/ou écrite au sein de l'équipe ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white" }}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>





<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
          />
        }
        label="A-t-on relevé une collaboration insuffisante entre professionnels ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white" }}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>








<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="Existe-t-il des conflits ou une mauvaise ambiance au sein de l'équipe / un défaut de cohésion ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white",marginLeft:'30px'}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>







<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="La supervision des responsables et des autres personnels a-t-elle été inadéquate ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white",marginLeft:'30px'}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>

<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="Y a-t-il un manque ou un défaut de recherche d'aide, d'avis, de collaboration ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white"}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid></Grid></Card>










<Card style={{ backgroundColor: '#D4EFDF ', boxShadow: '5px 5px 5px #A9DFBF', padding: '20px' ,marginTop: '20px'}}>
                        
                        <Grid container style={{ padding:"5px", marginBottom:"20px"}}>
                        < Grid item xs={6} > 
                            <Typography variant="h6"><b>L'erreur est-elle liée à des tâche à accomplir ?</b></Typography>           
             </Grid>
                            < Grid item xs={6} > 
              <FormControl >
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} onClick={handleYesClick3} label="Oui" />
        <FormControlLabel value="no" control={<Radio />}   onClick={handleNoClick3} label="Non" />
      </RadioGroup>
    </FormControl></Grid>
               </Grid>


                        <Grid container spacing={1} style={{padding:"5px", marginBottom:"20px"}} id="container3">
                       
<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                    
 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
          />
        }
        label="Le(s) protocole(s) étaient-ils absents ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white" }}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>

</Grid>



<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                    
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
          />
        }
        label="Le(s) protocole(s), procédure(s) étaient-ils inadaptés ou peu compréhensibles ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white" }}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>





<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
          />
        }
        label="Le(s) protocole(s), procédure(s) étaient-ils indisponibles au moment de survenue de l'événement ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white" }}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>








<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="Le(s) protocole(s), procédure(s) étaient-ils inutilisables ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white",marginLeft:'30px'}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>







<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="Le(s) protocole(s), procédure(s) étaient-ils insuffisamment diffusés et/ou connus ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white",marginLeft:'30px'}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>

<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="Y a-t-il un retard dans la prestation ou la programmation des examens cliniques et paracliniques ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white"}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>

<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="Y a-t-il eu un défaut d'accessibilité,de disponibilité de l'information en temps voulu ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white"}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>

<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="La recherche d'information auprès d'un autre professionnel a-t-elle été difficile ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white"}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>


<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="La planification des tâches était-elle inadaptée  ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white"}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>




<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="Les soins/actes ne relevaient-ils pas du champ de compétence,d'activité du service ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white"}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>









<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="Le(s) protocoles(s), procédure(s) n'ont-ils pas été respectés ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white"}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>



<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="Autre?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white"}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>

</Grid></Card>

















<Card style={{ backgroundColor: '#D4EFDF ', boxShadow: '5px 5px 5px #A9DFBF', padding: '20px' ,marginTop: '20px'}}>
                        
                        <Grid container style={{ padding:"5px", marginBottom:"20px"}}>
                        < Grid item xs={6} > 
                            <Typography variant="h6"><b>L'erreur est-elle liée à des facteurs concernant l'environnement ?</b></Typography>           
             </Grid>
                            < Grid item xs={6} > 
              <FormControl >
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} onClick={handleYesClick4} label="Oui" />
        <FormControlLabel value="no" control={<Radio />}   onClick={handleNoClick4} label="Non" />
      </RadioGroup>
    </FormControl></Grid>
               </Grid>


                        <Grid container spacing={1} style={{padding:"5px", marginBottom:"20px"}} id="container4">
                       
<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                    
 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
          />
        }
        label="Les locaux ou le matériel utilisé étaient-ils inadaptés ou indisponibles ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white" }}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>

</Grid>



<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                    
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
          />
        }
        label="Les fournitures ou équipements étaient-ils défectueux,mal entretenus ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white" }}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>





<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
          />
        }
        label="Les fornitures ou équipements étaient-ils inexistants ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white" }}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>








<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="Les fournitures ou équipements ont-ils été mal utilisés ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white",marginLeft:'30px'}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>







<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="Les supports d'information, les notices d'utilisation étaient-ils indisponibles ou inadaptés ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white",marginLeft:'30px'}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>

<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="La formation ou entrainement des professionnels étaient-ils inexistants,inadaptés, non réalisés ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white"}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>

<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="Les conditions de travail étaient-elles inadaptées ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white"}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>

<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="La charge de travail était-elle importante au moment de l'événement ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white"}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>


<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="Autre ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white"}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid></Grid>

</Grid></Card>





<Card style={{ backgroundColor: '#D4EFDF ', boxShadow: '5px 5px 5px #A9DFBF', padding: '20px' ,marginTop: '20px'}}>
                        
                        <Grid container style={{ padding:"5px", marginBottom:"20px"}}>
                        < Grid item xs={7} > 
                            <Typography variant="h6"><b>L'erreur est-elle liée à des facteurs concernant l'organisation ?</b></Typography>           
             </Grid>
                            < Grid item xs={5} > 
              <FormControl >
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} onClick={handleYesClick5} label="Oui" />
        <FormControlLabel value="no" control={<Radio />}   onClick={handleNoClick5} label="Non" />
      </RadioGroup>
    </FormControl></Grid>
               </Grid>


                        <Grid container spacing={1} style={{ padding:"5px", marginBottom:"20px"}} id="container5">
                       
<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                    
 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
          />
        }
        label="Y a-t-il eu un changement récent d'organisation interne ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white" }}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>

</Grid>



<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                    
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
          />
        }
        label="Y a-t-il une limitation trop restrictive de la prise de décision des acteurs du terrain ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white" }}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>





<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
          />
        }
        label="Les responsabilités et les tâches étaient-elles non ou mal définies ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white" }}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>








<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="Y a-t-il eu un défaut de coordination dans le service ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white",marginLeft:'30px'}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>







<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="Y a-t-il eu un défaut de coordination entre les services,les structures ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white",marginLeft:'30px'}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>

<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="Y a-t-il eu un défaut d'adaptation à une situation imprévue ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white"}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>

</Grid>
<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
    <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="La gestion des ressources humaines était-elle inadéquate ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white"}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid></Grid>
    <Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
    <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="La procédure de sortie était-elle inadéquate ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white"}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid></Grid>
    <Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
    <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="Autre ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white"}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>
</Grid>
</Grid></Card>










<Card style={{ backgroundColor: '#D4EFDF ', boxShadow: '5px 5px 5px #A9DFBF', padding: '20px' ,marginTop: '20px'}}>
                        
                        <Grid container style={{ padding:"5px", marginBottom:"20px"}}>
                        < Grid item xs={7} > 
                            <Typography variant="h6"><b>L'erreur est-elle liée à des facteurs concernant le contexte institutionnel ?</b></Typography>           
             </Grid>
                            < Grid item xs={5} > 
              <FormControl >
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} onClick={handleYesClick6} label="Oui" />
        <FormControlLabel value="no" control={<Radio />}   onClick={handleNoClick6} label="Non" />
      </RadioGroup>
    </FormControl></Grid>
               </Grid>


                        <Grid container spacing={1} style={{padding:"5px", marginBottom:"20px"}} id="container6">
                       
<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                    
 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
          />
        }
        label="Les contraintes financières au niveau de l'établissement sont-elles à l'origine de l'événement ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white" }}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>

</Grid>



<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                    
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
          />
        }
        label="Les ressources sanitaires sont-elles insuffisantes, inadaptées ou défectueuses ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white" }}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>





<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
          />
        }
        label="Les échanges ou relations avec d'autres structures de soins sont-ils faibles ou difficiles ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white" }}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>








<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="Peut-on relever une absence de stratégie,politique/une absence de priorité/ou des stratégies contradictoires ou inadaptées ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white",marginLeft:'30px'}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>







<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="La sécurité et gestion des risques ne sont-elles pas perçues comme des objectifs importants ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white",marginLeft:'30px'}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>

<Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
                           

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="La culture du signalement des EI et de propositions de corrections est-elle inexistante ou défectueuse ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white"}}
           onChange={handleChangeTextField}
      />
   
    </div>
    </Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid></Grid>


    <Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
    <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="Le contexte social était-il difficile ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white"}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid></Grid>
    <Grid container spacing={1} style={{backgroundColor: "#E8F8F5 ",padding:"5px", marginBottom:"20px"}}>
                        <Grid item xs={12} md={6} > 
                            </Grid>
    <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedOption1"
            color="primary"
           
          />
        }
        label="Autre ?"
      />
      <TextField
          hiddenLabel 
          
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white"}}
           onChange={handleChangeTextField}
        

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7" style={{paddingLeft:"31px"}}>Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>
 
   </Grid>

</Grid></Card>























     

            
                
         
     

                       
                  
             
                        </>
     )}
         {activeStep === 4 && (
                     <Card style={{ backgroundColor: '#FDEBD0' , boxShadow: '5px 5px 5px #FAD7A0 ' , padding: '20px'}}>
                     <h2>ETAPE 4 : Qu'est ce qui aurait pu empêcher la survenue de l'événement ?</h2>
                    
                     <Grid item xs={12}>
                     <Typography variant="h7">Est-ce que tout avait été mis en oeuvre pour éviter ce type d'EI ?</Typography>
                     < Grid item xs={5} > 
              <FormControl >
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} onClick={handleYesClick7} label="Oui" />
        <FormControlLabel value="no" control={<Radio />}   onClick={handleNoClick7} label="Non" />
      </RadioGroup>
    </FormControl>
                                </Grid>
                                <Container id="container7" >
                     <Grid item xs={12}>
                     <Typography variant="h7">Si non , quelles ont été les défenses manquantes ou non opérationnelles ?</Typography>
                                <br></br>  <TextField
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={5}
                                    variant="outlined" 
                                    style={{ width: '95%', backgroundColor: "white" }}
                                     />
                            </Grid>
                 </Container></Grid> 
                     </Card>
                     
                       
                )}






{activeStep === 5 && (
                     <Card style={{ backgroundColor: '#FAD7A0 ' , boxShadow: '5px 5px 5px #E59866 ' , padding: '20px'}}>
                     <h2>ETAPE 5 : Quelles sont les actions correctives et préventives ?</h2>
                            <Grid item xs={12}>
                            <Grid container spacing={2}>
            <Grid item xs={2}>
            <Typography variant="h7">Cause latente</Typography>
            </Grid>
            <Grid item xs={1}>
            <Typography variant="h7">Action préventive</Typography>
            </Grid>
            <Grid item xs={2}>
            <Typography variant="h7">Cause corrective</Typography>
            </Grid>
            <Grid item xs={2}>
            <Typography variant="h7">Action corrective</Typography>
            </Grid>
            <Grid item xs={1}>
            <Typography variant="h7">Effet attendu</Typography>
            </Grid>
            <Grid item xs={1}>
            <Typography variant="h7">Pilote</Typography>
            </Grid>
            <Grid item xs={2}>
            <Typography variant="h7">Echéance prévue</Typography>
            </Grid>
            <Grid item xs={1}>
            <Typography variant="h7">Echéance effective</Typography>
            </Grid>
                            </Grid>
                            </Grid>
                            <Grid item xs={12}>
                     <Grid container spacing={2}>
                            <Grid item xs={2}>
                            <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        size="small"
                        style={{ width: '95%', backgroundColor: "white" }}
                        />
                            </Grid>
                            <Grid item xs={1}>
                            <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        size="small"
                        style={{ width: '95%', backgroundColor: "white" }}
                        />
                            </Grid>
                            <Grid item xs={2}>
                            <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        size="small"
                        style={{ width: '95%', backgroundColor: "white" }}
                        />
                            </Grid>
                            <Grid item xs={2}>
                            <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        size="small"
                        style={{ width: '95%', backgroundColor: "white" }}
                        />
                            </Grid>
                            <Grid item xs={1}>
                            <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        size="small"
                        style={{ width: '95%', backgroundColor: "white" }}
                        />
                            </Grid>
                            <Grid item xs={1}>
                            <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        size="small"
                        style={{ width: '95%', backgroundColor: "white" }}
                        />
                            </Grid>
                            <Grid item xs={2}>
                            <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        size="small"
                        style={{ width: '95%', backgroundColor: "white" }}
                        />
                            </Grid>
                            <Grid item xs={1}>
                            <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        size="small"
                        style={{ width: '95%', backgroundColor: "white" }}
                        />
                            </Grid>
                    </Grid>
                            </Grid>
                     </Card>
                       
                )}



                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            Saisie de l'erreur effectuer
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>

                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Retour
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            {isStepOptional(activeStep) && (
                                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                    Passer
                                </Button>
                            )}
                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                    </React.Fragment>
                )}
            </Box>
        </div>
    );
}
export default SaisieErreur;