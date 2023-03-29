import { Dialog, DialogContent } from "@mui/material";
import React, { useState } from "react";
import moment from "moment";
import { DataGrid } from '@mui/x-data-grid';

function Archive() {

    const [rows,setRows]=useState([]);
    const [openAffCrexarch, setopenAffCrexarch]=useState(false);
    const [idCrex, setidCrex] = useState([]);
    
    const handleRowClick =(params)=>{
        setidCrex(params.row.id);
        setopenAffCrexarch(true);
    }

    const closeAffCrexArch=()=>{
        setopenAffCrexarch(false);
    }

    return (
        <div className="Archive">
            Il faut reprendre encore le tableau 
            <Dialog open={openAffCrexarch}
            onClose={closeAffCrexArch}>
                <DialogContent>
                 ici mettre les em du Crex
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

export default Archive;