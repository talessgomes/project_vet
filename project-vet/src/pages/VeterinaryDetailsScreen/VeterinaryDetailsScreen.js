// src/screens/VeterinaryDetailsScreen/VeterinaryDetailsScreen.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    MainContainer, 
    DetailsCard, 
    VetImage, 
    DetailItem, 
    BackButton 
} from './styled'; // Importa suas tags estilizadas

// Dados MOCK (Simulação) para ver o layout renderizar
const mockVetData = {
    id: 1,
    name: "Clínica Pet Feliz",
    address: "Rua das Flores, 123 - Centro",
    phone: "(51) 99876-5432",
    specialty: "Ortopedia e Oftalmologia",
    imageUrl: "https://via.placeholder.com/150/00bfa5/ffffff?text=VET" // Imagem Placeholder
};

const VeterinaryDetailsScreen = () => {
    const navigate = useNavigate();

    const vetDetails = mockVetData; 

    return (
        <MainContainer>
            <BackButton onClick={() => navigate(-1)}>
                Voltar
            </BackButton>
            
            <h1>Detalhes da {vetDetails.name}</h1>
            
            <DetailsCard>
                {/* 1. Imagem e Nome */}
                <VetImage src={vetDetails.imageUrl} alt={`Foto da ${vetDetails.name}`} />
                <h2>{vetDetails.name}</h2>
                
                {/* 2. Informações Detalhadas */}
                <DetailItem>
                    <strong>Endereço:</strong> {vetDetails.address}
                </DetailItem>
                
                <DetailItem>
                    <strong>Telefone:</strong> {vetDetails.phone}
                </DetailItem>
                
                <DetailItem>
                    <strong>Especialidade:</strong> {vetDetails.specialty}
                </DetailItem>

            </DetailsCard>
            
            {/* Outras informações podem vir aqui */}
            
        </MainContainer>
    );
};

export default VeterinaryDetailsScreen;