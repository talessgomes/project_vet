import React from "react";
import { Routes, Route} from 'react-router-dom';
import LoginScreen from "../pages/LoginScreen/LoginScreen";
import { LoginForm } from "../pages/LoginScreen/LoginForm";
import SignUpScreen from "../pages/SignUpScreen/SignUpScreen";
import VeterinaryDetailsScreen from "../pages/VeterinaryDetailsScreen/VeterinaryDetailsScreen";
import VeterinarianDashboard from "../pages/VeterinarianDashboard/VeterinarianDashboard";

const Router = () => {
 return (
    <Routes>
        <Route path="/" element={<LoginScreen />} />

        <Route path="/cadastro" element={<SignUpScreen />} />

        <Route path="/dashboard" element={<VeterinarianDashboard/>} />

        <Route path="/detalhes" element={<VeterinaryDetailsScreen />} />

        <Route path="*" element={<h1>404 - Página Não Encontrada</h1>}/>
        
    </Routes>
 )
}

export default Router