import React from "react"
import { ScreenContainer, LogoImage, Button } from './styled';

export const LoginScreen = () => {
    return (
        <ScreenContainer>
            <LogoImage/>
            <h1>LoginScreen</h1>
            <Button>Não possui conta? Cadastra-se</Button>
        </ScreenContainer>
    )
}

export default LoginScreen