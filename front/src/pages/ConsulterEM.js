import React from "react";
import { Card, Grid } from '@mui/material/';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Carte from '../image/carte.png';
import Calendrier from '../image/calendrier.png';
import Patient from '../image/patient.png';
import Médicament from '../image/medicaments.png';
import Etapes from '../image/etape.png';
import Sante from '../image/sante.png';
import Cartevisite from '../image/cartevisite.png';
import Button from '@mui/material/Button';
import myPdf from '../pdf/patients_risque.pdf';
import myPdf1 from '../pdf/medicaments_risque.pdf';
import myPdf2 from '../pdf/administration_risque.pdf';
import Link from '@material-ui/core/Link';

function ConsulterEM() {

  return (
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
      <img src={Carte} style={{height:"100px", width:"100px"}}/>
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
      <img src={Calendrier} style={{height:"100px", width:"100px"}}/>
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
      <img src={Patient} style={{height:"100px", width:"100px"}}/>
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
      <img src={Médicament} style={{height:"80px", width:"80px"}}/>
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
      <img src={Etapes} style={{height:"80px", width:"80px"}}/>
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
      <img src={Sante} style={{height:"80px", width:"80px"}}/>
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
          <Button variant="contained" style={{ backgroundColor: "green", marginTop: "20px", borderRadius: '10px' }}>Valider</Button>
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

  );
}

export default ConsulterEM;