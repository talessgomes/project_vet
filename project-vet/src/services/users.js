/* import axios from "axios";
import { BASE_URL } from "../constans/urls"; 

export const signUp = (body, clear, navigate) => {
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        navigate("/")
    })
    .catch((err) => {
        console.log(err.response.data);
        alert(err.response.data.message || "Erro no cadastro.");
    })
}

console.log("usuário: ", signUp); */

// src/services/users.js (Versão MOCK/SIMULAÇÃO)

// IMPORTANTE: Não precisa do axios quando estamos simulando!
// import axios from "axios"; 
// import { BASE_URL } from "../constans/urls";

// Se você tiver um arquivo para simulação (ex: data.json), pode importar aqui.
const mockResponse = { 
    token: "TOKEN_SIMULADO_12345",
    user: { id: 1, name: "Tales" }
};

// 🚨 Altere a função signUp para retornar uma Promise
export const signUp = (body, clear, navigate) => {

    new Promise((resolve, reject) => {
        
        setTimeout(() => {
            
            if (body.email === 'erro@mock.com') {
                 reject({ 
                    response: { data: { message: "Simulação de erro: Email já cadastrado." } }
                 });
            } else {

                 resolve({ data: mockResponse });
            }
        }, 1500); 
    })
    .then((res) => {
        console.log("MOCK SUCESSO: Usuário cadastrado!", res.data);
        localStorage.setItem("token", res.data.token);
        clear();
        navigate("/");
    })
    .catch((err) => {
        if (err.response) {
            console.log(err.response.data);
            alert(err.response.data.message);
        } else {
            console.log("Erro de conexão (MOCK):", err.message);
            alert("Erro de conexão simulado.");
        }
    });
};