import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: flex-start;
  padding: 24px;

  .title {
    margin: 100px 0 48px;
    font-size: 20px;
    font-weight: bold;
  }

  .subtitle {
    width: 90%;
    margin-top: 56px;
    font-size: 12px;
  }

  .table-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Table = () => css`
  width: 100%;
  border-collapse: collapse;

  tr {
    border-bottom: 1px solid #ccc;
    text-align: center;
  }

  th {
    height: 80px;
    width: 50%;
    font-size: 18px;
  }

  td {
    font-size: 16px;
    height: 50px;
    vertical-align: middle;
  }
`;
