import { Dialog, DialogContent } from "@mui/material";
import React, { useState } from "react";
import AffichageErreurM from "./AffichageErreurM";

function CREX() {

    const [rows,setRows]=useState([]);
    const [openaffichageErreurM, setOpenAffichageErreurM]=useState(false);
    const [idEm, setIdEm] = useState([]);
    const [emCible,setEmCible] = useState([]);
    
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
                    <AffichageErreurM idEm ={idEm} emCible={emCible}/>
                </DialogContent>
            </Dialog>
            <DataGrid
            sx={{margin:'10px','&header':{backgroundColor:'#7DC4B2'}}}
            columns={[{field:'',headerName:'',width:0, headerClassName:'header'},
            
            ]}
            pageSize={[5]}
            rows={rows}
            rowsPerPageOptions={[5]}
            onRowClick = {handleRowClick}
            />
        </div>
    );
}

export default CREX;