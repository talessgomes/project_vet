// src/screens/VeterinarianDashboard/VeterinarianDashboard.jsx

import React from 'react';
import { 
    DashboardContainer, 
    WelcomeHeader, 
    ContentGrid, 
    Card, 
    AppointmentItem,
    SummaryItem
} from './styled'; 

// Dados MOCK para preencher a tela
const mockAppointments = [
    { time: "09:00", patient: "Rex (Cachorro)", reason: "Vacinação Anual" },
    { time: "10:30", patient: "Miau (Gato)", reason: "Revisão Pós-Cirurgia" },
    { time: "11:45", patient: "Flash (Coelho)", reason: "Exame de Rotina" },
];

const mockSummary = {
    todayAppointments: 7,
    pendingTasks: 3,
    newClients: 2,
};

const VeterinarianDashboard = () => {
    

    const username = "Dr(a). Isabelly"; 

    return (
        <DashboardContainer>
            <WelcomeHeader>
                <h1>Bem-vindo(a) de volta, {username}! 👋</h1>
                <p>Aqui está o resumo das suas atividades para hoje.</p>
            </WelcomeHeader>

            <ContentGrid>
                {/* Coluna Principal: Próximos Agendamentos */}
                <Card>
                    <h2>Agenda de Hoje</h2>
                    <hr />
                    
                    {mockAppointments.map((app, index) => (
                        <AppointmentItem key={index}>
                            <div>
                                <strong>{app.patient}</strong>
                                <p>{app.reason}</p>
                            </div>
                            <span>{app.time}</span>
                        </AppointmentItem>
                    ))}

                    <p style={{textAlign: 'right', marginTop: '15px', color: '#00bfa5'}}>
                        Ver agenda completa »
                    </p>
                </Card>

                <div>
                    <Card style={{marginBottom: '30px'}}>
                        <h2>Resumo Rápido</h2>
                        <hr />
                        
                        <SummaryItem>
                            <span className="label">Consultas de Hoje:</span>
                            <span className="count">{mockSummary.todayAppointments}</span>
                        </SummaryItem>
                        
                        <SummaryItem>
                            <span className="label">Tarefas Pendentes:</span>
                            <span className="count">{mockSummary.pendingTasks}</span>
                        </SummaryItem>
                        
                        <SummaryItem>
                            <span className="label">Novos Clientes no Mês:</span>
                            <span className="count">{mockSummary.newClients}</span>
                        </SummaryItem>
                    </Card>
                    
                    <Card>
                        <h2>Ações Rápidas</h2>
                        <hr />
                        <button> + Novo Agendamento</button>
                        <button> 📝 Abrir Prontuário</button>
                    </Card>
                </div>
            </ContentGrid>
        </DashboardContainer>
    );
};

export default VeterinarianDashboard;