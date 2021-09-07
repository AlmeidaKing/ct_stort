import React from 'react';
import styled from 'styled-components';

import { Container, Table } from './styles';

const ServicesSection = () => {
  const TableStyled = styled.table([Table]);

  return (
    <Container>
      <div className="title">
        Escolha o que mais atende as suas expectativas e seremos muito felizes
        em atendê-lo
      </div>
      <div className="table-container">
        <TableStyled>
          <tr>
            <th>Presencial</th>
            <th>Online</th>
          </tr>
          <tr>
            <td>Treino Personalizado</td>
            <td>Treino Personalizado</td>
          </tr>
          <tr>
            <td>Suporte via WhatsApp</td>
            <td>Suporte via WhatsApp</td>
          </tr>
          <tr>
            <td>Treino novo de acordo com a evolução do aluno</td>
            <td>Treino novo de acordo com a evolução do aluno</td>
          </tr>
          <tr>
            <td>Orientação em tempo real</td>
            <td>Envio de vídeos com orientações</td>
          </tr>
          <tr>
            <td />
            <td>Treino no Aplicativo</td>
          </tr>
        </TableStyled>
      </div>

      <div className="subtitle">
        plastic truth matter birth noon hole gray pool brother nearly just metal
        sure gone rather independent driver mother citizen shape wool aware
        reason prize
      </div>
    </Container>
  );
};

export default ServicesSection;
