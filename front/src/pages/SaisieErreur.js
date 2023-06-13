import * as React from 'react';
import Box from '@mui/material/Box';
import { Chip, Container, FormControlLabel, Stepper } from '@mui/material/';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, Grid } from '@mui/material/';
import { TextField } from '@mui/material/';
import { useState,  useEffect } from 'react';
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
import AddIcon from '@mui/icons-material/Add';
import RefreshIcon from '@mui/icons-material/Refresh';
import MyPDF from '../component/MyPDF';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

//Definition des nom des étapes sur le menu
const steps = ['Qui je suis', 'Etape 1', 'Etape 2', 'Etape 3', 'Etape 4', 'Etape 5', 'Validation'];
const colors = ['#F08080', '#7B68EE', '#4682B4 ', '#3CB371','#FFA07A','#FFA500','#F08080']; // Liste des couleurs pour chaque étape

function SaisieErreur() {
  const [Nom, setNom] = useState('');
  const [Prenom, setPrenom] = useState(''); 
  const [DateAnalyse, setDateAnalyse] = useState(new Date());
  const [DateCREX, setDateCREX] = useState(new Date());
  const [Fonction, setFonction] = useState('');
  const [NomMembre, setNomMembre] = useState('');
  const [PrenomMembre, setPrenomMembre] = useState('');
  const [FonctionMembre, setFonctionMembre] = useState('');
  const [ServiceMembre, setServiceMembre] = useState('');
  const [DateEvent, setDateEvent]=useState(new Date());
  const [Quoi,setQuoi] = useState ('');
  const [Impact,setImpact] = useState ('');
  const [Probleme,setProbleme] = useState ('');
  const [Actions,setActions] = useState ('');
  const [medicament , setMedicament] = useState('');
  const [Defaillances,setDefaillances] = useState ('');
  const [radiobuton , setRadiobutton] =useState('');
  const [field, setField] =useState('');
  const [Defense,setDefense] = useState('');
  const [CauseLatente,setCauseLatente] = useState('');
  const [ActionPreventif,setActionPreventif] = useState('');
  const [ActionCorrective,setActionCorrective] = useState('');
  const [EffetAttendu,setEffetAttendu] = useState('');
  const [Pilote,setPilote] = useState('');
  const [EcheancePrevue,setEcheancePrevue] = useState(new Date());
  const [EcheanceEffective,setEcheanceEffective] = useState(new Date());
  const [Autre,setAutre] = useState('');



  


  const [field1, setField1] =useState('');
  const [field2, setField2] = useState('');
  const [field3, setField3] = useState('');
  const [field4, setField4] = useState('');
  const [field5, setField5] = useState('');
  const [field6, setField6] = useState('');
  const [field7, setField7] = useState('');
  const [field8, setField8] = useState('');
  const [field9, setField9] = useState('');
  const [field10, setField10] = useState('');
  const [field11, setField11] = useState('');
  const [field12, setField12] = useState('');
  const [field13, setField13] = useState('');
  const [field14, setField14] = useState('');
  const [field15, setField15] = useState('');
  const [field16, setField16] = useState('');
  const [field17, setField17] = useState('');
  const [field18, setField18] = useState('');
  const [field19, setField19] = useState('');
  const [field20, setField20] = useState('');
  const [field21, setField21] = useState('');
  const [field22, setField22] = useState('');
  const [field23, setField23] = useState('');
  const [field24, setField24] = useState('');
  const [field25, setField25] = useState('');
  const [field26, setField26] = useState('');
  const [field27, setField27] = useState('');
  const [field28, setField28] = useState('');
  const [field29, setField29] = useState('');
  const [field30, setField30] = useState('');
  const [field31, setField31] = useState('');
  const [field32, setField32] = useState('');
  const [field33, setField33] = useState('');
  const [field34, setField34] = useState('');
  const [field35, setField35] = useState('');
  const [field36, setField36] = useState('');
  const [field37, setField37] = useState('');
  const [field38, setField38] = useState('');
  const [field39, setField39] = useState('');
  const [field40, setField40] = useState('');
  const [field41, setField41] = useState('');
  const [field42, setField42] = useState('');
  const [field43, setField43] = useState('');
  const [field44, setField44] = useState('');
  const [field45, setField45] = useState('');
  const [field46, setField46] = useState('');
  const [field47, setField47] = useState('');
  const [field48, setField48] = useState('');
  const [field49, setField49] = useState('');
  const [field50, setField50] = useState('');
  const [field51, setField51] = useState('');
  const [field52, setField52] = useState('');
  const [field53, setField53] = useState('');
  const [field54, setField54] = useState('');
  const [field55, setField55] = useState('');
  const [field56, setField56] = useState('');
  const [field57, setField57] = useState('');
  const [field58, setField58] = useState('');
  const [field59, setField59] = useState('');


  const [valuee1, setValuee1] = useState('');
  const [valuee2, setValuee2] = useState('');
  const [valuee3, setValuee3] = useState('');
  const [valuee4, setValuee4] = useState('');
  const [valuee5, setValuee5] = useState('');
  const [valuee6, setValuee6] = useState('');
  const [valuee7, setValuee7] = useState('');
  const [valuee8, setValuee8] = useState('');
  const [valuee9, setValuee9] = useState('');
  const [valuee10, setValuee10] = useState('');
  const [valuee11, setValuee11] = useState('');
  const [valuee12, setValuee12] = useState('');
  const [valuee13, setValuee13] = useState('');
  const [valuee14, setValuee14] = useState('');
  const [valuee15, setValuee15] = useState('');
  const [valuee16, setValuee16] = useState('');
  const [valuee17, setValuee17] = useState('');
  const [valuee18, setValuee18] = useState('');
  const [valuee19, setValuee19] = useState('');
  const [valuee20, setValuee20] = useState('');
  const [valuee21, setValuee21] = useState('');
  const [valuee22, setValuee22] = useState('');
  const [valuee23, setValuee23] = useState('');
  const [valuee24, setValuee24] = useState('');
  const [valuee25, setValuee25] = useState('');
  const [valuee26, setValuee26] = useState('');
  const [valuee27, setValuee27] = useState('');
  const [valuee28, setValuee28] = useState('');
  const [valuee29, setValuee29] = useState('');
  const [valuee30, setValuee30] = useState('');
  const [valuee31, setValuee31] = useState('');
  const [valuee32, setValuee32] = useState('');
  const [valuee33, setValuee33] = useState('');
  const [valuee34, setValuee34] = useState('');
  const [valuee35, setValuee35] = useState('');
  const [valuee36, setValuee36] = useState('');
  const [valuee37, setValuee37] = useState('');
  const [valuee38, setValuee38] = useState('');
  const [valuee39, setValuee39] = useState('');
  const [valuee40, setValuee40] = useState('');
  const [valuee41, setValuee41] = useState('');
  const [valuee42, setValuee42] = useState('');
  const [valuee43, setValuee43] = useState('');
  const [valuee44, setValuee44] = useState('');
  const [valuee45, setValuee45] = useState('');
  const [valuee46, setValuee46] = useState('');
  const [valuee47, setValuee47] = useState('');
  const [valuee48, setValuee48] = useState('');
  const [valuee49, setValuee49] = useState('');
  const [valuee50, setValuee50] = useState('');
  const [valuee51, setValuee51] = useState('');
  
  const handleChange22 = (event) => {
 
    switch(event.target.name) {
      case "valuee":
        setValuee(event.target.value);
        break;
      case "valuee1":
        setValuee1(event.target.value);
        break;
      case "valuee2":
        setValuee2(event.target.value);
        break;
      case "valuee3":
        setValuee3(event.target.value);
        break;
      case "valuee4":
        setValuee4(event.target.value);
        break;
      case "valuee5":
        setValuee5(event.target.value);
        break;
      case "valuee6":
        setValuee6(event.target.value);
        break;
      case "valuee7":
        setValuee7(event.target.value);
        break;
      case "valuee8":
        setValuee8(event.target.value);
        break;
      case "valuee9":
        setValuee9(event.target.value);
        break;
      case "valuee10":
        setValuee10(event.target.value);
        break;
      case "valuee11":
        setValuee11(event.target.value);
        break;
      case "valuee12":
        setValuee12(event.target.value);
        break;
      case "valuee13":
        setValuee13(event.target.value);
        break;
      case "valuee14":
        setValuee14(event.target.value);
        break;
      case "valuee15":
        setValuee15(event.target.value);
        break;
      case "valuee16":
        setValuee16(event.target.value);
        break;
      case "valuee17":
        setValuee17(event.target.value);
        break;
      case "valuee18":
        setValuee18(event.target.value);
        break;
      case "valuee19":
        setValuee19(event.target.value);
        break;
      case "valuee20":
        setValuee20(event.target.value);
        break;
      case "valuee21":
        setValuee21(event.target.value);
        break;
      case "valuee22":
        setValuee22(event.target.value);
        break;
      case "valuee23":
        setValuee23(event.target.value);
        break;
      case "valuee24":
        setValuee24(event.target.value);
        break;
      case "valuee25":
        setValuee25(event.target.value);
        break;
      case "valuee26":
        setValuee26(event.target.value);
        break;
      case "valuee27":
        setValuee27(event.target.value);
        break;
      case "valuee28":
        setValuee28(event.target.value);
        break;
      case "valuee29":
        setValuee29(event.target.value);
        break;
      case "valuee30":
        setValuee30(event.target.value);
        break;
      case "valuee31":
        setValuee31(event.target.value);
        break;
      case "valuee32":
        setValuee32(event.target.value);
        break;
      case "valuee33":
        setValuee33(event.target.value);
        break;
      case "valuee34":
        setValuee34(event.target.value);
        break;
      case "valuee35":
        setValuee35(event.target.value);
        break;
      case "valuee36":
        setValuee36(event.target.value);
        break;
      case "valuee37":
        setValuee37(event.target.value);
        break;
      case "valuee38":
        setValuee38(event.target.value);
        break;
      case "valuee39":
        setValuee39(event.target.value);
        break;
      case "valuee40":
        setValuee40(event.target.value);
        break;
      case "valuee41":
        setValuee41(event.target.value);
        break;
      case "valuee42":
        setValuee42(event.target.value);
        break;
      case "valuee43":
        setValuee43(event.target.value);
        break;
      case "valuee44":
        setValuee44(event.target.value);
        break;
      case "valuee45":
        setValuee45(event.target.value);
        break;
      case "valuee46":
        setValuee46(event.target.value);
        break;
      case "valuee47":
        setValuee47(event.target.value);
        break;
      case "valuee48":
        setValuee48(event.target.value);
        break;
      case "valuee49":
        setValuee49(event.target.value);
        break;
      case "valuee50":
        setValuee50(event.target.value);
        break;
      case "valuee51":
        setValuee51(event.target.value);
        break;
      default:
      console.log("fdjd");
    }

   
  };









 


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
  const [lines, setLines] = useState([]);


  useEffect(() => {
    setLines([{ id: 1 }]);
  }, []);


 
  const handleAddLine = () => {
    const newLineId = lines.length + 1;
    setLines([...lines, { id: newLineId }]);
  };
  const handleRemoveLine = (id) => {
    const updatedLines = lines.filter(line => line.id !== id);
    setLines(updatedLines);
  };
  const handleChange11 = (event) => {  
    
    const selectedValue = event.target.value;
    calculatePercentage(selectedValue, selectedValue1, selectedValue2);
    setSelectedValue(selectedValue);
  };

  const isButtonRed = percentageResult >= 45 && percentageResult <= 125;
  const isButtonyellow = percentageResult >= 15 && percentageResult <= 44;
  const isButtongreen = percentageResult >= 1 && percentageResult <= 14;
 
  const handleChange12 = (event) => {
    const selectedValue1 = event.target.value;
    calculatePercentage(selectedValue, selectedValue1, selectedValue2);
    setSelectedValue1(selectedValue1);
  };

  const handleChange13 = (event) => {
    const selectedValue2 = event.target.value;
    calculatePercentage(selectedValue, selectedValue1, selectedValue2);
    setSelectedValue2(selectedValue2);
  };

  const calculatePercentage = (value1, value2, value3) => {
    const calculatedPercentage = value1 * value2 * value3;
    setPercentageResult(calculatedPercentage);
  };







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
        <h1 >Analyse des causes de l'erreur médicamenteuse  </h1>
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
    <Grid container justifyContent="flex-end">
    <Button onClick={handleReset} startIcon={<RefreshIcon />}>Réinitialiser
      </Button>
    </Grid>
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
                  <RadioGroup row >
                    <FormControlLabel value="yes" control={<Radio />} onClick={handleYesClick8} label="Oui"  onChange={e=>setValuee(e.target.value)} />
                    <FormControlLabel value="no" control={<Radio />} onClick={handleNoClick8} label="Non"  onChange={e=>setValuee(e.target.value)}/>
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
        size="small"
        value={Nom}
        onChange={e=>setNom(e.target.value)}/> 
    </Grid>
    <Grid item xs={12} sm={4}>
      <Typography variant="h7">Prénom :</Typography>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        style={{ backgroundColor: "white" }}
        size="small"
        value={Prenom}
        onChange={e=>setPrenom(e.target.value)}/>  
    </Grid>

    <Grid item xs={12} sm={4}>
      <Typography variant="h7">Fonction :</Typography>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        style={{ backgroundColor: "white" }}
        size="small" 
        value={Fonction}
        onChange={e=>setFonction(e.target.value)}/> 
        
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
                      value={DateAnalyse}
                      onChange={e=>setDateAnalyse(e.target.value)}
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
             
                      value={DateCREX}
                      onChange={e=>setDateCREX(e.target.value)}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </form>
      </Grid>
    </Grid>


    <hr style={{ border: "0", borderBottom: "1px dashed black",background: "#black",marginTop:"20px",marginButtom:"20px"}}></hr>   



    <Grid container spacing={2} style={{ marginTop: "0.5rem" }}>
  <Grid item xs={2}>
    <Typography variant="h6">
      <b>Ajouter l'équipe</b>
    </Typography>
  </Grid>
  <Grid item xs={6} container justify="flex-end" alignItems="center">
    <Button
      size="small"
      color="secondary"
      style={{ backgroundColor: "#ffb8c6", color: "black" }}
      onClick={handleAddLine}
    >
      <AddIcon /> Ajouter plus de membre
    </Button>
  </Grid>

  {lines.map((line) => (
    <Grid item xs={12} key={line.id}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={2}>
          <Typography variant="h7">Nom :</Typography>
          <TextField
            hiddenLabel
            id={`nom-${line.id}`}
            value={NomMembre}
            onChange={e=>setNomMembre(e.target.value)}
            style={{ backgroundColor: "white" }}
            size="small"
          />
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h7">Prénom :</Typography>
          <TextField
            hiddenLabel
            id={`prenom-${line.id}`}
            style={{ backgroundColor: "white" }}
            size="small"
            value={PrenomMembre}
            onChange={e=>setPrenomMembre(e.target.value)}
         
          />
        </Grid>

        <Grid item xs={2}>
          <Typography variant="h7">Fonction :</Typography>
          <TextField
            hiddenLabel
            id={`fonction-${line.id}`}
            style={{ backgroundColor: "white" }}
            size="small"
            value={FonctionMembre}
            onChange={e=>setFonctionMembre(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h7">Service :</Typography>
          <TextField
            hiddenLabel
            id={`service-${line.id}`}
            style={{ backgroundColor: "white" }}
            size="small"
            value={ServiceMembre}
            onChange={e=>setServiceMembre(e.target.value)}
          />
        </Grid>

        <Grid item xs={4} container justify="center">
  <Button
    size="small"
    color="secondary"
    style={{ backgroundColor: "#DC143C", color: "white"}}
    onClick={() => handleRemoveLine(line.id)}
  >
    <DeleteOutlineOutlinedIcon />
    Supprimer ce membre
  </Button>
</Grid>
      </Grid>
    </Grid>
  ))}
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
      
                    <TextField
                      id="datetime-local"
                      type="datetime-local"
                      value={DateEvent}
                     
                      onChange={e=>setDateEvent(e.target.value)}

                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
              
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
                    value={Quoi}
                     
                    onChange={e=>setQuoi(e.target.value)}
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
                    value={Impact}
                     
                    onChange={e=>setImpact(e.target.value)}
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
                    value={Probleme}
                     
                    onChange={e=>setProbleme(e.target.value)}
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
                    value={Actions}
                     
                    onChange={e=>setActions(e.target.value)}
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
                  <RadioGroup row >
                    <Typography variant="h7" style={{ marginRight: '20px' }}>Un médicament qui est :</Typography>

                    <FormControlLabel value="Réfugéré" control={<Radio />} label="Réfugéré"  onChange={e=>setMedicament(e.target.value)} />

                    <FormControlLabel value="noRéfugéré" control={<Radio />} label="Non Réfugéré" onChange={e=>setMedicament(e.target.value)} />


                  </RadioGroup>
                  <RadioGroup row >

                    <FormControlLabel value="Unsupéfiant" style={{ marginTop: '5px', marginLeft: '165px' }} control={<Radio />} label="Un supéfiant" onChange={e=>setMedicament(e.target.value)} />



                  </RadioGroup>
                  <RadioGroup row >
                    <Typography variant="h7" style={{ marginTop: '10px', marginRight: '40px' }}>Une chimiothérapie : </Typography>

                    <FormControlLabel value="Réfugéré" control={<Radio />} label="Réfugéré" onChange={e=>setMedicament(e.target.value)} />

                    <FormControlLabel value="noRéfugéré" control={<Radio />} label="Non Réfugéré" onChange={e=>setMedicament(e.target.value)} />


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
 {/*{percentageResult && (
  <p>Calcul de la criticité : {percentageResult}</p>
)}*/}

      </Grid>
      <Grid item xs={12} sm={2}>
     

       {isButtonRed && (
        <Box
  style={{
    backgroundColor: 'red',
    border: '1px solid black',
    borderRadius: '4px',
    padding: '8px',
    cursor: 'pointer',
    display: 'inline-block',
    color:'white',
  }}
>
  Risque inacceptable
</Box>
      )}

{isButtonyellow && (
  <Box
  style={{
    backgroundColor: 'yellow',
    border: '1px solid black',
    borderRadius: '4px',
    padding: '8px',
    cursor: 'pointer',
    display: 'inline-block',
  }}
>
  Risque acceptable sous control
</Box>
      )}


{isButtongreen && (
  <Box
  style={{
    backgroundColor: 'green',
    border: '1px solid black',
    borderRadius: '4px',
    padding: '8px',
    cursor: 'pointer',
    display: 'inline-block',
    color:'white',
  }}
>
  Risque acceptable
</Box>
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
                value={Defaillances}
                     
                onChange={e=>setDefaillances(e.target.value)}
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
        <RadioGroup row  value={value3} onChange={handleChange3} >
          <FormControlLabel value="yes" control={<Radio />} label="Oui"  onChange={e=>setRadiobutton(e.target.value)}  />
          <FormControlLabel value="no" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)}  />
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
              value={field1}
              onChange={e=>setField1(e.target.value)} 

            />

          </div></Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
        <Grid item xs={12} md={2}>  <FormControl component="fieldset">
          <RadioGroup row name="valuee" value={valuee} onChange={handleChange22}>
            <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)}  />
            <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)}  />
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
              value={field2}
              onChange={e=>setField2(e.target.value)} 


            />

          </div></Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
        <Grid item xs={12} md={2}>  <FormControl component="fieldset">
          <RadioGroup row name="valuee1" value={valuee1} onChange={handleChange22}>
            <FormControlLabel value="OUI" control={<Radio />} label="Oui"   onChange={e=>setRadiobutton(e.target.value)} />
            <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
              value={field3
              }
              onChange={e=>setField3(e.target.value)} 

            />

          </div></Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
        <Grid item xs={12} md={2}>  <FormControl component="fieldset">
          <RadioGroup row name="valuee2" value={valuee2} onChange={handleChange22}>
            <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
            <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
              value={field4}
              onChange={e=>setField4(e.target.value)} 

            />

          </div></Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
        <Grid item xs={12} md={2}>  <FormControl component="fieldset">
          <RadioGroup row name="valuee3" value={valuee3} onChange={handleChange22}>
            <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
            <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
              value={field5}
              onChange={e=>setField5(e.target.value)} 

            />

          </div></Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
        <Grid item xs={12} md={2}>  <FormControl component="fieldset">

          <RadioGroup row name="valuee4" value={valuee4} onChange={handleChange22}>
            <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
            <FormControlLabel value="Non" control={<Radio />} label="Non"  onChange={e=>setRadiobutton(e.target.value)}/>
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
              value={field6}
              onChange={e=>setField6(e.target.value)} 


            />

          </div></Grid>

     


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
          <FormControlLabel value="yes" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
          <FormControlLabel value="no" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
                        value={field7}
                        onChange={e=>setField7(e.target.value)}

                      />

                    </div></Grid>

                  <Grid item xs={12} md={3}>
                    <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                  <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                    <RadioGroup row  name="valuee5" value={valuee5} onChange={handleChange22}>
                      <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)}/>
                      <FormControlLabel value="Non" control={<Radio />} label="Non"onChange={e=>setRadiobutton(e.target.value)} />
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
                        value={field8}
                        onChange={e=>setField8(e.target.value)}

                      />

                    </div></Grid>

                  <Grid item xs={12} md={3}>
                    <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                  <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                    <RadioGroup row  name="valuee6" value={valuee6} onChange={handleChange22}> 
                      <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
                      <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
                        value={field9}
                        onChange={e=>setField9(e.target.value)}


                      />

                    </div></Grid>

                  <Grid item xs={12} md={3}>
                    <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                  <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                    <RadioGroup row  name="valuee7" value={valuee7} onChange={handleChange22}>
                      <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
                      <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)}/>
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
                        value={field10}
                        onChange={e=>setField10(e.target.value)}


                      />

                    </div></Grid>

                  <Grid item xs={12} md={3}>
                    <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                  <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                    <RadioGroup row  name="valuee8" value={valuee8} onChange={handleChange22}>
                      <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)}/>
                      <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
                        value={field11}
                        onChange={e=>setField11(e.target.value)}


                      />

                    </div></Grid>

                  <Grid item xs={12} md={3}>
                    <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                  <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                    <RadioGroup row  name="valuee9" value={valuee9} onChange={handleChange22}>
                      <FormControlLabel value="OUI" control={<Radio />} label="Oui"onChange={e=>setRadiobutton(e.target.value)} />
                      <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
                        value={field12}
                        onChange={e=>setField12(e.target.value)}


                      />

                    </div></Grid>

                  <Grid item xs={12} md={3}>
                    <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                  <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                    <RadioGroup row  name="valuee10" value={valuee10} onChange={handleChange22}>
                      <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
                      <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
                        value={field13}
                        onChange={e=>setField13(e.target.value)}


                      />

                    </div></Grid>

                  <Grid item xs={12} md={3}>
                    <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                  <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                    <RadioGroup row  name="valuee11" value={valuee11} onChange={handleChange22}>
                      <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
                      <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
                        value={field14}
                        onChange={e=>setField14(e.target.value)}


                      />

                    </div></Grid>

               

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
          <FormControlLabel value="yes" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)}/>
          <FormControlLabel value="no" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
              value={field15}
              onChange={e=>setField15(e.target.value)}

            />

          </div></Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
        <Grid item xs={12} md={2}>  <FormControl component="fieldset">
          <RadioGroup row  name="valuee12" value={valuee12} onChange={handleChange22}>
            <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)}/>
            <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
              value={field16}
              onChange={e=>setField16(e.target.value)}

            />

          </div></Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
        <Grid item xs={12} md={2}>  <FormControl component="fieldset">
          <RadioGroup row  name="valuee13" value={valuee13} onChange={handleChange22}>
            <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
            <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
              value={field17}
              onChange={e=>setField17(e.target.value)}

            />

          </div></Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
        <Grid item xs={12} md={2}>  <FormControl component="fieldset">
          <RadioGroup row  name="valuee14" value={valuee14} onChange={handleChange22}>
            <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)}/>
            <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
              value={field18}
              onChange={e=>setField18(e.target.value)}

            />

          </div></Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
        <Grid item xs={12} md={2}>  <FormControl component="fieldset">
          <RadioGroup row  name="valuee15" value={valuee15} onChange={handleChange22}>
            <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
            <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)}/>
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
              value={field19}
              onChange={e=>setField19(e.target.value)}

            />

          </div></Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
        <Grid item xs={12} md={2}>  <FormControl component="fieldset">
          <RadioGroup row  name="valuee16" value={valuee16} onChange={handleChange22}>
            <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)}/>
            <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
              value={field20}
              onChange={e=>setField20(e.target.value)}

            />

          </div></Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
        <Grid item xs={12} md={2}>  <FormControl component="fieldset">
          <RadioGroup row  name="valuee17" value={valuee17} onChange={handleChange22}>
            <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
            <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
              value={field21}
              onChange={e=>setField21(e.target.value)}

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
          <FormControlLabel value="yes" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
          <FormControlLabel value="no" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
                          value={field22}
                          onChange={e=>setField22(e.target.value)}                           />

                      </div></Grid>

                    <Grid item xs={12} md={3}>
                      <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                    <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                      <RadioGroup row  name="valuee18" value={valuee18} onChange={handleChange22}>
                        <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
                        <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
                            value={field23}
                            onChange={e=>setField23(e.target.value)} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row  name="valuee19"  value={valuee19} onChange={handleChange22}>
                          <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
                          <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
                            value={field24}
                            onChange={e=>setField24(e.target.value)}                             />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row  name="valuee20" value={valuee20} onChange={handleChange22}>
                          <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)}/>
                          <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
                            value={field25}
                            onChange={e=>setField25(e.target.value)} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row  name="valuee21" value={valuee21} onChange={handleChange22}>
                          <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
                          <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
                            value={field26}
                            onChange={e=>setField26(e.target.value)} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row  name="valuee22"  value={valuee22} onChange={handleChange22}>
                          <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
                          <FormControlLabel value="Non" control={<Radio />} label="Non"onChange={e=>setRadiobutton(e.target.value)} />
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
                            value={field27}
                            onChange={e=>setField27(e.target.value)} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row  name="valuee23" value={valuee23} onChange={handleChange22}>
                          <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
                          <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
                            value={field28}
                            onChange={e=>setField28(e.target.value)} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row  name="valuee24" value={valuee24} onChange={handleChange22}>
                          <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
                          <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
                            value={field29}
                            onChange={e=>setField29(e.target.value)} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row  name="valuee25" value={valuee25} onChange={handleChange22}>
                          <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
                          <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)}/>
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
                            value={field30}
                            onChange={e=>setField30(e.target.value)} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row  name="valuee26" value={valuee26} onChange={handleChange22}>
                          <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
                          <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
                            value={field31}
                            onChange={e=>setField31(e.target.value)} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row  name="valuee27" value={valuee27} onChange={handleChange22}> 
                          <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
                          <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
                            value={field32}
                            onChange={e=>setField32(e.target.value)} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row  name="valuee28" value={valuee28} onChange={handleChange22}>
                          <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
                          <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
                            value={field33}
                            onChange={e=>setField33(e.target.value)}/>

                        </div></Grid>

                     




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
          <FormControlLabel value="yes" control={<Radio />} label="Oui"  onChange={e=>setRadiobutton(e.target.value)}/>
          <FormControlLabel value="no" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
                          value={field34}
                          onChange={e=>setField34(e.target.value)} />

                      </div>
