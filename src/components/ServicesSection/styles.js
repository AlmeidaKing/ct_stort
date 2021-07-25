import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 50px;

  .title {
    width: 90%;
    margin: 120px 0 48px;
    font-size: 20px;
    font-weight: bold;
  }

  .subtitle {
    width: 90%;
    margin-top: 35px;
    font-size: 12px;
  }
`;

export const Table = () => css`
  width: 90%;
  border-collapse: collapse;

  tr {
    border-bottom: 1px solid #ccc;
    text-align: center;
  }

  tr:last-child {
    border-bottom: none;
  }

  th {
    height: 80px;
    width: 50%;
  }

  td {
    height: 50px;
  }
`;
