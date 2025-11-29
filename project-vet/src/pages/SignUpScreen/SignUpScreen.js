import React from "react"
import SignUpForm from "./SignUpForm"
import { ScreenContainer, LogoImage } from "./styled"
import logo from "../../assets/logo.png"

const SignUpScreen = () => {
    return (
        <ScreenContainer>
           <LogoImage src={logo}/>
            <SignUpForm/>
      
        </ScreenContainer>
    )
}

export default SignUpScreen