</Grid>
                    <Grid item xs={12} md={3}>
                      <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                    <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                      <RadioGroup row  name="valuee29" value={valuee29} onChange={handleChange22}>
                        <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
                        <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
                            value={field35}
                            onChange={e=>setField35(e.target.value)} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row  name="valuee30" value={valuee30} onChange={handleChange22}>
                          <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)}/>
                          <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
                            value={field36}
                            onChange={e=>setField36(e.target.value)} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row  name="valuee31" value={valuee31} onChange={handleChange22}>
                          <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
                          <FormControlLabel value="no" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
                            value={field37}
                            onChange={e=>setField37(e.target.value)} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row  name="valuee32" value={valuee32} onChange={handleChange22}>
                          <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
                          <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
                            value={field38}
                            onChange={e=>setField38(e.target.value)} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row  name="valuee33" value={valuee33} onChange={handleChange22}>
                          <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
                          <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
                            value={field39}
                            onChange={e=>setField39(e.target.value)} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row  name="valuee34" value={valuee34} onChange={handleChange22}>
                          <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
                          <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
                            value={field40}
                            onChange={e=>setField40(e.target.value)}/>

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row name="valuee35"  value={valuee35} onChange={handleChange22}>
                          <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)}/>
                          <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
                            value={field41}
                            onChange={e=>setField41(e.target.value)} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row  name="valuee36" value={valuee36} onChange={handleChange22}>
                          <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)}/>
                          <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
                            value={field42}
                            onChange={e=>setField42(e.target.value)} />

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
          <FormControlLabel value="yes" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
          <FormControlLabel value="no" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
                          value={field43}
                          onChange={e=>setField43(e.target.value)} />

                      </div></Grid>

                    <Grid item xs={12} md={3}>
                      <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                    <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                      <RadioGroup row  name="valuee37" value={valuee37} onChange={handleChange22}>
                        <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
                        <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)}/>
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
                            value={field44}
                            onChange={e=>setField44(e.target.value)} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row  name="valuee38" value={valuee38} onChange={handleChange22}>
                          <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
                          <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
                            value={field45}
                            onChange={e=>setField45(e.target.value)} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row  name="valuee39" value={valuee39} onChange={handleChange22}>
                          <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)}/>
                          <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
                            value={field46}
                            onChange={e=>setField46(e.target.value)}/>

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row  name="valuee40" value={valuee40} onChange={handleChange22}>
                          <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)}/>
                          <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
                            value={field47}
                            onChange={e=>setField47(e.target.value)} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row  name="valuee41" value={valuee41} onChange={handleChange22}>
                          <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)}/>
                          <FormControlLabel value="Non" control={<Radio />} label="Non"  onChange={e=>setRadiobutton(e.target.value)}/>
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
                            value={field48}
                            onChange={e=>setField48(e.target.value)} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row  name="valuee42" value={valuee42} onChange={handleChange22}>
                          <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)}/>
                          <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
                            value={field49}
                            onChange={e=>setField49(e.target.value)} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row  name="valuee43" value={valuee43} onChange={handleChange22}>
                          <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)}/>
                          <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)}/>
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
                            value={field50}
                            onChange={e=>setField50(e.target.value)} />

                        </div></Grid>

                      <Grid item xs={12} md={3}>
                        <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
                      <Grid item xs={12} md={2}>  <FormControl component="fieldset">
                        <RadioGroup row  name="valuee44" value={valuee44} onChange={handleChange22}>
                          <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
                          <FormControlLabel value="Non" control={<Radio />} label="Non"  onChange={e=>setRadiobutton(e.target.value)}/>
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
                            value={field51}
                            onChange={e=>setField51(e.target.value)} />

                        </div></Grid>





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
          <FormControlLabel value="yes" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
          <FormControlLabel value="no" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)}/>
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
        value={field52}
        onChange={e=>setField52(e.target.value)} />

    </div></Grid>

  <Grid item xs={12} md={3}>
    <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
  <Grid item xs={12} md={2}>  <FormControl component="fieldset">
    <RadioGroup row  name="valuee45" value={valuee45} onChange={handleChange22}>
      <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)}/>
      <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
          value={field53}
          onChange={e=>setField53(e.target.value)}/>

      </div></Grid>

    <Grid item xs={12} md={3}>
      <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
    <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row  name="valuee46" value={valuee46} onChange={handleChange22}>
        <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
        <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
          value={field54}
          onChange={e=>setField54(e.target.value)} />

      </div></Grid>

    <Grid item xs={12} md={3}>
      <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
    <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row  name="valuee47" value={valuee47} onChange={handleChange22}>
        <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
        <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)}/>
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
          value={field55}
          onChange={e=>setField55(e.target.value)} />

      </div></Grid>

    <Grid item xs={12} md={3}>
      <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
    <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row  name="valuee48" value={valuee48} onChange={handleChange22}>
        <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
        <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
          value={field56}
          onChange={e=>setField56(e.target.value)} />

      </div></Grid>

    <Grid item xs={12} md={3}>
      <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
    <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row name="valuee49"  value={valuee49} onChange={handleChange22}>
        <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
        <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)}/>
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
          value={field57}
          onChange={e=>setField57(e.target.value)} />

      </div>
    </Grid>

    <Grid item xs={12} md={3}>
      <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
    <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row  name="valuee50"  value={valuee50} onChange={handleChange22}>
        <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
        <FormControlLabel value="Non" control={<Radio />} label="Non" onChange={e=>setRadiobutton(e.target.value)} />
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
          value={field58}
          onChange={e=>setField58(e.target.value)} />

      </div></Grid>

    <Grid item xs={12} md={3}>
      <Typography variant="h7" style={{ paddingLeft: "31px" }}>Cela était-il évitable?</Typography></Grid>
    <Grid item xs={12} md={2}>  <FormControl component="fieldset">
      <RadioGroup row  name="valuee51" value={valuee51} onChange={handleChange22}>
        <FormControlLabel value="OUI" control={<Radio />} label="Oui" onChange={e=>setRadiobutton(e.target.value)} />
        <FormControlLabel value="Non" control={<Radio />} label="Non"  onChange={e=>setRadiobutton(e.target.value)}/>
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
          value={field59}
          onChange={e=>setField59(e.target.value)} />

      </div></Grid>





  </Grid></>











)}
</Grid></Card>




