// src/screens/VeterinarianDashboard/styled.js

import styled from 'styled-components';

export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #e9eff6; 
    padding: 30px 20px;
`;

export const WelcomeHeader = styled.header`
    text-align: center;
    margin-bottom: 30px;
    h1 {
        color: #00bfa5; 
        margin-bottom: 5px;
    }
    p {
        color: #666;
        font-size: 1.1em;
    }
`;

export const ContentGrid = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr; 
    gap: 30px;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 900px) {
        grid-template-columns: 1fr; 
    }
`;

export const Card = styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 25px;
    min-height: 250px;
`;

export const AppointmentItem = styled.div`
    border-bottom: 1px solid #eee;
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:last-child {
        border-bottom: none;
    }

    strong {
        color: #333;
    }
    span {
        color: #00bfa5;
        font-weight: bold;
    }
`;

export const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding: 10px;
    background-color: #f0fdfc;
    border-radius: 5px;
    
    .label {
        font-size: 0.95em;
        color: #555;
    }
    .count {
        font-size: 1.5em;
        font-weight: 700;
        color: #ff6f61; 
    }
`;