import { Dialog, DialogContent } from "@mui/material";
import React, { useState } from "react";
import AffichageErreurM from "./AffichageErreurM";
import moment from "moment";
import { DataGrid } from '@mui/x-data-grid';
import { Card, Grid } from '@mui/material/';
import { TextField } from '@mui/material/';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import { Button } from '@mui/material';

function ConsultationAction() {
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

    return (
    <div>
        <Box sx={{ textAlign: 'center' }}>
        <h1 >Consulter des actions mises en place </h1>
      </Box>
        <div className="Crex">

<Grid container spacing={2}>
  <Grid item xs={12}>
    <Card style={{ backgroundColor: '#B0E3CA ', boxShadow: '5px 5px 5px #5C9077 ', padding: '20px',  margin:"9px", height:"90px"}}>
    

    
        <Grid item xs={12}>
        <Typography variant="h6"style={{marginBottom:'15px'}}><b>Choisir une période </b> </Typography>
        </Grid>
        <Grid container spacing={2}>
  <Grid item xs={4}>
    <TextField
      id="date-du"
      label="Du"
      type="date"
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
      style={{ backgroundColor: 'white'}}
    />
  </Grid>
  <Grid item xs={4}>
    <TextField
      id="date-au"
      label="Au"
      type="date"
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
      style={{ backgroundColor: 'white'}}
    />
  </Grid>
  <Grid item xs={4}>
  <Button variant="contained" style={{marginTop:'10px', backgroundColor:'#5C9077'}}>
      Rechercher
    </Button>
  </Grid>
</Grid>
  
     </Card >
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
            {field:'Cause latente',headerName:'Cause latente',flex:1, headerClassName:'header'},
            {field:'Action corrective',headerName:'Action corrective',flex:1, headerClassName:'header'},
            {field:'Action préventive',headerName:'Action préventive',flex:1, headerClassName:'header'},
            {field:'Effet attendu',headerName:'Effet attendu',flex:1, headerClassName:'header'},
            {field:'Echéance prévue',headerName:'Echéance prévue',flex:1, headerClassName:'header'},
            {field:'Echéance effective',headerName:'Echéance effective',flex:1, headerClassName:'header'},

        ]}
            pageSize={[6]}            
            rowsPerPageOptions={[6]}
            rows={rows}
            columnVisibilityModel={{id:false}}
            onRowClick = {handleRowClick}
            />

        </div>
    );
}

export default ConsultationAction;