<Card style={{ backgroundColor: '#D4EFDF ', boxShadow: '5px 5px 5px #A9DFBF', padding: '20px', marginTop: '20px' }}>
<div>
      <h3>Résumé</h3>
     
      <MyPDF titre1={value3}   titre2={value4}  titre3={value5}  titre4={value6}  titre5={value7}  titre6={value8}  titre7={value9} 
      check={valuee} 

check1={valuee1}
check2={valuee2}
check3={valuee3}
check4={valuee4}
check5={valuee5}
check6={valuee6}
check7={valuee7}
check8={valuee8}
check9={valuee9}
check10={valuee10}
check11={valuee11}
check12={valuee12}
check13={valuee13}
check14={valuee14}
check15={valuee15}
check16={valuee16}
check17={valuee17}
check18={valuee18}
check19={valuee19}
check20={valuee20}
check21={valuee21}
check22={valuee22}
check23={valuee23}
check24={valuee24}
check25={valuee25}
check26={valuee26}
check27={valuee27}
check28={valuee28}
check29={valuee29}
check30={valuee30}
check31={valuee31}
check32={valuee32}
check33={valuee33}
check34={valuee34}
check35={valuee35}
check36={valuee36}
check37={valuee37}
check38={valuee38}
check39={valuee39}
check40={valuee40}
check41={valuee41}
check42={valuee42}
check43={valuee43}
check44={valuee44}
check45={valuee45}
check46={valuee46}
check47={valuee47}
check48={valuee48}
check49={valuee49}
check50={valuee50}
check51={valuee51}




