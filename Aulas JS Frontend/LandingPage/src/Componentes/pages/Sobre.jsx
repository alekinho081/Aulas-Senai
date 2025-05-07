import React from "react";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Sobre = () => {
  return (
    <section style={{ padding: '2rem' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 4 }}>
        Sobre
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <Card
          variant="outlined"
          sx={{
            flex: '1 1 300px',
            maxWidth: 500,
            minHeight: 350,
            display: 'flex',
            flexDirection: 'column',
            padding: 2,
          }}
        >
          <Typography variant="h6">Motivação</Typography>
          <Typography variant="body2" sx={{ textAlign: 'left' }}>
            A realização deste projeto surgiu da necessidade de aplicar, na prática, os conhecimentos adquiridos ao longo do curso na área de desenvolvimento de sistemas, além de simular um cenário realista de mercado.
            O objetivo foi criar uma solução que centralizasse as informações da empresa, facilitasse o acompanhamento do estoque em tempo real e proporcionasse uma visão clara e estratégica por meio de um dashboard.
            Essa abordagem não só reforçou o aprendizado técnico — como a criação de interfaces, manipulação de dados e lógica de programação —, mas também promoveu o desenvolvimento de habilidades importantes como planejamento, organização de funcionalidades e foco na experiência do usuário.
          </Typography>
        </Card>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: '1 1 300px', maxWidth: 500 }}>
          <Card
            variant="outlined"
            sx={{
              minHeight: 175,
              display: 'flex',
              flexDirection: 'column',
              padding: 2,
            }}
          >
            <Typography variant="h6">Desenvolvedores</Typography>
            <Typography variant="body2">Turma DESI/Vesp</Typography>
            <Typography variant="body2">Alex Sandro de Borba Junior</Typography>
            <Typography variant="body2">Gabriel Lino Vasconcellos dos Santos</Typography>
          </Card>

          <Card
            variant="outlined"
            sx={{
              minHeight: 175,
              display: 'flex',
              flexDirection: 'column',
              padding: 2,
            }}
          >
            <Typography variant="h6">Tecnologias Utilizadas</Typography>
            <Typography variant="body2">PostgreSQL</Typography>
            <Typography variant="body2">Flutter/Dart</Typography>
            <Typography variant="body2">MockFlow</Typography>
          </Card>
        </Box>
      </Box>
    </section>
  );
};
