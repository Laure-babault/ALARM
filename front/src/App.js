import React from "react";
import TopBar from "./component/TopBar"
import Accueil from "./pages/Accueil";
import Authentification from "./pages/Authentification";
import SaisieErreur from "./pages/SaisieErreur";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {


    return (
        <div className="App">
            <TopBar />
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Authentification />}/>
                    <Route path="/" element={<Accueil/>}/>
                    <Route path="/SaisieErreur" element={<SaisieErreur />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;