input1={field1}
input2={field2}
input3={field3}
input4={field4}
input5={field5}
input6={field6}
input7={field7}
input8={field8}
input9={field9}
input10={field10}
input11={field11}
input12={field12}
input13={field13}
input14={field14}
input15={field15}
input16={field16}
input17={field17}
input18={field18}
input19={field19}
input20={field20}
input21={field21}
input22={field22}
input23={field23}
input24={field24}
input25={field25}
input26={field26}
input27={field27}
input28={field28}
input29={field29}
input30={field30}
input31={field31}
input32={field32}
input33={field33}
input34={field34}
input35={field35}
input36={field36}
input37={field37}
input38={field38}
input39={field39}
input40={field40}
input41={field41}
input42={field42}
input43={field43}
input44={field44}
input45={field45}
input46={field46}
input47={field47}
input48={field48}
input49={field49}
input50={field50}
input51={field51}
input52={field52}
input53={field53}
input54={field54}
input55={field55}
input56={field56}
input57={field57}
input58={field58}
input59={field59}/>
    </div>
    </Card>



























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
                    <FormControlLabel value="yes" control={<Radio />} onClick={handleYesClick7} label="Oui" onChange={e=>setRadiobutton(e.target.value)}/>
                    <FormControlLabel value="no" control={<Radio />} onClick={handleNoClick7} label="Non" onChange={e=>setRadiobutton(e.target.value)}/>
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
                    value={Defense}
                    onChange={e=>setDefense(e.target.value)} 
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
                    value={CauseLatente}
                    onChange={e=>setCauseLatente(e.target.value)} 
                    style={{ width: '95%', backgroundColor: "white" }}
                  />
                </Grid>
                <Grid item xs={1}>
                  <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    size="small"
                    value={ActionPreventif}
                    onChange={e=>setActionPreventif(e.target.value)} 
                    style={{ width: '95%', backgroundColor: "white" }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    size="small"
                    value={ActionCorrective}
                    onChange={e=>setActionCorrective(e.target.value)} 
                    style={{ width: '95%', backgroundColor: "white" }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    size="small"
                    value={EffetAttendu}
                    onChange={e=>setEffetAttendu(e.target.value)} 
                    style={{ width: '95%', backgroundColor: "white" }}
                  />
                </Grid>
                <Grid item xs={1}>
                  <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    size="small"
                    value={Pilote}
                    onChange={e=>setPilote(e.target.value)} 
                    style={{ width: '95%', backgroundColor: "white" }}
                  />
                </Grid>
                
                <Grid item xs={2}>
                <form >
                    <TextField
                     id="month-year"
                     type="month"
                     value={EcheancePrevue}
                    onChange={e=>setEcheancePrevue(e.target.value)} 
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
                     value={EcheanceEffective}
                    onChange={e=>setEcheanceEffective(e.target.value)} 
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
                 value={Autre}
                 onChange={e=>setAutre(e.target.value)} 
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

<Dialog open={openAlert} onClose={() => setOpenAlert(false)} aria-labelledby="alert-dialog-title">
        <DialogTitle id="alert-dialog-title">Merci</DialogTitle>
        <DialogContent>
          <Typography variant="body1">L'analyse de cette erreur est effectuée avec succès !</Typography>
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