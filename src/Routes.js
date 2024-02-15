import React from "react";
import Portfolio from "./pages/Portfolio";
import Colaboracoes from "./pages/Colaboracoes";
import Sobre from "./pages/Sobre";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Router>
        <Route path="/" element={Portfolio} />
        
            <Route path="/portfolio" element={Portfolio} />
            <Route path="/colaboracoes" element={Colaboracoes} />
            <Route path="/sobre-mim" element={Sobre} />
        </Router>
    );
    }

export default AppRoutes;

