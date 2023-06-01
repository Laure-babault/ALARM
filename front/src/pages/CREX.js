import React, { useState } from "react";
import AffichageErreurM from "./AffichageErreurM";
import moment from "moment";
import { DataGrid } from '@mui/x-data-grid';
import { Card, Grid } from '@mui/material/';
import { TextField } from '@mui/material/';
import Typography from '@mui/material/Typography';
import { Checkbox } from '@material-ui/core';
import { FormControlLabel } from '@mui/material/';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';

import Carte from '../image/carte.png';
import Calendrier from '../image/calendrier.png';
import Patient from '../image/patient.png';
import Médicament from '../image/medicaments.png';
import Etapes from '../image/etape.png';
import Sante from '../image/sante.png';
import Cartevisite from '../image/cartevisite.png';
import myPdf from '../pdf/patients_risque.pdf';
import myPdf1 from '../pdf/medicaments_risque.pdf';
import myPdf2 from '../pdf/administration_risque.pdf';
function CREX() {
    const [selectedOption, setSelectedOption] = useState('');
    const [Nom, setNom] = useState('');
    const [Prenom, setPrenom] = useState(''); 
    const [Fonction, setFonction] = useState(''); 
    const [openaffichageErreurM, setOpenAffichageErreurM]=useState(false);
    const [idEm, setIdEm] = useState([]);
    const rows = [
      { id: 'static-row', date_evenement: '01/01/2023', Etat: 'Statique', Service: 'Service Statique', Etape: 'Étape Statique', Degré: 'Statique', 'Médicament à risque': 'Statique', 'Nom du médicament': 'Statique', 'Never-event': 'Statique', Description: 'Statique', Impact: 'Statique' },
      // Autres lignes de données...
    ];
    
    const columns = [
      { field: 'id', headerName: 'Id', width: 0, headerClassName: 'header' },
      { field: 'date_evenement', headerName: 'Date', flex: 0.8, headerClassName: 'header', valueFormatter: (params) => moment(params.value).format('DD/MM/YYYY') },
      { field: 'Etat', headerName: 'Etat', flex: 1, headerClassName: 'header' },
      { field: 'Service', headerName: 'Service', flex: 1, headerClassName: 'header' },
      { field: 'Etape', headerName: 'Etape', flex: 1, headerClassName: 'header' },
      { field: 'Degré', headerName: 'Degré', flex: 1, headerClassName: 'header' },
      { field: 'Médicament à risque', headerName: 'Médicament à risque', flex: 1, headerClassName: 'header' },
      { field: 'Nom du médicament', headerName: 'Nom du médicament', flex: 1, headerClassName: 'header' },
      { field: 'Never-event', headerName: 'Never-event', flex: 1, headerClassName: 'header' },
      { field: 'Description', headerName: 'Description', flex: 1, headerClassName: 'header' },
      { field: 'Impact', headerName: 'Impact', flex: 1, headerClassName: 'header' },
    ];
    
    const StaticRow = {
      id: 'static-row',
      date_evenement: '01/01/2023',
      Etat: 'Statique',
      Service: 'Service Statique',
      Etape: 'Étape Statique',
      Degré: 'Statique',
      'Médicament à risque': 'Statique',
      'Nom du médicament': 'Statique',
      'Never-event': 'Statique',
      Description: 'Statique',
      Impact: 'Statique',
    };
    
    const rowsWithStaticRow = [...rows, StaticRow];
  
    const [selectedRow, setSelectedRow] = useState(null);

    const handleRowClick = (params) => {
      setSelectedRow(params.row);
    };
  
    const handleCloseDialog = () => {
      setSelectedRow(null);
    };
    const closeAffichageErreurM=()=>{
        setOpenAffichageErreurM(false);
    }

    const handleChange = (event) => {
      setSelectedOption(event.target.value);};

 
    
    return (
    <div>
        <Box sx={{ textAlign: 'center' }}>
        <h1 >Consulter les erreurs médicamenteuses </h1>
      </Box>
        <div className="Crex">

        <Grid container spacing={2}>
  <Grid item xs={3}>
    <Card style={{ backgroundColor: '#B0E3CA', boxShadow: '5px 5px 5px #5C9077', padding: '20px', height: '200px' }}>
      <Grid container direction="column" spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6"><b>Date</b></Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="date-du"
            label="Du"
            type="date"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            style={{ backgroundColor: 'white', width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="date-au"
            label="Au"
            type="date"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            style={{ backgroundColor: 'white', width: '100%' }}
          />
        </Grid>
      </Grid>
    </Card>
  </Grid>
  <Grid item xs={3}>
    <Card style={{ backgroundColor: '#B0E3CA', boxShadow: '5px 5px 5px #5C9077', padding: '20px', height: '200px' }}>
      <Grid container direction="column" spacing={2}>
        <Grid item xs={4}>
          <Typography variant="h6"><b>Etat</b></Typography>
        </Grid>
        <Grid container direction="column" spacing={2} style={{ marginLeft: '10px' }}>
          <Grid item>
            <FormControlLabel
              control={<Checkbox />}
              label="E : En attente"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={<Checkbox />}
              label="D : Déclaré"
            />
          </Grid>
        </Grid>
      </Grid>
    </Card>
  </Grid>
  <Grid item xs={4}>
    <Card style={{ backgroundColor: '#B0E3CA', boxShadow: '5px 5px 5px #5C9077', padding: '20px', height: '200px' }}>
      <Grid container direction="column" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6"><b>Pôle</b></Typography>
        </Grid>
        <Grid container spacing={2} style={{ marginLeft: '10px' }}>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={<Checkbox />}
              label="Chirurgie"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={<Checkbox />}
              label="Médico-Technique"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={<Checkbox />}
              label="Gérontologie"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={<Checkbox />}
              label="Mère enfant"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={<Checkbox />}
              label="Médecine"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={<Checkbox />}
              label="Plateau technique"
            />
          </Grid>
        </Grid>
      </Grid>
    </Card>
  </Grid>
  <Grid item xs={2}>
    <Card style={{ backgroundColor: '#B0E3CA', boxShadow: '5px 5px 5px #5C9077', padding: '20px', height: '200px' }}>
      <Grid container direction="column" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6"><b>Service</b></Typography>
        </Grid>
        <Grid item xs={12} style={{ marginLeft: '10px' }}>
          <FormControl style={{ width: '100%' }}>
            <Select
              labelId="dropdown-label"
              id="dropdown"
              value={selectedOption}
              onChange={handleChange}
              style={{ backgroundColor: 'white' }}
            >
              <MenuItem value="option1">Departement 1</MenuItem>
              <MenuItem value="option2">Departement 2</MenuItem>
              <MenuItem value="option3">Departement 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Card>
  </Grid>
</Grid>
</div>
<div style={{ height: 400, width: '100%' , marginTop:"20px"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        onRowClick={handleRowClick}
      />








      <Dialog open={selectedRow !== null} onClose={handleCloseDialog} maxWidth="lg" fullWidth  >
        {selectedRow && (
          <div>
            <Grid container spacing={2} >
    <Grid item xs={6}>

    <Card style={{ backgroundColor: '#d6e1d5', boxShadow: '5px 5px 5px #a4bca2', padding: '20px', margin: '9px',  height: 'auto' }}>
    
   
   
   
    <Grid container spacing={2}>
      <Grid item xs={4}>
      <Typography variant="h6"style={{marginBottom:'15px'}}><b>Déclaration anonyme : </b> </Typography>

      </Grid>
      <Grid item xs={4}>
         {/* Affichage */}
      </Grid>
      <Grid item xs={4} >
      <img src={Carte} style={{height:"70px", width:"70px"}}/>
 </Grid>
    </Grid>
   
   
    </Card>    




      <Card style={{ backgroundColor: '#d6e1d5', boxShadow: '5px 5px 5px #a4bca2', padding: '20px', margin: '9px',  height: 'auto'  }}>
   
      <Grid container spacing={2}>
      <Grid item xs={4}>
      <Typography variant="h6"style={{marginBottom:'15px'}}><b>Date de l'événement :</b> </Typography>

      </Grid>
      <Grid item xs={4}>
         {/* Affichage */}
      </Grid>
      <Grid item xs={4} >
      <img src={Calendrier} style={{height:"70px", width:"70px"}}/>
 </Grid>
    </Grid>

    <Grid container spacing={2}>
      <Grid item xs={6}>
      <Typography variant="h6"style={{marginBottom:'15px'}}><b>Déclaration de la déclaration : </b> </Typography>

      </Grid>
      <Grid item xs={4}>
         {/* Affichage */}
      </Grid>
      
    </Grid>

    <Grid container spacing={2}>
      <Grid item xs={4}>
      <Typography variant="h6"style={{marginBottom:'15px'}}><b>Pôle : </b> </Typography>

      </Grid>
      <Grid item xs={4}>
         {/* Affichage */}
      </Grid>
   
    </Grid>


    <Grid container spacing={2}>
      <Grid item xs={4}>
      <Typography variant="h6"style={{marginBottom:'15px'}}><b>Service : </b> </Typography>

      </Grid>
      <Grid item xs={4}>
         {/* Affichage */}
      </Grid>

    </Grid>
    <Grid container spacing={2}>
      <Grid item xs={4}>
      <Typography variant="h6"style={{marginBottom:'15px'}}><b>Service à risque : </b> </Typography>

      </Grid>
      <Grid item xs={4}>
         {/* Affichage */}
      </Grid>

    </Grid>

















    </Card>      
     
      <Card style={{ backgroundColor: '#d6e1d5', boxShadow: '5px 5px 5px #a4bca2', padding: '20px', margin: '9px', height: 'auto' }}>
    

      <Grid container spacing={2}>
      <Grid item xs={4}>
      <Typography variant="h6"style={{marginBottom:'15px'}}><b>Est-ce un never-event ? </b> </Typography>

      </Grid>
      <Grid item xs={4}>
         {/* Affichage */}
      </Grid>
      <Grid item xs={4} >
      <img src={Patient} style={{height:"70px", width:"70px"}}/>
 </Grid>
    </Grid>

    <Grid container spacing={2}>
      <Grid item xs={4}>
      <Typography variant="h6"style={{marginBottom:'15px'}}><b>Le(s) quel(s) ? </b> </Typography>

      </Grid>
      <Grid item xs={4}>
         {/* Affichage */}
      </Grid>
 
    </Grid>

    <Grid container spacing={2}>
      <Grid item xs={5}>
      <Typography variant="h6"style={{marginBottom:'15px'}}><b>S'agit-il d'un patient à risque ?</b> </Typography>

      </Grid>
      <Grid item xs={2}>
         {/* Affichage */}
      </Grid>
      <Grid item xs={5} >

      <Link href={myPdf}>Consulter les catégories du patient à risque</Link>

 </Grid>
    </Grid>





    <Grid container spacing={2}>
      <Grid item xs={5}>
      <Typography variant="h6"style={{marginBottom:'15px'}}><b>Catégorie u patient à risque : </b> </Typography>

      </Grid>
      <Grid item xs={4}>
         {/* Affichage */}
      </Grid>
     
    </Grid>



    <Grid container spacing={2}>
      <Grid item xs={4}>
      <Typography variant="h6"style={{marginBottom:'15px'}}><b>Etat du patient :</b> </Typography>

      </Grid>
      <Grid item xs={4}>
         {/* Affichage */}
      </Grid>
    
    </Grid>






























    </Card>  
    
    
    <Card style={{ backgroundColor: '#f5f5f6', boxShadow: '5px 5px 5px #c1c1c7', padding: '20px', margin: '9px', height: 'auto' }}>



   





    <Grid container spacing={2}>
      <Grid item xs={3}>
      <Typography variant="h6"style={{marginBottom:'15px'}}><b>Nom : </b> </Typography>

      </Grid>
      <Grid item xs={6}>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        style={{ backgroundColor: "white" }}
        value={Nom}
        onChange={e=>setNom(e.target.value)}
        size="small" />
      </Grid>
      <Grid item xs={3} >
      <img src={Cartevisite} style={{height:"100px", width:"100px"}}/>
 </Grid>
    </Grid>
   


    <Grid container spacing={2}>
      <Grid item xs={3}>
      <Typography variant="h6"style={{marginBottom:'15px'}}><b>Prénom: </b> </Typography>

      </Grid>
      <Grid item xs={6}>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        value={Prenom}
        onChange={e=>setPrenom(e.target.value)}
        style={{ backgroundColor: "white" }}
        size="small" />
      </Grid>
  
    </Grid>
   




    <Grid container spacing={2}>
      <Grid item xs={3}>
      <Typography variant="h6"style={{marginBottom:'15px'}}><b>Fonction : </b> </Typography>

      </Grid>
      <Grid item xs={6}>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        value={Fonction}
        onChange={e=>setFonction(e.target.value)}
        style={{ backgroundColor: "white" }}
        size="small" />
      </Grid>

    </Grid>
   





   







 












</Card>  
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
         </Grid>    
 
    <Grid item xs={6}> <Card style={{ backgroundColor: '#d6e1d5', boxShadow: '5px 5px 5px #a4bca2', padding: '20px', margin: '9px', height: 'auto' }}>



    <Grid container spacing={2}>
      <Grid item xs={4}>
      <Typography variant="h6"style={{marginBottom:'15px'}}><b>Nom du médicament: </b> </Typography>

      </Grid>
      <Grid item xs={4}>
         {/* Affichage */}
      </Grid>
  
    </Grid>
   





    <Grid container spacing={2}>
      <Grid item xs={7}>
      <Typography variant="h6"style={{marginBottom:'15px'}}><b>S'agit-il d'un médicament à risque ? </b> </Typography>

      </Grid>
      <Grid item xs={2}>
         {/* Affichage */}
      </Grid>
      <Grid item xs={3} >
      <Link href={myPdf1}>Consulter les catégories du médicament à risque</Link>
 </Grid>
    </Grid>
   


    <Grid container spacing={2}>
      <Grid item xs={6}>
      <Typography variant="h6"style={{marginBottom:'15px'}}><b>Catégorie du médicament à risque : </b> </Typography>

      </Grid>
      <Grid item xs={4}>
         {/* Affichage */}
      </Grid>
      <Grid item xs={2} >
      <img src={Médicament} style={{height:"60px", width:"60px"}}/>
 </Grid>
    </Grid>
   




    <Grid container spacing={2}>
      <Grid item xs={6}>
      <Typography variant="h6"style={{marginBottom:'15px'}}><b>Nom de la voie d'administration : </b> </Typography>

      </Grid>
      <Grid item xs={4}>
         {/* Affichage */}
      </Grid>

    </Grid>
   





    <Grid container spacing={2}>
      <Grid item xs={7}>
      <Typography variant="h6"style={{marginBottom:'15px'}}><b>S'agit-il d'une voie d'administration à risque ?  </b> </Typography>

      </Grid>
      <Grid item xs={2}>
         {/* Affichage */}
      </Grid>
      <Grid item xs={3} >
      <Link href={myPdf2}>Consulter les catégories du médicament à risque</Link>
 </Grid>
    </Grid>
   







    <Grid container spacing={2}>
      <Grid item xs={7}>
      <Typography variant="h6"style={{marginBottom:'15px'}}><b>Catégorie de la voie d'administration à risque : </b> </Typography>

      </Grid>
      <Grid item xs={4}>
         {/* Affichage */}
      </Grid>
   
    </Grid>
   












</Card>  
   
     
      <Card style={{ backgroundColor: '#d6e1d5', boxShadow: '5px 5px 5px #a4bca2', padding: '20px', margin: '9px', height: 'auto' }}>



      <Grid container spacing={2}>
      <Grid item xs={6}>
      <Typography variant="h6"style={{marginBottom:'15px'}}><b>Degré de réalisation : </b> </Typography>

      </Grid>
      <Grid item xs={4}>
         {/* Affichage */}
      </Grid>
      <Grid item xs={2} >
      <img src={Etapes} style={{height:"70px", width:"70px"}}/>
 </Grid>
    </Grid>
   





    <Grid container spacing={2}>
      <Grid item xs={7}>
      <Typography variant="h6"style={{marginBottom:'15px'}}><b>Etape de survenue dans le circuit médicament : </b> </Typography>

      </Grid>
      <Grid item xs={4}>
         {/* Affichage */}
      </Grid>
  
    </Grid>
   




   














    </Card>     
    
      <Card style={{ backgroundColor: '#d6e1d5', boxShadow: '5px 5px 5px #a4bca2', padding: '20px', margin: '9px', height: 'auto' }}>




      <Grid container spacing={2}>
      <Grid item xs={6}>
      <Typography variant="h6"style={{marginBottom:'15px'}}><b>Description : </b> </Typography>

      </Grid>
      <Grid item xs={4}>
         {/* Affichage */}
      </Grid>
      <Grid item xs={2} >
      <img src={Sante} style={{height:"70px", width:"70px"}}/>
 </Grid>
    </Grid>
   









    <Grid container spacing={2}>
      <Grid item xs={6}>
      <Typography variant="h6"style={{marginBottom:'15px'}}><b>Impact : </b> </Typography>

      </Grid>
      <Grid item xs={4}>
         {/* Affichage */}
      </Grid>

    </Grid>


</Card> 
<Card style={{  backgroundColor: '#f5f5f6', boxShadow: '5px 5px 5px #c1c1c7',padding: '60px', margin: '9px', height: '120px' }}>
      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item xs={4}>
          <Typography variant="h7">Valider la déclaration telle qu'elle</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h7">La déclaration est incomplète</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h7">Modifier la déclaration</Typography>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" style={{ backgroundColor: "green", marginTop: "20px", borderRadius: '10px' }} component={Link} to="/SaisieErreur"  >Valider</Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" style={{ backgroundColor: "orange", marginTop: "20px", borderRadius: '10px' }}>Mettre en attente</Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" style={{ backgroundColor: "red", marginTop: "20px", borderRadius: '10px' }}>Modifier</Button>
        </Grid>
      </Grid>
    </Card>














      </Grid>
  </Grid>
          </div>
        )}
      </Dialog>
    </div>
        </div>

        
    );
}

export default CREX;