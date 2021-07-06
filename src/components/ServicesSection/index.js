import React from "react";
import styled from "styled-components";

import { Container, Table } from "./styles";

const ServicesSection = () => {
  const TableStyled = styled.table([Table]);

  return (
    <Container>
        <div className="title">Escolha o que mais atende as suas expectativas e seremos muito felizes em atendê-lo</div>
      <TableStyled>
        <tr>
          <th>Presencial</th>
          <th>Online</th>
        </tr>
        <tr>
          <td>Item1</td>
          <td>Item2</td>
        </tr>
        <tr>
          <td>Item1</td>
          <td>Item2</td>
        </tr>
        <tr>
          <td>Item1</td>
          <td>Item2</td>
        </tr>
        <tr>
          <td>Item1</td>
          <td>Item2</td>
        </tr>
        <tr>
          <td>Item1</td>
          <td>Item2</td>
        </tr>
        <tr>
          <td>Item1</td>
          <td>Item2</td>
        </tr>
      </TableStyled>
      <div className="subtitle">plastic truth matter birth noon hole gray pool brother nearly just metal sure gone rather independent driver mother citizen shape wool aware reason prize</div>
    </Container>
  );
};

export default ServicesSection;
