import React from 'react';
import { InputsContainer, TextField, LoginButton } from "./styled"
import useForm from "../../hooks/useForm"

export const LoginForm = () => {
const [form, onChange, clear] = useForm({email: "", password: ""})
    return (
        <InputsContainer>
            <form>
                <TextField 
                type={"email"}
                value={form.email}
                placeholder="E-mail"
                required
                />    
                <TextField
                type={"password"}
                value={form.password}
                placeholder="Senha"
                />  
                
                <LoginButton
                type="submit"
                >
                    Fazer Login
                </LoginButton>
            </form>
            
        </InputsContainer>
    )
}

