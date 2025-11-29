// src/screens/VeterinaryDetailsScreen/styled.js

import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f8f8f8; /* Fundo leve para destaque */
    min-height: 100vh;
`;

export const DetailsCard = styled.div`
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 30px;
    width: 90%;
    max-width: 600px; /* Limite de largura para leitura */
    margin-top: 20px;
`;

export const VetImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%; /* Imagem redonda */
    object-fit: cover;
    margin-bottom: 20px;
    border: 3px solid #00bfa5; /* Cor de destaque */
`;

export const DetailItem = styled.p`
    font-size: 1.1em;
    color: #333;
    margin: 10px 0;
    border-bottom: 1px solid #eee;
    padding-bottom: 5px;

    /* Estilo para a label dentro do item */
    strong {
        color: #00bfa5; 
        margin-right: 8px;
    }
`;

export const BackButton = styled.button`
    background-color: #ff6f61; /* Cor de ação secundária */
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 20px;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
        background-color: #e55a51;
    }
`;