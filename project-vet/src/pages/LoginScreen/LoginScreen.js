import React from "react"
import { useNavigate } from 'react-router-dom';
import { ScreenContainer, LogoImage, Button } from './styled';
import { goToSignUp } from "../../routes/coordinator";
import logo from "../../assets/logo.png"
import { LoginForm } from "./LoginForm";

export const LoginScreen = () => {

    const navigate = useNavigate();

    return (

        <ScreenContainer>
            <LogoImage src={logo}/>
            <h1>CliniVet</h1>
            <LoginForm/>

            <Button onClick={() => goToSignUp(navigate)}>Não possui conta? Cadastra-se</Button>
        </ScreenContainer>
    )
}

export default LoginScreen