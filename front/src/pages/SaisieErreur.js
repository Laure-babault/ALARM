import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, FormControlLabel, Stepper } from '@mui/material/';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, Grid } from '@mui/material/';
import { TextField } from '@mui/material/';
import { useState } from 'react';
import { MenuItem } from '@mui/material/';
import { Select } from '@mui/material/';
import { RadioGroup } from '@mui/material/';
import Link from '@material-ui/core/Link';
import myPdf from '../pdf/patients_risque.pdf';
import myPdf1 from '../pdf/medicaments_risque.pdf';
import myPdf2 from '../pdf/administration_risque.pdf';
import myPdf3 from '../pdf/cotation.pdf';
import { FormControl } from '@mui/material/';
import Radio from '@mui/material/Radio';
import { Checkbox } from '@material-ui/core';
import { Dialog, DialogTitle, DialogContent, DialogActions} from '@material-ui/core';


//Definition des nom des étapes sur le menu
const steps = ['Qui je suis', 'Etape 1', 'Etape 2', 'Etape 3', 'Etape 4', 'Etape 5', 'Validation'];
const colors = ['#F08080', '#7B68EE', '#4682B4 ', '#3CB371','#FFA07A','#FFA500','#F08080']; // Liste des couleurs pour chaque étape

function SaisieErreur() {

  const [value, setValue] = useState('option1');
  const [valuee, setValuee] = useState('no');
  const [value3, setValue3] = useState('no');
  const [value4, setValue4] = useState('no');
  const [value5, setValue5] = useState('no');
  const [value6, setValue6] = useState('no');

  const [value7, setValue7] = useState('no');

  const [value8, setValue8] = useState('no');
  const [value9, setValue9] = useState('no');



  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValue1, setSelectedValue1] = useState('');
  const [selectedValue2, setSelectedValue2] = useState('');
  const [percentageResult, setPercentageResult] = useState('');

  const [containerVisible1, setContainerVisible1] = useState(false); 
  const [containerVisible2, setContainerVisible2] = useState(false); 
  const [containerVisible3, setContainerVisible3] = useState(false); 
  const [containerVisible4, setContainerVisible4] = useState(false); 
  const [containerVisible5, setContainerVisible5] = useState(false); 
  const [containerVisible6, setContainerVisible6] = useState(false); 
  const [containerVisible7, setContainerVisible7] = useState(false); 





 
  const handleChange11 = (event) => {  
    
    const selectedValue = event.target.value;
    calculatePercentage(selectedValue, selectedValue1, selectedValue2);
    setSelectedValue(selectedValue);
  };
  const isButtonRed = percentageResult >= 45 && percentageResult <= 125;
  const isButtonyellow = percentageResult >= 15 && percentageResult <= 44;
  const isButtongreen = percentageResult >= 1 && percentageResult <= 14;
  const handleChange12 = (event) => {
    const selectedValue = event.target.value;
    calculatePercentage(selectedValue, selectedValue1, selectedValue2);
    setSelectedValue1(selectedValue);
  };

  const handleChange13 = (event) => {
    const selectedValue = event.target.value;
    calculatePercentage(selectedValue, selectedValue1, selectedValue2);
    setSelectedValue2(selectedValue);
  };

  const calculatePercentage = (value1, value2, value3) => {
    // Effectuez votre calcul du pourcentage ici en utilisant les valeurs sélectionnées
    const calculatedPercentage = value1 * value2 * value3;
    setPercentageResult(calculatedPercentage);
  };


