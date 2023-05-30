import { Dialog, DialogContent } from "@mui/material";
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

function CREX() {
    const [selectedOption, setSelectedOption] = useState('');

    const [rows,setRows]=useState([]);
    const [openaffichageErreurM, setOpenAffichageErreurM]=useState(false);
    const [idEm, setIdEm] = useState([]);
    
    const handleRowClick =(params)=>{
        setIdEm(params.row.id);
        setOpenAffichageErreurM(true);
    }

    const closeAffichageErreurM=()=>{
        setOpenAffichageErreurM(false);
    }

    const handleChange = (event) => {
      setSelectedOption(event.target.value);};

      const handleConsulter = (row) => {
        // Logique pour gérer le clic sur le bouton "Consulter" avec les données de la ligne correspondante
        console.log('Consulter row:', row);
      };
    
    return (
    <div>
        <Box sx={{ textAlign: 'center' }}>
        <h1 >Consulter les erreurs médicamenteuses </h1>
      </Box>
        <div className="Crex">

<Grid container spacing={2}>
  <Grid item xs={3}>
    <Card style={{ backgroundColor: '#B0E3CA ', boxShadow: '5px 5px 5px #5C9077 ', padding: '20px',  margin:"9px", height:"180px"}}>
    
    <Grid container direction="column" spacing={2}>
    
        <Grid item xs={4}>
        <Typography variant="h6"><b>Date</b> </Typography>
        </Grid>
    <Grid item style={{marginLeft:'10px'}}>
      <TextField
        id="date-du"
        label="Du"
        type="date"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        style={{backgroundColor:'white'}}
      />
    </Grid>
    <Grid item style={{marginLeft:'10px'}}>
      <TextField
        id="date-au"
        label="Au"
        type="date"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
          
        }}
        style={{backgroundColor:'white'}}
      />
    </Grid>
  </Grid>
  
     </Card >
  </Grid>
  <Grid item xs={3}>
    <Card style={{ backgroundColor: '#B0E3CA ', boxShadow: '5px 5px 5px #5C9077 ', padding: '20px',  margin:"9px", height:"180px" }}>
    <Grid container direction="column" spacing={2}>
    
    <Grid item xs={4}>
    <Typography variant="h6"><b>Etat</b> </Typography>
    </Grid>
    <Grid container direction="column" spacing={2} style={{marginLeft:'10px'}}>
  <Grid item>
    <FormControlLabel
      control={<Checkbox />}
      label="E : En attente"
    />
  </Grid>
  <Grid item>
    <FormControlLabel
      control={<Checkbox />}
      label="D : Déclaré "
    />
  </Grid>
</Grid>
</Grid>    </Card>
  </Grid>
  <Grid item xs={4}>
    <Card  style={{ backgroundColor: '#B0E3CA ', boxShadow: '5px 5px 5px #5C9077 ', padding: '20px' , margin:"9px", height:"180px"}}>
    <Grid container direction="column" spacing={2}>
    
    <Grid item xs={4}>
    <Typography variant="h6"><b>Pôle</b> </Typography>
    </Grid>
    <Grid container spacing={2} style={{marginLeft:'10px'}}>
  <Grid item xs={6}>
    <FormControlLabel
      control={<Checkbox />}
      label="Chirurgie"
    />
  </Grid>
  <Grid item xs={6}>
    <FormControlLabel
      control={<Checkbox />}
      label="Médico-Technique"
    />
  </Grid>
  <Grid item xs={6}>
    <FormControlLabel
      control={<Checkbox />}
      label="Gérontologie"
    />
  </Grid>
  <Grid item xs={6}>
    <FormControlLabel
      control={<Checkbox />}
      label="Mère enfant"
    />
  </Grid>
  <Grid item xs={6}>
    <FormControlLabel
      control={<Checkbox />}
      label="Médecine"
    />
  </Grid>
  <Grid item xs={6}>
    <FormControlLabel
      control={<Checkbox />}
      label="Plateau technique"
  
    />
  </Grid>
</Grid>

</Grid>      </Card>
  </Grid>
  <Grid item xs={2}>
    <Card style={{ backgroundColor: '#B0E3CA ', boxShadow: '5px 5px 5px #5C9077 ', padding: '20px' , margin:"9px", height:"180px"}}>
    <Grid container direction="column" spacing={2}>
    
    <Grid item xs={4}>
    <Typography variant="h6"><b>Service</b> </Typography>
    </Grid>
   
    
    <FormControl>
      <Select
        labelId="dropdown-label"
        id="dropdown"
        value={selectedOption}
        onChange={handleChange}
        style={{backgroundColor:'white',marginLeft:'10px'}}

      >
        <MenuItem style={{display:'block'}} value="option1">Departement 1</MenuItem>
        <MenuItem style={{display:'block'}} value="option2">Departement 2</MenuItem>
        <MenuItem style={{display:'block'}} value="option3">Departement 3</MenuItem>
      </Select>
    </FormControl>
</Grid>      </Card>
  </Grid>
</Grid>
</div>


            <Dialog open={openaffichageErreurM}
            onClose={closeAffichageErreurM}>
                <DialogContent>
                    <AffichageErreurM idEm ={idEm}/>
                </DialogContent>
            </Dialog>
            <DataGrid
            sx={{margin:'10px','&header':{backgroundColor:'#7DC4B2'}}}
            columns={[{field:'id',headerName:'Id',width:0, headerClassName:'header'},
            {field:'date_evenement',valueFormatter:(params)=>{return moment(params.value).format('DD/MM/YYYY');},headerName:'Date',flex:0.80, headerClassName:'header'},
            {field:'Etat',headerName:'Etat',flex:1, headerClassName:'header'},
            {field:'Service',headerName:'Service',flex:1, headerClassName:'header'},
            {field:'Etape',headerName:'Etape',flex:1, headerClassName:'header'},
            {field:'Degré',headerName:'Degré',flex:1, headerClassName:'header'},
            {field:'Médicament à risque',headerName:'Médicament à risque',flex:1, headerClassName:'header'},
            {field:'Nom du médicament',headerName:'Nom du médicament',flex:1, headerClassName:'header'},
            {field:'Never-event',headerName:'Never-event',flex:1, headerClassName:'header'},
            {field:'Description',headerName:'Description',flex:1, headerClassName:'header'},
            {field:'Impact',headerName:'Impact',flex:1, headerClassName:'header'},
            {
                field: 'Consulter',
                headerName: 'Consulter',
                flex: 1,
                headerClassName: 'Consulter',
             
              },
          
            
        ]}
            pageSize={[11]}            
            rowsPerPageOptions={[11]}
            rows={rows}
            columnVisibilityModel={{id:false}}
            onRowClick = {handleRowClick}
           
            /> 
    <Button component={Link} to="/ConsulterEM" variant="contained" color="primary" >
              Consulter
            </Button>
        </div>

        
    );
}

export default CREX;