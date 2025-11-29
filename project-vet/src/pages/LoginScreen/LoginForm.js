import React from 'react';
import { InputsContainer, TextField, LoginButton } from "./styled"
import useForm from "../../hooks/useForm"
import { useNavigate } from 'react-router-dom';
import { goToDetails } from '../../routes/coordinator';

export const LoginForm = () => {

    const navigate = useNavigate();

const [form, onChange, clear] = useForm({email: "", password: ""})
    return (
        <InputsContainer>
            <form>
                <TextField 
                type='email'
                name={"email"}
                value={form.email}
                placeholder="E-mail"
                onChange={onChange}
                required
                />    
                <TextField
                type='password'
                name={"password"}
                value={form.password}
                placeholder="Senha"
                onChange={onChange}
                />  
                <LoginButton
                type="submit"
                onClick={() => goToDetails(navigate)}
                >
                    Fazer Login
                </LoginButton>
            </form>
            
        </InputsContainer>
    )
}

