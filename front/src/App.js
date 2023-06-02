import React from "react";
import TopBar from "./component/TopBar"
import Accueil from "./pages/Accueil";
import Authentification from "./pages/Authentification";
import SaisieErreur from "./pages/SaisieErreur";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CREX from "./pages/CREX";
import Archive from "./pages/Archive";
import DeclarerEM from "./pages/DeclarerEM";
import ConsultationAction from "./pages/ConsultationAction";
import ConsulterEM from "./pages/ConsulterEM.js";
import Dashboard from "./pages/Dashboard.js";
//couleur vert  	#7DC4B2
// couleur gris 	#506C7A

function App() {


    return (
        <div className="App">

            <BrowserRouter>
                <TopBar />
                <Routes>
                    <Route path="/Authentification" element={<Authentification />} />
                    <Route path="/" element={<Accueil />} />
                    <Route path="/SaisieErreur" element={<SaisieErreur />} />
                    <Route path="/DeclarerEM" element={<DeclarerEM />} />

                    <Route path="/Crex" element={<CREX/>} />
                    <Route path="/Archive" element={<Archive/>} />
                    <Route path="/ConsultationAction" element={<ConsultationAction/>} />
                    <Route path="/ConsulterEM" element={<ConsulterEM/>} />
                    <Route path="/Dashboard" element={<Dashboard/>} />

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;