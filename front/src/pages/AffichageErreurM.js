import React, { useEffect, useState } from "react";
import axios from "axios";

function AffichageErreurM(params) {

    const idEm=params.idEm;
    const [emCible, setEmCible]=useState([]);

    useEffect(()=>{
        axios
        .get("http://localhost:8080/emById/"+ idEm)
        .then((res)=> setEmCible(res.data));
    },[idEm])

    return (
        <div className="affichageErreurM">


        </div>
    );
}

export default AffichageErreurM;