function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');

  
    return `${month}-${year}`;
    }





  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleChange2 = (event) => {
    setValuee(event.target.value );
  };
  const handleChange3 = (event) => {
    setValue3(event.target.value);
    setContainerVisible1(event.target.value === 'yes');
  };

  const handleChange4 = (event) => {
    setValue4(event.target.value);
    setContainerVisible2(event.target.value === 'yes');
  };
  const handleChange5 = (event) => {
    setValue5(event.target.value);
    setContainerVisible3(event.target.value === 'yes');
  };
  const handleChange6 = (event) => {
    setValue6(event.target.value);
    setContainerVisible4(event.target.value === 'yes');
  };

  const handleChange7 = (event) => {
    setValue7(event.target.value);
    setContainerVisible5(event.target.value === 'yes');
  };
  const handleChange8 = (event) => {
    setValue8(event.target.value);
    setContainerVisible6(event.target.value === 'yes');
  };
  const handleChange9 = (event) => {
    setValue9(event.target.value);
    setContainerVisible7(event.target.value === 'yes');
  };





  const handleChangeTextField = (event) => {
    setValue(event.target.value);
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
  const [openAlert, setOpenAlert] = React.useState(false);

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

  const handleFinish = () => {
    setOpenAlert(true);
  };

  return (
    <div>
      <Box sx={{ textAlign: 'center' }}>
        <h1 >Analyse des causes de l'erreur médicamenteuse N° </h1>
      </Box>
      <Box sx={{ width: '100%' }}>
      <Grid container spacing={2}>
  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
        const color = colors[index % colors.length]; // Sélectionne une couleur différente pour chaque étape
        const circleStyle = {
          backgroundColor: color,
          color: 'white',
          position: 'relative',
          zIndex: 1,
          borderRadius:'9px',
        };
        const centerStyle = {
          backgroundColor: 'white',
          borderRadius: '50%',
          height: 24,
          width: 24,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        };

        return (
          <Step key={label} {...stepProps}>
            <StepLabel {...labelProps} 
                       StepIconProps={{
                        style: circleStyle,
                        children: (
                          <div style={centerStyle} /> // Centre du cercle en blanc
                        ),
                      }}
        >{label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  </Grid>
</Grid>








        {/* contenu de l'étape 1 */}
        {activeStep === 0 && (
          <Card style={{ backgroundColor: '#F5B7B1 ', boxShadow: '5px 5px 5px #F1948A ', padding: '20px' }}>
           
           <Grid container spacing={2} style={{marginTop:"0.5rem"}}>
      <Grid item xs={4}>
      <Typography variant="h6"><b>Je m'identifie ( Etape Optionnel )</b> </Typography>
      </Grid>
      <Grid item xs={7}>
      <FormControl >
                  <RadioGroup row valuee={valuee} onChange={handleChange}>
                    <FormControlLabel value="yes" control={<Radio />} onClick={handleYesClick8} label="Oui" />
                    <FormControlLabel value="no" control={<Radio />} onClick={handleNoClick8} label="Non" />
                  </RadioGroup>
                </FormControl>
      </Grid>
      <Grid item xs={12}>

<Container id="container8" >
  <Grid container spacing={2}>
    <Grid item xs={12} sm={4}>
      <Typography variant="h7">Nom :</Typography>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        style={{ backgroundColor: "white" }}
        size="small" />
    </Grid>
    <Grid item xs={12} sm={4}>
      <Typography variant="h7">Prénom :</Typography>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        style={{ backgroundColor: "white" }}
        size="small" />
    </Grid>

    <Grid item xs={12} sm={4}>
      <Typography variant="h7">Fonction :</Typography>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        style={{ backgroundColor: "white" }}
        size="small" />
    </Grid>
  </Grid>
</Container></Grid>
    </Grid>
           
           
    <hr style={{ border: "0", borderBottom: "1px dashed black",background: "#black",marginTop:"20px",marginButtom:"20px"}}></hr>   


    <Typography variant="h6" style={{marginTop:"2rem"}}><b>Evénement</b></Typography>
            
    <Grid container spacing={2} style={{marginTop:"0.5rem"}}>
      <Grid item xs={2}>
      <Typography variant="h7">Date de l'analyse :</Typography> 
      </Grid>
      <Grid item xs={6}>
      <form >
                    <TextField
                      id="datetime-local"
                      type="datetime-local"
                      defaultValue="2017-05-24T10:30"

                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </form>
      </Grid>
    </Grid>






    <Grid container spacing={2} style={{marginTop:"0.5rem"}}>
      <Grid item xs={2}>
      <Typography variant="h7">Présenté au CREX du :</Typography>  
      </Grid>
      <Grid item xs={6}>
      <form >
                    <TextField
                      id="datetime-local"
                      type="datetime-local"
                      defaultValue="2017-05-24T10:30"

                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </form>
      </Grid>
    </Grid>


    <hr style={{ border: "0", borderBottom: "1px dashed black",background: "#black",marginTop:"20px",marginButtom:"20px"}}></hr>   




    <Grid container spacing={2} style={{marginTop:"0.5rem"}}>
      <Grid item xs={6}>
      <Typography variant="h6"><b>Ajouter l'équipe</b> </Typography>
      </Grid>
   
      <Grid item xs={12}>


  <Grid container spacing={2}>
    <Grid item xs={3} >
      <Typography variant="h7">Nom :</Typography>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        style={{ backgroundColor: "white" }}
        size="small" />
    </Grid>
    <Grid item xs={3} >
      <Typography variant="h7">Prénom :</Typography>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        style={{ backgroundColor: "white" }}
        size="small"  label/>
    </Grid>

    <Grid item xs={3} >
      <Typography variant="h7">Fonction :</Typography>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        style={{ backgroundColor: "white" }}
        size="small" />
    </Grid>
    <Grid item xs={3} >
      <Typography variant="h7">Service :</Typography>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        style={{ backgroundColor: "white" }}
        size="small" />
    </Grid>
  </Grid>
</Grid>
    </Grid>


    <hr style={{ border: "0", borderBottom: "1px dashed black",background: "#black",marginTop:"20px",marginButtom:"20px"}}></hr>   



              <Grid item xs={12}  style={{marginTop:"1rem"}}>
                <Typography variant="h7">L'erreur médicamenteuse a été déclarée de manière anonyme : </Typography>
              </Grid>
              <Grid item xs={12} style={{marginTop:"1rem"}}>
                <Typography variant="h7" >Déclaration faite par :</Typography>
              </Grid>
        

          </Card>
        )}










        {/* contenu de l'étape 2 */}
        {activeStep === 1 && (

          <><Card style={{ backgroundColor: '#EBDEF0', boxShadow: '5px 5px 5px #C39BD3 ', padding: '20px' }}>
            <h2>ETAPE 1 : Quel est le problème ? (Description de l'événement) </h2>




            <Grid container spacing={2} style={{marginTop:"0.5rem"}}>
      <Grid item xs={2}>
      <Typography variant="h7">Date de l'événement :</Typography> 
      </Grid>
      <Grid item xs={6}>
      <form >
                    <TextField
                      id="datetime-local"
                      type="datetime-local"
                      defaultValue="2017-05-24T10:30"

                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </form>
      </Grid>
    </Grid>


              <Grid item xs={12} style={{ marginTop: "1rem" }}>
                <Typography variant="h7">Pole :</Typography>




              </Grid>

     <Grid item xs={12} style={{ marginTop: "1rem" }}>
                <Typography variant="h7">Service :</Typography>




              </Grid>
           
           
           
           
           
           
           
           
           
           
           
            <Grid container spacing={2} justifyContent={'left'} style={{ marginTop: "5px" }}>
             











         



              <Grid item xs={12} >
                <Typography variant="h7">Quoi? Que s'est-il passé ? </Typography>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={1}

                    variant="outlined"
                    style={{ width: '95%', backgroundColor: "white" ,marginTop: "1rem"}}
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
                    style={{ width: '95%', backgroundColor: "white",marginTop: "1rem" }}
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
                    style={{ width: '95%', backgroundColor: "white" ,marginTop: "1rem"}}
                    placeholder="Problème" />
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
                    style={{ width: '95%', backgroundColor: "white",marginTop: "1rem" }}
                    placeholder="Actions" />
                </Grid>
              </Grid>

            </Grid>


          </Card>





            <Card style={{ backgroundColor: '#EBDEF0', boxShadow: '5px 5px 5px #C39BD3 ', padding: '20px', marginTop: '20px' }}>
              <h2>Caractériser l'erreur médicamenteuse (EM)</h2>
             




              <Grid container spacing={2}>
      <Grid item xs={12} sm={6}> <Typography variant="h7" >Est-ce un never-event :</Typography> 
          
      </Grid>
      <Grid item xs={12} sm={6}>
          {/* Affichage */}
      </Grid>
    
    </Grid>



    <Grid container spacing={2} style={{marginTop: '0.5rem'}} >
      <Grid item xs={12} sm={6}> <Typography variant="h7">Le(s)quel(s) :</Typography>
          
      </Grid>
      <Grid item xs={12} sm={6}>
          {/* Affichage */}
      </Grid>
    
    </Grid>



    <Grid container spacing={2} style={{marginTop: '0.5rem'}}>
      <Grid item xs={12} sm={4}>
  
        <Typography variant="h7" >S'agit-il d'un patient à risque ? :</Typography>
   
      </Grid>
      <Grid item xs={12} sm={4}>
 
          {/* Affichage */}
   
      </Grid>
      <Grid item xs={12} sm={4}>
      <Link href={myPdf}>Consulter les catégories du patient à risque</Link>
     
      </Grid>
    </Grid>




    <Grid container spacing={2} style={{marginTop: '0.5rem'}}>
      <Grid item xs={12} sm={6}> <Typography variant="h7">Le(s)quel(s) :</Typography>
          
      </Grid>
      <Grid item xs={12} sm={6}>
          {/* Affichage */}
      </Grid>
    
    </Grid>



    



    <Grid container spacing={2} style={{marginTop: '0.5rem'}}>
      <Grid item xs={12} sm={6}> <Typography variant="h7">Commentaires sur l'état du patient :</Typography>
          
      </Grid>
      <Grid item xs={12} sm={6}>
          {/* Affichage */}
      </Grid>
    
    </Grid>


    <Grid container spacing={2}style={{marginTop: '0.5rem'}}>
      <Grid item xs={12} sm={4}>
  
        <Typography variant="h7" >S'agit-il d'un médicament à risque ? :</Typography>
   
      </Grid>
      <Grid item xs={12} sm={4}>
 
          {/* Affichage */}
   
      </Grid>
      <Grid item xs={12} sm={4}>
      <Link href={myPdf1}>Consulter les catégories du médicament à risque</Link>
     
      </Grid>
    </Grid>


    <Grid container spacing={2} style={{marginTop: '0.5rem'}}>
      <Grid item xs={12} sm={6}> <Typography variant="h7">Catégorie du médicament à risque :</Typography>
          
      </Grid>
      <Grid item xs={12} sm={6}>
          {/* Affichage */}
      </Grid>
    
    </Grid>




    <Grid container spacing={2} style={{marginTop: '0.5rem'}}>
      <Grid item xs={12} sm={6}> <Typography variant="h7">Nom du médicament :</Typography>
          
      </Grid>
      <Grid item xs={12} sm={6}>
          {/* Affichage */}
      </Grid>
    
    </Grid>


    <Grid container spacing={2} style={{marginTop: '0.5rem'}}>
      <Grid item xs={12} sm={2}> <Typography variant="h7">Elle concerne :</Typography>
          
      </Grid>
      <Grid item xs={12} sm={8}>
      <FormControl component="fieldset">
                  <RadioGroup row valuee={valuee} onChange={handleChange2}>
                    <Typography variant="h7" style={{ marginRight: '20px' }}>Un médicament qui est :</Typography>

                    <FormControlLabel value="Réfugéré" control={<Radio />} label="Réfugéré" />

                    <FormControlLabel value="noRéfugéré" control={<Radio />} label="Non Réfugéré" />


                  </RadioGroup>
                  <RadioGroup row valuee={valuee} onChange={handleChange2}>

                    <FormControlLabel value="Unsupéfiant" style={{ marginTop: '5px', marginLeft: '165px' }} control={<Radio />} label="Un supéfiant" />



                  </RadioGroup>
                  <RadioGroup row valuee={valuee} onChange={handleChange2}>
                    <Typography variant="h7" style={{ marginTop: '10px', marginRight: '40px' }}>Une chimiothérapie : </Typography>

                    <FormControlLabel value="Réfugéré" control={<Radio />} label="Réfugéré" />

                    <FormControlLabel value="noRéfugéré" control={<Radio />} label="Non Réfugéré" />


                  </RadioGroup>
                </FormControl>
      </Grid>
    
    </Grid>




    <Grid container spacing={2} style={{marginTop: '0.5rem'}}>
      <Grid item xs={12} sm={6}> <Typography variant="h7">S'agit-il d'un e voie d'administration à risque ? </Typography>
          
      </Grid>
      <Grid item xs={12} sm={6}>
          {/* Affichage */}
      </Grid>
    
    </Grid>


    <Grid container spacing={2} style={{marginTop: '0.5rem'}}>
      <Grid item xs={12} sm={4}> <Typography variant="h7">Catégorie de la voie d'administration à risque : </Typography>
          
      </Grid>
      <Grid item xs={12} sm={3}>
          {/* Affichage */}
      </Grid>
      <Grid item xs={12} sm={5}>
      <Link href={myPdf2}>Consulter les catégories de la voie d'administration à risque </Link>
      </Grid>
    </Grid>



    <Grid container spacing={2} style={{marginTop: '0.5rem'}}>
      <Grid item xs={12} sm={6}> <Typography variant="h7">Degré de réalisation : </Typography>
          
      </Grid>
      <Grid item xs={12} sm={6}>
          {/* Affichage */}
      </Grid>
    
    </Grid>


    <Grid container spacing={2} style={{marginTop: '0.5rem'}}>
      <Grid item xs={12} sm={6}> <Typography variant="h7">Etape de survenue dans le circuit médicament :</Typography>
          
      </Grid>
      <Grid item xs={12} sm={6}>
          {/* Affichage */}
      </Grid>
    
    </Grid>


 


            </Card>


            <Card style={{ backgroundColor: '#EBDEF0', boxShadow: '5px 5px 5px #C39BD3 ', padding: '20px', marginTop: '20px' }}>
              <h2>Cotation de l'événement</h2>
              
              
              
              
              
    <Grid container spacing={2}>
      <Grid item xs={12} sm={2}>
  
        <Typography variant="h7" >Gravité :</Typography>
   
      </Grid>
      <Grid item xs={12} sm={4}>
      <Select style={{ height: ' 50%', width: 'auto', backgroundColor: "white" }} value={selectedValue} onChange={handleChange11}>

<MenuItem style={{ display: 'block' }} value={1}>1 </MenuItem>
<MenuItem style={{ display: 'block' }} value={2}>2 </MenuItem>
<MenuItem style={{ display: 'block' }} value={3}>3</MenuItem>
<MenuItem style={{ display: 'block' }} value={4}>4</MenuItem>
<MenuItem style={{ display: 'block' }} value={5}>5</MenuItem>


</Select>
   
      </Grid>
      <Grid item xs={12} sm={6}>
      <Link href={myPdf3}>Consulter l'échelle de cotation des événements indésirables </Link>
     
      </Grid>
    </Grid>
              
              
              
    <Grid container spacing={2}>
      <Grid item xs={12} sm={2}>
  
      <Typography variant="h7">Occurence :</Typography>
   
      </Grid>
      <Grid item xs={12} sm={2}>
     
      <Select style={{ height: ' 50%', width: 'auto', backgroundColor: "white" }} value={selectedValue1} onChange={handleChange12}>

<MenuItem style={{ display: 'block' }} value={1}>Très probable </MenuItem>
<MenuItem style={{ display: 'block' }} value={2}>Très <b>peu</b> probable  </MenuItem>
<MenuItem style={{ display: 'block' }} value={3}>Peu probable </MenuItem>
<MenuItem style={{ display: 'block' }} value={4}>Probable </MenuItem>
<MenuItem style={{ display: 'block' }} value={5}>Très probable à certain </MenuItem>

</Select>

   
      </Grid>

    </Grid>
                     
              
              
    <Grid container spacing={2}>
      <Grid item xs={12} sm={2}>
  
      <Typography variant="h7">Niveau de  maîtrise  :</Typography>
   
      </Grid>
      <Grid item xs={12} sm={2}>
     
  
      <Select style={{ height: ' 50%', width: 'auto', backgroundColor: "white" }} value={selectedValue2} onChange={handleChange13}>

<MenuItem style={{ display: 'block' }} value={1}>Très bon </MenuItem>
<MenuItem style={{ display: 'block' }} value={2}>Bon  </MenuItem>
<MenuItem style={{ display: 'block' }} value={3}>Moyen </MenuItem>
<MenuItem style={{ display: 'block' }} value={4}>Faible </MenuItem>
<MenuItem style={{ display: 'block' }} value={5}>Inexistant </MenuItem>

</Select>

   
      </Grid>

    </Grid>



                     
    <Grid container spacing={2}>
      <Grid item xs={12} sm={2}>
  
      <Typography variant="h7">Criticité :</Typography>
   {percentageResult && (
        <p>Calcul de la criticité : {percentageResult}</p>
        
      )}
      </Grid>
      <Grid item xs={12} sm={2}>
     

       {isButtonRed && (
        <button style={{ backgroundColor: 'red' }}>Risque inacceptable</button>
      )}

{isButtonyellow && (
        <button style={{ backgroundColor: 'yellow' }}>Risque acceptable sous controle</button>
      )}


{isButtongreen && (
        <button style={{ backgroundColor: 'green' }}>Risque acceptable</button>
      )}
      </Grid>

    </Grid>               
              
            </Card>

          </>

        )}











        {/* contenu de l'étape 3 */}
        {activeStep === 2 && (
          <Card style={{ backgroundColor: '#D6EAF8 ', boxShadow: '5px 5px 5px #AED6F1  ', padding: '20px' }}>
            <h2>ETAPE 2 : Quels sont les dysfonctionnements, les erreurs ?</h2>


            <Grid container spacing={2} style={{marginTop: '0.5rem'}}>
      <Grid item xs={12} sm={6}> <Typography variant="h7">Degré de réalisation : </Typography>
          
      </Grid>
      <Grid item xs={12} sm={6}>
          {/* Affichage */}
      </Grid>
    
    </Grid>
            <Grid item xs={12}>
              <h3>Défaillances actives ou immédiates ou défauts de soin</h3>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={5}
placeholder='Défaillances actives ou immédiates ou défauts de soin'
                variant="outlined"
                style={{ width: '95%', backgroundColor: "white" }}
              />
            </Grid>

          </Card>
        )}












        {activeStep === 3 && (
          <><Card style={{ backgroundColor: '#D4EFDF ', boxShadow: '5px 5px 5px #A9DFBF', padding: '20px', marginTop: '20px' }}>
            <h2>ETAPE 3 : Pourquoi cela est-il arrivé ? (causes latentes systématiques)</h2>


 
            <Grid container spacing={2} style={{marginTop: '1rem'}}>
      <Grid item xs={7} >   
       <Typography variant="h6" style={{marginBottom: '1rem'}}><b>L'erreur est-elle liée à des facteurs propres aux patients ?</b></Typography>
          
      </Grid>      <Grid item xs={5} >
 <FormControl>
        <RadioGroup row value={value3} onChange={handleChange3}>
          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
          <FormControlLabel value="no" control={<Radio />} label="Non" />
        </RadioGroup>
      </FormControl>     </Grid>   


     
      <Grid item xs={12} >
      {containerVisible1 && (
      


      <Grid container spacing={1} style={{ padding: "5px", margin: "2px" }} id="container">
      <Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>

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

        <Grid item xs={12} md={3}>
          <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
        <Grid item xs={12} md={2}>  <FormControl component="fieldset">
          <RadioGroup row valuee={valuee} onChange={handleChange2}>
            <FormControlLabel value="yes" control={<Radio />} label="Oui" />
            <FormControlLabel value="no" control={<Radio />} label="Non" />
          </RadioGroup>
        </FormControl></Grid>

      </Grid>



      <Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>



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

        <Grid item xs={12} md={3}>
          <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
        <Grid item xs={12} md={2}>  <FormControl component="fieldset">
          <RadioGroup row valuee={valuee} onChange={handleChange2}>
            <FormControlLabel value="yes" control={<Radio />} label="Oui" />
            <FormControlLabel value="no" control={<Radio />} label="Non" />
          </RadioGroup>
        </FormControl></Grid>


      </Grid>





      <Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
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

        <Grid item xs={12} md={3}>
          <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
        <Grid item xs={12} md={2}>  <FormControl component="fieldset">
          <RadioGroup row valuee={valuee} onChange={handleChange2}>
            <FormControlLabel value="yes" control={<Radio />} label="Oui" />
            <FormControlLabel value="no" control={<Radio />} label="Non" />
          </RadioGroup>
        </FormControl></Grid>


      </Grid>


      <Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
      


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
              style={{ width: '30%', backgroundColor: "white", marginLeft: '30px' }}
              onChange={handleChangeTextField}


            />

          </div></Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
        <Grid item xs={12} md={2}>  <FormControl component="fieldset">
          <RadioGroup row valuee={valuee} onChange={handleChange2}>
            <FormControlLabel value="yes" control={<Radio />} label="Oui" />
            <FormControlLabel value="no" control={<Radio />} label="Non" />
          </RadioGroup>
        </FormControl></Grid>


      </Grid>


      <Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
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
              style={{ width: '30%', backgroundColor: "white", marginLeft: '30px' }}
              onChange={handleChangeTextField}


            />

          </div></Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
        <Grid item xs={12} md={2}>  <FormControl component="fieldset">

          <RadioGroup row valuee={valuee} onChange={handleChange2}>
            <FormControlLabel value="yes" control={<Radio />} label="Oui" />
            <FormControlLabel value="no" control={<Radio />} label="Non" />
          </RadioGroup>
        </FormControl> </Grid>


      </Grid>

      <Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
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
              style={{ width: '30%', backgroundColor: "white" }}
              onChange={handleChangeTextField}


            />

          </div></Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
        <Grid item xs={12} md={2}>  <FormControl component="fieldset">
          <RadioGroup row valuee={valuee} onChange={handleChange2}>
            <FormControlLabel value="yes" control={<Radio />} label="Oui" />
            <FormControlLabel value="no" control={<Radio />} label="Non" />
          </RadioGroup>
        </FormControl></Grid>


      </Grid></Grid>







      )}
      </Grid>  
    
    </Grid>

















          


          </Card>






            <Card style={{ backgroundColor: '#D4EFDF ', boxShadow: '5px 5px 5px #A9DFBF', padding: '20px', marginTop: '20px' }}>





            <Grid container spacing={2} style={{marginTop: '1rem'}}>
      <Grid item xs={7} >   
      <Typography variant="h6"><b>L'erreur est-elle liée à des facteurs individuels ?</b></Typography>          
      </Grid>      <Grid item xs={5} >
 <FormControl>
        <RadioGroup row value={value4} onChange={handleChange4}>
          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
          <FormControlLabel value="no" control={<Radio />} label="Non" />
        </RadioGroup>
      </FormControl>     </Grid>   


     
      <Grid item xs={12} >
      {containerVisible2 && (
      


      <Grid container spacing={1} style={{ padding: "5px", margin: "2px"}} id="container1">

                <Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>

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

                  <Grid item xs={12} md={3}>
                    <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                  <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                    <RadioGroup row valuee={valuee} onChange={handleChange2}>
                      <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                      <FormControlLabel value="no" control={<Radio />} label="Non" />
                    </RadioGroup>
                  </FormControl></Grid>

                </Grid>



                <Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>



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

                  <Grid item xs={12} md={3}>
                    <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                  <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                    <RadioGroup row valuee={valuee} onChange={handleChange2}>
                      <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                      <FormControlLabel value="no" control={<Radio />} label="Non" />
                    </RadioGroup>
                  </FormControl></Grid>


                </Grid>





                <Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
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

                  <Grid item xs={12} md={3}>
                    <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                  <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                    <RadioGroup row valuee={valuee} onChange={handleChange2}>
                      <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                      <FormControlLabel value="no" control={<Radio />} label="Non" />
                    </RadioGroup>
                  </FormControl></Grid>


                </Grid>








                <Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
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
                        style={{ width: '30%', backgroundColor: "white", marginLeft: '30px' }}
                        onChange={handleChangeTextField}


                      />

                    </div></Grid>

                  <Grid item xs={12} md={3}>
                    <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                  <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                    <RadioGroup row valuee={valuee} onChange={handleChange2}>
                      <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                      <FormControlLabel value="no" control={<Radio />} label="Non" />
                    </RadioGroup>
                  </FormControl></Grid>


                </Grid>







                <Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
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
                        style={{ width: '30%', backgroundColor: "white", marginLeft: '30px' }}
                        onChange={handleChangeTextField}


                      />

                    </div></Grid>

                  <Grid item xs={12} md={3}>
                    <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                  <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                    <RadioGroup row valuee={valuee} onChange={handleChange2}>
                      <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                      <FormControlLabel value="no" control={<Radio />} label="Non" />
                    </RadioGroup>
                  </FormControl></Grid>


                </Grid>

                <Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
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
                        style={{ width: '30%', backgroundColor: "white" }}
                        onChange={handleChangeTextField}


                      />

                    </div></Grid>

                  <Grid item xs={12} md={3}>
                    <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                  <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                    <RadioGroup row valuee={valuee} onChange={handleChange2}>
                      <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                      <FormControlLabel value="no" control={<Radio />} label="Non" />
                    </RadioGroup>
                  </FormControl></Grid>


                </Grid>




                <Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
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
                        style={{ width: '30%', backgroundColor: "white" }}
                        onChange={handleChangeTextField}


                      />

                    </div></Grid>

                  <Grid item xs={12} md={3}>
                    <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                  <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                    <RadioGroup row valuee={valuee} onChange={handleChange2}>
                      <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                      <FormControlLabel value="no" control={<Radio />} label="Non" />
                    </RadioGroup>
                  </FormControl></Grid>


                </Grid>

                <Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
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
                        style={{ width: '30%', backgroundColor: "white" }}
                        onChange={handleChangeTextField}


                      />

                    </div></Grid>

                  <Grid item xs={12} md={3}>
                    <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                  <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                    <RadioGroup row valuee={valuee} onChange={handleChange2}>
                      <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                      <FormControlLabel value="no" control={<Radio />} label="Non" />
                    </RadioGroup>
                  </FormControl></Grid>


                </Grid>
              </Grid>







      )}
      </Grid>  
    
    </Grid>
          
            </Card>











            <Card style={{ backgroundColor: '#D4EFDF ', boxShadow: '5px 5px 5px #A9DFBF', padding: '20px', marginTop: '20px' }}>












            <Grid container spacing={2} style={{marginTop: '1rem'}}>

            <Grid item xs={7} >   
      <Typography variant="h6"><b>L'erreur est-elle liée à des facteurs concernant l'équipe ?</b></Typography>          
      </Grid>      <Grid item xs={5} >
 <FormControl>
        <RadioGroup row value={value5} onChange={handleChange5}>
          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
          <FormControlLabel value="no" control={<Radio />} label="Non" />
        </RadioGroup>
      </FormControl>     </Grid>   
    
    </Grid>


    <Grid item xs={12} >
      {containerVisible3 && (
      


      <Grid container spacing={1} style={{ padding: "5px", margin: "2px" }} id="container2">

      <Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>

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

        <Grid item xs={12} md={3}>
          <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
        <Grid item xs={12} md={2}>  <FormControl component="fieldset">
          <RadioGroup row valuee={valuee} onChange={handleChange2}>
            <FormControlLabel value="yes" control={<Radio />} label="Oui" />
            <FormControlLabel value="no" control={<Radio />} label="Non" />
          </RadioGroup>
        </FormControl></Grid>

      </Grid>



      <Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>



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

        <Grid item xs={12} md={3}>
          <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
        <Grid item xs={12} md={2}>  <FormControl component="fieldset">
          <RadioGroup row valuee={valuee} onChange={handleChange2}>
            <FormControlLabel value="yes" control={<Radio />} label="Oui" />
            <FormControlLabel value="no" control={<Radio />} label="Non" />
          </RadioGroup>
        </FormControl></Grid>


      </Grid>





      <Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
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

        <Grid item xs={12} md={3}>
          <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
        <Grid item xs={12} md={2}>  <FormControl component="fieldset">
          <RadioGroup row valuee={valuee} onChange={handleChange2}>
            <FormControlLabel value="yes" control={<Radio />} label="Oui" />
            <FormControlLabel value="no" control={<Radio />} label="Non" />
          </RadioGroup>
        </FormControl></Grid>


      </Grid>








      <Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
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
              style={{ width: '30%', backgroundColor: "white", marginLeft: '30px' }}
              onChange={handleChangeTextField}


            />

          </div></Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
        <Grid item xs={12} md={2}>  <FormControl component="fieldset">
          <RadioGroup row valuee={valuee} onChange={handleChange2}>
            <FormControlLabel value="yes" control={<Radio />} label="Oui" />
            <FormControlLabel value="no" control={<Radio />} label="Non" />
          </RadioGroup>
        </FormControl></Grid>


      </Grid>







      <Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
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
              style={{ width: '30%', backgroundColor: "white", marginLeft: '30px' }}
              onChange={handleChangeTextField}


            />

          </div></Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
        <Grid item xs={12} md={2}>  <FormControl component="fieldset">
          <RadioGroup row valuee={valuee} onChange={handleChange2}>
            <FormControlLabel value="yes" control={<Radio />} label="Oui" />
            <FormControlLabel value="no" control={<Radio />} label="Non" />
          </RadioGroup>
        </FormControl></Grid>


      </Grid>
      <Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
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
              label="Y'a-t-il un manque ou un défaut de recherche d'aide,d'avis,de collaboration ?"
            />
            <TextField
              hiddenLabel

              id="filled-hidden-label-small"
              size="small"
              style={{ width: '30%', backgroundColor: "white", marginLeft: '30px' }}
              onChange={handleChangeTextField}


            />

          </div></Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
        <Grid item xs={12} md={2}>  <FormControl component="fieldset">
          <RadioGroup row valuee={valuee} onChange={handleChange2}>
            <FormControlLabel value="yes" control={<Radio />} label="Oui" />
            <FormControlLabel value="no" control={<Radio />} label="Non" />
          </RadioGroup>
        </FormControl></Grid>


      </Grid>
      <Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
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
              style={{ width: '30%', backgroundColor: "white", marginLeft: '30px' }}
              onChange={handleChangeTextField}


            />

          </div></Grid>

        
        


      </Grid>



  
</Grid> 






      )}
   </Grid></Card>





























































            <Card style={{ backgroundColor: '#D4EFDF ', boxShadow: '5px 5px 5px #A9DFBF', padding: '20px', marginTop: '20px' }}>


            <Grid container spacing={2} style={{marginTop: '1rem'}}>
      <Grid item xs={7} >   
       <Typography variant="h6" style={{marginBottom: '1rem'}}><b>L'erreur est-elle liée à des tâche à accomplir ?</b></Typography>
          
      </Grid>      <Grid item xs={5} >
 <FormControl>
        <RadioGroup row value={value6} onChange={handleChange6}>
          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
          <FormControlLabel value="no" control={<Radio />} label="Non" />
        </RadioGroup>
      </FormControl>     </Grid>   
       </Grid>   





            

                  <Grid item xs={12} > 
                  {containerVisible4 && (

                  
                  
                   <><Grid container spacing={1} style={{ padding: "5px", margin: "2px" }} id="container3">

                    <Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
                    <Grid item xs={12}> <div>
                    
                        <FormControlLabel
                          control={<Checkbox
                            onChange={handleChange}
                            name="checkedOption1"
                            color="primary" />}
                          label="Le(s) protocole(s) étaient-ils absents ?" />
                        <TextField
                          hiddenLabel

                          id="filled-hidden-label-small"
                          size="small"
                          style={{ width: '30%', backgroundColor: "white" }}
                          onChange={handleChangeTextField} />

                      </div></Grid>

                    <Grid item xs={12} md={3}>
                      <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                    <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                      <RadioGroup row valuee={valuee} onChange={handleChange2}>
                        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                        <FormControlLabel value="no" control={<Radio />} label="Non" />
                      </RadioGroup>
                    </FormControl></Grid></Grid>

                  </Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>



                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="Le(s) protocole(s), procédure(s) étaient-ils inadaptés ou peu compréhensibles ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white" }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid>


                    </Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
                      <Grid item xs={12} md={6}>
                      </Grid>


                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="Le(s) protocole(s), procédure(s) étaient-ils indisponibles au moment de survenue de l'événement ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white" }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid>


                    </Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
                      <Grid item xs={12} md={6}>
                      </Grid>


                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="Le(s) protocole(s), procédure(s) étaient-ils inutilisables ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white", marginLeft: '30px' }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid>


                    </Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
                      <Grid item xs={12} md={6}>
                      </Grid>


                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="Le(s) protocole(s), procédure(s) étaient-ils insuffisamment diffusés et/ou connus ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white", marginLeft: '30px' }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid>


                    </Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
                      <Grid item xs={12} md={6}>
                      </Grid>


                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="Y a-t-il un retard dans la prestation ou la programmation des examens cliniques et paracliniques ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white" }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid>


                    </Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
                      <Grid item xs={12} md={6}>
                      </Grid>


                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="Y a-t-il eu un défaut d'accessibilité,de disponibilité de l'information en temps voulu ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white" }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid>


                    </Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
                      <Grid item xs={12} md={6}>
                      </Grid>


                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="La recherche d'information auprès d'un autre professionnel a-t-elle été difficile ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white" }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid>


                    </Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
                      <Grid item xs={12} md={6}>
                      </Grid>


                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="La planification des tâches était-elle inadaptée  ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white" }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid>


                    </Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
                      <Grid item xs={12} md={6}>
                      </Grid>


                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="Les soins/actes ne relevaient-ils pas du champ de compétence,d'activité du service ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white" }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid>


                    </Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
                      <Grid item xs={12} md={6}>
                      </Grid>


                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="Le(s) protocoles(s), procédure(s) n'ont-ils pas été respectés ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white" }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid>


                    </Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
                      <Grid item xs={12} md={6}>
                      </Grid>


                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="Autre?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white" }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid>





                    </Grid></>










)}
</Grid></Card>

















            <Card style={{ backgroundColor: '#D4EFDF ', boxShadow: '5px 5px 5px #A9DFBF', padding: '20px', marginTop: '20px' }}>
            <Grid container spacing={2} style={{marginTop: '1rem'}}>
      <Grid item xs={7} >   
       <Typography variant="h6" style={{marginBottom: '1rem'}}><b>L'erreur est-elle liée à des facteurs concernant l'environnement ?</b></Typography>
          
      </Grid>      <Grid item xs={5} >
 <FormControl>
        <RadioGroup row value={value7} onChange={handleChange7}>
          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
          <FormControlLabel value="no" control={<Radio />} label="Non" />
        </RadioGroup>
      </FormControl>     </Grid>   
       </Grid>   





 


















             
                  <Grid item xs={12} >
                  {containerVisible5 && (

                    
                    
                     <><Grid container spacing={1} style={{ padding: "5px", margin: "2px" }} id="container4">

                    <Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
                    <Grid item xs={12}> 
                      <div>
                        <FormControlLabel
                          control={<Checkbox
                            onChange={handleChange}
                            name="checkedOption1"
                            color="primary" />}
                          label="Les locaux ou le matériel utilisé étaient-ils inadaptés ou indisponibles ?" />
                        <TextField
                          hiddenLabel

                          id="filled-hidden-label-small"
                          size="small"
                          style={{ width: '30%', backgroundColor: "white" }}
                          onChange={handleChangeTextField} />

                      </div>
</Grid>
                    <Grid item xs={12} md={3}>
                      <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                    <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                      <RadioGroup row valuee={valuee} onChange={handleChange2}>
                        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                        <FormControlLabel value="no" control={<Radio />} label="Non" />
                      </RadioGroup>
                    </FormControl></Grid></Grid>

                  </Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>



                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="Les fournitures ou équipements étaient-ils défectueux,mal entretenus ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white" }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid>


                    </Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
                      <Grid item xs={12} md={6}>
                      </Grid>


                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="Les fornitures ou équipements étaient-ils inexistants ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white" }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid>


                    </Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
                      <Grid item xs={12} md={6}>
                      </Grid>


                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="Les fournitures ou équipements ont-ils été mal utilisés ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white", marginLeft: '30px' }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid>


                    </Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
                      <Grid item xs={12} md={6}>
                      </Grid>


                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="Les supports d'information, les notices d'utilisation étaient-ils indisponibles ou inadaptés ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white", marginLeft: '30px' }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid>


                    </Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
                      <Grid item xs={12} md={6}>
                      </Grid>


                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="La formation ou entrainement des professionnels étaient-ils inexistants,inadaptés, non réalisés ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white" }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid>


                    </Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
                      <Grid item xs={12} md={6}>
                      </Grid>


                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="Les conditions de travail étaient-elles inadaptées ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white" }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid>


                    </Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
                      <Grid item xs={12} md={6}>
                      </Grid>


                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="La charge de travail était-elle importante au moment de l'événement ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white" }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid>


                    </Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
                      <Grid item xs={12} md={6}>
                      </Grid>


                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="Autre ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white" }}
                            onChange={handleChangeTextField} />

                        </div></Grid>





                    </Grid></>










)}
</Grid></Card>





            <Card style={{ backgroundColor: '#D4EFDF ', boxShadow: '5px 5px 5px #A9DFBF', padding: '20px', marginTop: '20px' }}>
            <Grid container spacing={2} style={{marginTop: '1rem'}}>
      <Grid item xs={7} >   
       <Typography variant="h6" style={{marginBottom: '1rem'}}><b>L'erreur est-elle liée à des facteurs concernant l'organisation ?</b></Typography>
          
      </Grid>      <Grid item xs={5} >
 <FormControl>
        <RadioGroup row value={value8} onChange={handleChange8}>
          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
          <FormControlLabel value="no" control={<Radio />} label="Non" />
        </RadioGroup>
      </FormControl>     </Grid>   
       </Grid>   





   








                  <Grid item xs={12} >     
                   {containerVisible6 && (

              <><Grid container spacing={1} style={{ padding: "5px", marginBottom: "20px" }} id="container5">

                    <Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>
                    <Grid item xs={12}> <div>
                        <FormControlLabel
                          control={<Checkbox
                            onChange={handleChange}
                            name="checkedOption1"
                            color="primary" />}
                          label="Y a-t-il eu un changement récent d'organisation interne ?" />
                        <TextField
                          hiddenLabel

                          id="filled-hidden-label-small"
                          size="small"
                          style={{ width: '30%', backgroundColor: "white" }}
                          onChange={handleChangeTextField} />

                      </div></Grid>

                    <Grid item xs={12} md={3}>
                      <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                    <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                      <RadioGroup row valuee={valuee} onChange={handleChange2}>
                        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                        <FormControlLabel value="no" control={<Radio />} label="Non" />
                      </RadioGroup>
                    </FormControl></Grid></Grid>

                  </Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>



                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="Y a-t-il une limitation trop restrictive de la prise de décision des acteurs du terrain ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white" }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid>


                    </Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>



                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="Les responsabilités et les tâches étaient-elles non ou mal définies ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white" }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid>


                    </Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>



                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="Y a-t-il eu un défaut de coordination dans le service ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white", marginLeft: '30px' }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid>


                    </Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>



                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="Y a-t-il eu un défaut de coordination entre les services,les structures ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white", marginLeft: '30px' }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid>


                    </Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>



                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="Y a-t-il eu un défaut d'adaptation à une situation imprévue ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white" }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid>

                    </Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>

                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="La gestion des ressources humaines était-elle inadéquate ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white" }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid></Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>

                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="La procédure de sortie était-elle inadéquate ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white" }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid></Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>

                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="Autre ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white" }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid>





                    </Grid></>











)}
</Grid></Card>









            <Card style={{ backgroundColor: '#D4EFDF ', boxShadow: '5px 5px 5px #A9DFBF', padding: '20px', marginTop: '20px' }}>




            <Grid container spacing={2} style={{marginTop: '1rem'}}>
      <Grid item xs={7} >   
       <Typography variant="h6" style={{marginBottom: '1rem'}}><b>L'erreur est-elle liée à des facteurs concernant le contexte institutionnel ?</b></Typography>
          
      </Grid>      <Grid item xs={5} >
 <FormControl>
        <RadioGroup row value={value9} onChange={handleChange9}>
          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
          <FormControlLabel value="no" control={<Radio />} label="Non" />
        </RadioGroup>
      </FormControl>     </Grid>   
       </Grid>   



           













            

              
                  <Grid item xs={12} >

                  {containerVisible7 && (
                  <><Grid container spacing={1} style={{ padding: "5px", margin: "2px" }} id="container6">

                    <Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>

                    <Grid item xs={12}> <div>
                        <FormControlLabel
                          control={<Checkbox
                            onChange={handleChange}
                            name="checkedOption1"
                            color="primary" />}
                          label="Les contraintes financières au niveau de l'établissement sont-elles à l'origine de l'événement ?" />
                        <TextField
                          hiddenLabel

                          id="filled-hidden-label-small"
                          size="small"
                          style={{ width: '30%', backgroundColor: "white" }}
                          onChange={handleChangeTextField} />

                      </div></Grid>

                    <Grid item xs={12} md={3}>
                      <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                    <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                      <RadioGroup row valuee={valuee} onChange={handleChange2}>
                        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                        <FormControlLabel value="no" control={<Radio />} label="Non" />
                      </RadioGroup>
                    </FormControl></Grid></Grid>

                  </Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>



                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="Les ressources sanitaires sont-elles insuffisantes, inadaptées ou défectueuses ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white" }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid>


                    </Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>


                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="Les échanges ou relations avec d'autres structures de soins sont-ils faibles ou difficiles ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white" }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid>


                    </Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>



                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="Peut-on relever une absence de stratégie,politique/une absence de priorité/ou des stratégies contradictoires ou inadaptées ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white", marginLeft: '30px' }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid>


                    </Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>



                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="La sécurité et gestion des risques ne sont-elles pas perçues comme des objectifs importants ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white", marginLeft: '30px' }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid>


                    </Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>



                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="La culture du signalement des EI et de propositions de corrections est-elle inexistante ou défectueuse ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white" }}
                            onChange={handleChangeTextField} />

                        </div>
                      </Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid></Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>

                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="Le contexte social était-il difficile ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white" }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid></Grid><Grid container spacing={1} style={{ backgroundColor: "#E8F8F5 ", padding: "5px", marginBottom: "20px" }}>

                      <Grid item xs={12}>
                        <div>
                          <FormControlLabel
                            control={<Checkbox
                              onChange={handleChange}
                              name="checkedOption1"
                              color="primary" />}
                            label="Autre ?" />
                          <TextField
                            hiddenLabel

                            id="filled-hidden-label-small"
                            size="small"
                            style={{ width: '30%', backgroundColor: "white" }}
                            onChange={handleChangeTextField} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row valuee={valuee} onChange={handleChange2}>
                          <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                          <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                      </FormControl></Grid>





                    </Grid></>











)}
</Grid></Card>































          </>
        )}
        {activeStep === 4 && (
          <Card style={{ backgroundColor: '#FDEBD0', boxShadow: '5px 5px 5px #FAD7A0 ', padding: '20px' }}>
            <h2>ETAPE 4 : Qu'est ce qui aurait pu empêcher la survenue de l'événement ?</h2>


            <Grid container spacing={2}>
      <Grid item xs={12} sm={7} >
    
      <Typography variant="h6" >Est-ce que tout avait été mis en oeuvre pour éviter ce type d'EI ?</Typography>
   
      </Grid>
      <Grid item xs={12} sm={5}>
      
      <FormControl >
                  <RadioGroup row valuee={valuee} onChange={handleChange2} defaultValue="no">
                    <FormControlLabel value="yes" control={<Radio />} onClick={handleYesClick7} label="Oui" />
                    <FormControlLabel value="no" control={<Radio />} onClick={handleNoClick7} label="Non" />
                  </RadioGroup>
                </FormControl>
      
      </Grid>
      
    
    </Grid>
    
   
      <Grid item xs={12} sm={12}>
<Grid container id="container7" >
                <Grid item xs={12}>
                  <Typography variant="h6">Si non , quelles ont été les défenses manquantes ou non opérationnelles ?</Typography>
                  <br></br>  <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={5}
                    variant="outlined"
                    style={{ width: '95%', backgroundColor: "white"}}
                  />
                </Grid>
             

              </Grid>  </Grid>




           
          </Card>


        )}






        {activeStep === 5 && (
          <Card style={{ backgroundColor: '#FAD7A0 ', boxShadow: '5px 5px 5px #E59866 ', padding: '20px' }}>
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
                  <Typography variant="h7">Action corrective</Typography>
                </Grid>
                <Grid item xs={2}>
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
                
                <Grid item xs={2}>
                <form >
                    <TextField
                     id="month-year"
                     type="month"
                     defaultValue={getCurrentDateTime()}
                     style={{backgroundColor: "white", width: '95%'}}
                     InputLabelProps={{
                       shrink: true,
                      }}
                    />
                  </form>
                </Grid>
                <Grid item xs={2}>
                   <form >
                    <TextField
                     id="month-year"
                     type="month"
                     defaultValue={getCurrentDateTime()}
                     style={{backgroundColor: "white", width: '95%'}}
                     InputLabelProps={{
                       shrink: true,
                      }}
                    />
                  </form>
                </Grid>
              </Grid>
            </Grid>




                <Grid item xs={12}>
                  <TextField

                 id="multiline-text"
                 multiline
                 rows={6}
                 variant="outlined"
                 placeholder='Autre'
             
                    style={{ width: '100%', backgroundColor: "white" , marginTop:'20px'}}
                />
                </Grid>
            
            
             
            












































          </Card>

        )}



        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              Saisie de l'erreur effectuer
            </Typography>
           
          </React.Fragment>
        ) : (
          <React.Fragment>
 <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
<Dialog open={openAlert} onClose={() => setOpenAlert(false)} aria-labelledby="alert-dialog-title">
        <DialogTitle id="alert-dialog-title">Merci</DialogTitle>
        <DialogContent>
          <Typography variant="body1">La saisie de l'erreur est effectuée avec succès !</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAlert(false)} color="primary">
            MERCI
          </Button>
        </DialogActions>
      </Dialog>

      {/* Actions */}
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
        <Button onClick={activeStep === steps.length - 1 ? handleFinish : handleNext}>
          {activeStep === steps.length - 1 ? 'Terminer' : 'Suivant'}
        </Button>
      </Box>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
export default SaisieErreur;