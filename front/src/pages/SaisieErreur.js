import * as React from 'react';
import Box from '@mui/material/Box';
import { FormControlLabel, Stepper } from '@mui/material/';
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

//Definition des nom des étapes sur le menu
const steps = ['Qui je suis', 'Etape 1', 'Etape 2', 'Etape 3', 'Etape 4', 'Etape 5', 'Validation'];

function SaisieErreur() {
    const [value, setValue] = useState('option1');
    const [checked, setChecked] = useState(false);
    const [valuee, setValuee] = useState('no');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
     
  const handleChange2 = (event) => {
    setValuee(event.target.valuee);
  };
    


      
      const handleChangeOption1 = (event) => {
        setChecked(event.target.checked);
      };
    
      const handleChangeTextField = (event) => {
        setValue(event.target.value);
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
                <h1 >Saisie d'erreur Médicale</h1>
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
                        <h2>Je m'identifie ( Etape Optionnel ) </h2>
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

                               <h2>Evénement </h2>
                               
                    <Grid container spacing={2} justifyContent={'left'}>
                          <Grid item xs={12}>
                             <Typography variant="h7">Date de l'analyse :</Typography>  <input type="date"></input>
                          </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h7">Présenté au CREX du :</Typography> <input type="date"></input> 
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


                        <Grid container spacing={2} justifyContent={'left'}>
                            <Grid item xs={12}>
                                <Typography variant="h7">Date de la déclaration :</Typography>
                                <input type='date'></input>
                             </Grid>

                            <Grid item xs={12}>
                                <Typography variant="h7">Date de l'événement :</Typography>
                                <input type='date'></input>

                            </Grid>

                            <Grid item xs={12}>
                                <Typography variant="h7">Service :</Typography>
                                

                                <Select style={{ height: '50%', width: '30%', backgroundColor: "white" }}>

                                    <MenuItem value={10}>Chirurigie</MenuItem>
                                    <MenuItem value={20}>Médico-Technique</MenuItem>
                                    <MenuItem value={30}>Gérontologie</MenuItem>
                                    <MenuItem value={30}>Médecine</MenuItem>
                                    <MenuItem value={30}>Mère enfant</MenuItem>
                                    <MenuItem value={30}>Plateau Technique</MenuItem>

                                </Select>

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

                        </Grid>


                    </Card>
                    
                    
                    
                    
                    <Card style={{ backgroundColor: '#EBDEF0' , boxShadow: '5px 5px 5px #C39BD3 ', padding: '20px' , marginTop: '20px' }}>
                        <h2>Caractériser l'erreur médicamenteuse (EM)</h2>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>

                               <Grid item xs={6}>
                                 <Typography variant="h7">Est-ce un never-event :</Typography>
                                 <label> <input type="radio" name="options" value="option1" /> Oui </label>  
                                 <label> <input type="radio" name="options" value="option2" />Non </label>
                            </Grid>
                                </Grid> 
                                <Grid item xs={2}>
                                   <Typography variant="h7">Le(s)quel(s) :</Typography></Grid>
                                <Grid item xs={10}>
                                    <label for="option1"><input type="checkbox" id="option1" name="options" value="option1"/>NE1</label>
                                    <label for="option2"><input type="checkbox" id="option2" name="options" value="option2"/> NE2</label>
                                    <label for="option3"> <input type="checkbox" id="option3" name="options" value="option3"/> NE3</label> 
                                    <label for="option4"><input type="checkbox" id="option3" name="options" value="option3"/>NE4</label> 
                                    <label for="option5"><input type="checkbox" id="option3" name="options" value="option3"/>NE5</label> 
                                    <label for="option6"><input type="checkbox" id="option3" name="options" value="option3"/>NE6</label> <br></br><br></br>
                                    <label for="option7"><input type="checkbox" id="option3" name="options" value="option3"/>NE7</label> 
                                    <label for="option8"><input type="checkbox" id="option3" name="options" value="option3"/> NE8</label> 
                                    <label for="option9"><input type="checkbox" id="option3" name="options" value="option3"/>NE9</label> 
                                    <label for="option11"><input type="checkbox" id="option3" name="options" value="option3"/>NE11</label> 
                                    <label for="option12"><input type="checkbox" id="option3" name="options" value="option3"/>NE12</label> 

                                 </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h7">S'agit-il d'un patient à risque ? :</Typography>
                                        <label><input type="radio" name="options" value="option1" /> Oui </label>  
                                        <label> <input type="radio" name="options" value="option2" />Non </label>
                                        <label><input type="radio" name="options" value="option3" />Je ne sais pas </label>
                                        <Link href={myPdf}>Consulter les catégories du patient à risque</Link> </Grid>


                                <Grid item xs={12}>
                                     <Typography variant="h7">Catégorie du patient à risque :</Typography>
                             
                                        <Select style={{ height: ' 50%' ,width: '30%', backgroundColor: "white" }}> 
                                            <MenuItem value={10}>Patient à risque du fait de leur age ou de leur(s) pathologie(s)</MenuItem>
                                            <MenuItem value={20}>Patient à risque du faite de la compléxité de leur traitement</MenuItem>
                                            <MenuItem value={30}>Patients à risque du fait de traceurs biologiques </MenuItem>
                                            <MenuItem value={30}>Patients à risque du fait de fragilité(s) connues(s) </MenuItem>
                                        </Select>
                                
                                </Grid>
                               
                               
                               
                                 <Grid item xs={12}>
                                    <Typography variant="h7">Commentaires sur l'état du patient :</Typography>
                                        <TextField
                                    hiddenLabel
                                    id="filled-hidden-label-small"
                                    size="small"
                                    style={{ width: '95%', backgroundColor: "white" }}

                                    />
                                </Grid>

                                 <Grid item xs={12}>
                                     <Typography variant="h7">S'agit-il d'un médicament à risque ? :</Typography>
                                            <label> <input type="radio" name="options" value="option1" /> Oui </label>  
                                            <label><input type="radio" name="options" value="option2" />Non </label>  
                                            <label><input type="radio" name="options" value="option2" />Je ne sais pas </label>                              
                                            <Link href={myPdf1}>Consulter les catégories du médicament à risque</Link>
                            </Grid>

                                 <Grid item xs={12}>
                                     <Typography variant="h7">Catégorie du médicament à risque :</Typography>
                             
                                     <Select style={{ height: ' 50%' ,width: '30%', backgroundColor: "white" }}> 
                                            <MenuItem value={10}>Anti-cancéreux</MenuItem>
                                            <MenuItem value={20}>Morphiniques</MenuItem>
                                            <MenuItem value={30}>Electrolyse injectables </MenuItem>
                                            <MenuItem value={30}>Insulines </MenuItem>
                                            <MenuItem value={30}>Anticoagulants </MenuItem>
                                            <MenuItem value={30}>Médicaments perfusés parv pompe </MenuItem>
                                            <MenuItem value={30}>Benzodiazépines </MenuItem>
                                        </Select>
                                 </Grid>
                               

                                  <Grid item xs={12}>
                                     <Typography variant="h7">Nom du médicament :</Typography>
                                        <TextField
                                    hiddenLabel
                                    id="filled-hidden-label-small"
                                    size="small"
                                    style={{ width: '95%', backgroundColor: "white" }}

                                    />
                                 </Grid>

                                  <Grid item xs={2}><Typography variant="h7">Elle concerne :</Typography></Grid>
                                  <Grid item xs={10}> 
                                    <label> <input type="radio" name="options" value="option1" />Un médicament qui est <b>Réfrigéré</b> </label>
                                    <label><input type="radio" name="options" value="option2" />Un médicament qui est <b>Non Réfrigéré</b> </label><br></br>
                                    <label><input type="radio" name="options" value="option3" />Un supéfiant </label><br></br>
                                    <label><input type="radio" name="options" value="option4" />Une chimiothérapie <b>Réfrigérée</b> </label>
                                    <label><input type="radio" name="options" value="option5" /> Une chimiothérapie <b>Non Réfrigérée</b> </label>
                                  </Grid>



                                  <Grid item xs={12}>
                                      <Typography variant="h7">S'agit-il d'un e voie d'administration à risque ? :</Typography>
                                        <label> <input type="radio" name="options" value="option1" />Oui </label> 
                                        <label><input type="radio" name="options" value="option2" /> Non </label> 
                                        <label> <input type="radio" name="options" value="option2" />Je ne sais pas</label><Link href={myPdf2}>Consulter les catégories de la voie d'administration à risque </Link> 
                                     </Grid>

                                  <Grid item xs={12}>
                                     <Typography variant="h7">Catégorie de la voie d'administration à risque :</Typography>
                                        <Select style={{ height: ' 50%' ,width: '30%', backgroundColor: "white" }}> 
                                            <MenuItem value={10}>La voie Injectable Intra-Veineuse</MenuItem>
                                            <MenuItem value={20}>La voie orale dès l'écrasement du comprimé ou ouverture de la gélule </MenuItem>
                                            <MenuItem value={30}>La voie intrathécale </MenuItem>
                                        </Select>
                               
                                   </Grid>

                                  <Grid item xs={12}>
                                       <Typography variant="h7">Nom de la voie d'administration :</Typography>
                                           <TextField
                                              hiddenLabel
                                              id="filled-hidden-label-small"
                                              size="small"
                                              style={{ width: '95%', backgroundColor: "white" }}

                                            />
                                    </Grid>


                                  <Grid item xs={12}>
                                     <Typography variant="h7">Degré de réalisation :</Typography>
                             
                                        <Select style={{ height: ' 50%' ,width: '30%', backgroundColor: "white" }}> 
                                            <MenuItem value={10}>Erreur avérée et interceptée avant atteinte du patient</MenuItem>
                                            <MenuItem value={20}>Erreur avérée et non interceptée : elle a atteint le patient </MenuItem>
                                            <MenuItem value={30}>Erreur potentielle : Evènement Porteur de Risque (EPR) </MenuItem>
                                        </Select>
                                            <Link href={myPdf2}>Consulter les catégories de la voie d'administration à risque </Link>
                                 </Grid>



                                    <Grid item xs={12}>
                                        <Typography variant="h7">Etape de survenue dans le circuit médicament :</Typography>
                                    
                                        <Select style={{ height: ' 50%' ,width: '30%', backgroundColor: "white" }}> 

                                            <MenuItem value={10}>Prescription</MenuItem>
                                            <MenuItem value={20}>Dispensation </MenuItem>
                                            <MenuItem value={30}>Tranport</MenuItem>
                                            <MenuItem value={30}>Administration</MenuItem>

                                            <MenuItem value={30}>Suivi et ré-évaluation</MenuItem>
                                        
                                        </Select>
                                        <Link href={myPdf2}>Consulter les catégories de la voie d'administration à risque </Link>
                                    </Grid>

                               </Grid>

                    
                        </Card>
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        <Card style={{  backgroundColor: '#EBDEF0' , boxShadow: '5px 5px 5px #C39BD3 ', padding: '20px' , marginTop: '20px' }}>
                            <h2>Cotation de l'événement</h2>
                            <Grid container spacing={2}>
                               
       
                            <Grid item xs={12}>
                                <Typography variant="h7">Gravité :</Typography>
                             
                                <Select style={{ height: ' 50%' ,width: '30%', backgroundColor: "white" }}> 

                                    <MenuItem value={10}>Risque innacceptable </MenuItem>
                                    <MenuItem value={20}>Risque acceptable sous controle  </MenuItem>
                                    <MenuItem value={30}>Risque acceptable </MenuItem>
                                
                                </Select>
                                <Link href={myPdf3}>Consulter l'échelle de cotation des événements indésirables </Link>
                            </Grid>


                               </Grid>


                               <Grid container spacing={2}>
                               <Grid item xs={12}>
                                <Typography variant="h7">Occurence :</Typography>
                             
                                <Select style={{ height: ' 50%' ,width: '30%', backgroundColor: "white" }}> 

                                    <MenuItem value={10}>Très probable </MenuItem>
                                    <MenuItem value={20}>Très <b>peu</b> probable  </MenuItem>
                                    <MenuItem value={30}>Peu probable </MenuItem>
                                    <MenuItem value={30}>Probable </MenuItem>
                                    <MenuItem value={30}>Très probable à certain </MenuItem>
                                
                                </Select>
                    
                            

                               </Grid>
                               </Grid>

                               <Grid container spacing={2}>
                               <Grid item xs={12}>
                                <Typography variant="h7">Niveau de  maîtrise  :</Typography>
                             
                                <Select style={{ height: ' 50%' ,width: '30%', backgroundColor: "white" }}> 

                                    <MenuItem value={10}>Très bon </MenuItem>
                                    <MenuItem value={20}>Bon  </MenuItem>
                                    <MenuItem value={30}>Moyen </MenuItem>
                                    <MenuItem value={30}>Faible </MenuItem>
                                    <MenuItem value={30}>Inexistant </MenuItem>
                                
                                </Select>
                    
                            

                            </Grid>
                               </Grid>
                               <Grid container spacing={2}>
                               <Grid item xs={12}>
                                <Typography variant="h7">Criticité :</Typography>
                             
                                <Select style={{ height: ' 50%' ,width: '30%', backgroundColor: "white" }}> 

                                    <MenuItem value={10}>1 à 14 Risque acceptable </MenuItem>
                                    <MenuItem value={20}>45 à 125 Risque inacceptable  </MenuItem>
                                    <MenuItem value={30}>15 à 44 Risque acceptable sous controle </MenuItem>
                                
                                </Select>  </Grid></Grid>
                            
                        </Card> 
                       
                        </>



                )}

                {/* contenu de l'étape 3 */}
                {activeStep === 2 && (
                     <Card style={{  backgroundColor: '#D6EAF8 ' , boxShadow: '5px 5px 5px #AED6F1  ' , padding: '20px'}}>
                     <h2>ETAPE 2 : Quels sont les dysfonctionnements, les erreurs ?</h2>
                     <Grid item xs={12}>
                                
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
                        <Grid container spacing={1} style={{backgroundColor: "#E8F8F5 "}}>
                        <Grid item xs={12} md={5} > 
                            <Typography variant="h7">L'erreur est-elle liée à des facteurs propres aux patients ?</Typography></Grid>
                            <Grid item xs={12} md={7} >  <FormControl >
              
                <RadioGroup row value={value} onChange={handleChange}
                    defaultValue="yes"
                    name="radio-buttons-group"
                >
                  
        <FormControlLabel
        value="option1"
        control={<Radio />}
        label="Non"
        onChange={handleChange}
        disabled={checked } 
       
      />
                  
                    <FormControlLabel
                    value="option2"
                    checked={checked}
                    label="Oui"
                    control={<Radio />}
                    onChange={handleChangeOption1}
           
                  />
  
</RadioGroup>  </FormControl></Grid>

 <Grid item xs={12} >
<div>
      <FormControlLabel
        control={
          <Checkbox
           
            onChange={handleChangeOption1}
            name="checkedOption1"
            color="primary"
          />
        }
        label="L'état de santé du patient est-il grave,complexe ?"
      />
      <TextField
          hiddenLabel 
           defaultValue="Grave / Complexe"
           id="filled-hidden-label-small"
           size="small"
           style={{ width: '30%', backgroundColor: "white" }}
           onChange={handleChangeTextField}
           disabled={!checked }  

      />
   
    </div></Grid>
   
                        <Grid item xs={12} md={2}> 
                            <Typography variant="h7">Cela était-il évitable?</Typography></Grid>
                            <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row valuee={valuee} onChange={handleChange2}>
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl></Grid>


</Grid>































































     

            
                
         
     

                        </Card>
                    
                    <Card style={{ backgroundColor: '#D4EFDF ', boxShadow: '5px 5px 5px #A9DFBF', padding: '20px',marginTop: '20px' }}>
    
                            <Grid item xs={12}>
                                <Typography variant="h7">L'erreur est-elle liée à des facteurs individuels ?</Typography>
                                <label><input type="radio" name="option2" value="option1" />Oui </label>  <label>
                                      <input type="radio" name="option2" value="option2" />Non </label> </Grid>

                    </Card>
                        
                        
                    <Card style={{ backgroundColor: '#D4EFDF ', boxShadow: '5px 5px 5px #A9DFBF', padding: '20px',marginTop: '20px' }}>
    
                         <Grid item xs={12}>
                         <Typography variant="h7">L'erreur est-elle liée à des facteurs concernant l'équipe ?</Typography>
                               <label><input type="radio" name="option3" value="option1" /> Oui </label>  
                               <label><input type="radio" name="option3" value="option2" />Non </label> </Grid>
                    </Card>
                        
                         
                     <Card style={{ backgroundColor: '#D4EFDF ', boxShadow: '5px 5px 5px #A9DFBF', padding: '20px' ,marginTop: '20px'}}>
    
                        <Grid item xs={12}>
                        <Typography variant="h7">L'erreur est-elle liée à des tâches à accomplir  ?</Typography>
                        <label><input type="radio" name="option4" value="option1" /> Oui </label> 
                        <label><input type="radio" name="option4" value="option2" />Non </label> </Grid>
                    </Card>                 
                        
                          
                     <Card style={{ backgroundColor: '#D4EFDF ', boxShadow: '5px 5px 5px #A9DFBF', padding: '20px',marginTop: '20px' }}>
    
                      <Grid item xs={12}>
                      <Typography variant="h7">L'erreur est-elle liée à des facteurs concernant l'environnement  ?</Typography>
                      <label><input type="radio" name="option5" value="option1" /> Oui </label>  
                      <label><input type="radio" name="option5" value="option2" />Non </label> </Grid>
                    </Card>                      
                        
                        
                    <Card style={{ backgroundColor: '#D4EFDF ', boxShadow: '5px 5px 5px #A9DFBF', padding: '20px' ,marginTop: '20px'}}>
    
                    <Grid item xs={12}>
                    <Typography variant="h7">L'erreur est-elle liée à des facteurs concernant l'organisation ?</Typography>
                    <label><input type="radio" name="option6" value="option1" />Oui </label>  
                    <label><input type="radio" name="option6" value="option2" />Non </label> 
                     </Grid>
                    </Card>                      
                        
                        
                        
                    <Card style={{ backgroundColor: '#D4EFDF ', boxShadow: '5px 5px 5px #A9DFBF', padding: '20px' ,marginTop: '20px'}}>
                        
                        <Grid item xs={12}>
                            <Typography variant="h7">L'erreur est-elle liée à des facteurs concernant le contexte institutionnel ?</Typography>
                            <label><input type="radio" name="option7" value="option1" />Oui </label> 
                            <label><input type="radio" name="option7" value="option2" />Non </label>
                         </Grid>
                     </Card>        
             
                        </>
     )}
         {activeStep === 4 && (
                     <Card style={{ backgroundColor: '#FDEBD0' , boxShadow: '5px 5px 5px #FAD7A0 ' , padding: '20px'}}>
                     <h2>ETAPE 4 : Qu'est ce qui aurait pu empêcher la survenue de l'événement ?</h2>
                     <Grid item xs={12}>
                     <Typography variant="h7">Est-ce que tout avait été mis en oeuvre pour éviter ce type d'EI ?</Typography>
                     <label><input type="radio" name="option8" value="option1" />Oui </label> 
                     <label> <input type="radio" name="option8" value="option2" />Non </label> 
                                </Grid><br></br>
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