import React from "react"
import useForm from "../../hooks/useForm"
import { TextField, Button } from "./styled"
import { useNavigate } from "react-router-dom"
import { UseForm } from "../../hooks/useForm"
import { signUp } from "../../services/users"


const SignUpForm = () => {

    const navigate = useNavigate();

    const [form, onChange, clear] = useForm({name: "", email: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, navigate);
    }
    return (
        <form onSubmit={onSubmitForm}>
            <TextField
            type="name"
                value={form.name}
                name={"name"}
                placeholder="Nome"
                onChange={onChange}
                required
            />
            <TextField
            type="email"
                value={form.email}
                name={"email"}
                placeholder="E-mail"
                onChange={onChange}
                required
            />
            <TextField
                value={form.password}
                name={"password"}
                placeholder="Senha"
                onChange={onChange}
                required
            />
            <Button
            type="submit"
            >Fazer Cadastro</Button>
        </form>
    )
}


export default SignUpForm