import { Dialog, DialogContent } from "@mui/material";
import React, { useState } from "react";
import AffichageErreurM from "./AffichageErreurM";
import moment from "moment";
import { DataGrid } from '@mui/x-data-grid';


function CREX() {

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
        <div className="Crex">
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
            {field:'neverEvent',headerName:'Never Event',flex:1, headerClassName:'header'},
            {field:'patientRisque',headerName:'Patient à Risque',flex:1, headerClassName:'header'},
            {field:'medicamentRisque',headerName:'Médicament à Risque',flex:1, headerClassName:'header'},
            {field:'voieAdmRisque',headerName:'Voie admission à Risque',flex:1, headerClassName:'header'},
            {field:'statutEm',headerName:'Statut de la déclaration',flex:1, headerClassName:'header'},
        ]}
            pageSize={[5]}            
            rowsPerPageOptions={[5]}
            rows={rows}
            columnVisibilityModel={{id:false}}
            onRowClick = {handleRowClick}
            />
        </div>
    );
}

export default CREX;