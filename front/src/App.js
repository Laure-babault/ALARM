import React from "react";
import TopBar from "./component/TopBar"
import Accueil from "./pages/Accueil";
import Authentification from "./pages/Authentification";
import SaisieErreur from "./pages/SaisieErreur";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CREX from "./pages/CREX";

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
                    <Route path="/Crex" element={<CREX/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;