import React from 'react';
import styled, { css } from 'styled-components';
import TC_background from '../../images/TC_background.jpg';

const ContainerStyle = css`
  background-image: linear-gradient(
      to right top,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.9)
    ),
    url(${TC_background});
  background-size: cover;
  background-position: right;
  height: 100vh;
  position: relative;
  color: white;
  padding: 24px;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 622px) {
    background-position: center;
  }
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 32px;
  margin-top: 100px;

  @media (max-width: 470px) {
    padding-top: 120px;
  }
`;

const Text = styled.span`
  font-weight: bold;
  font-size: 16px;
  margin-top: 20px;
  width: 55%;
`;

const CallStyled = styled.div`
  height: 120px;
  width: 65%;
  border-radius: 16px;
  position: absolute;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 32px;
  font-weight: bold;
  bottom: 48px;
  left: 0;
  transform: translateX(25%);

  @media (max-width: 622px) {
    font-size: 24px;
  }

  @media (max-width: 470px) {
    font-size: 16px;
    bottom: 120px;
  }
`;

const ContainerStyled = styled.div([ContainerStyle]);

const AboutTC = () => {
  return (
    <ContainerStyled>
      <Title>Sobre o CT</Title>
      <Text>
        Aulas no Centro de Treinamento Alonso Stort, atendimento com hora
        marcada, planejamento de treino personalizado, avaliação física, ouvindo
        sua playlist preferida!
      </Text>
      <CallStyled>Venha fazer parte também!</CallStyled>
    </ContainerStyled>
  );
};

export default AboutTC;
