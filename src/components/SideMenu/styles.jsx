import styled from "styled-components";

export const Container = styled.div`
  grid-area: A;

  display: flex;
  flex-direction: column;
  justify-content: normal;
  align-items: center;
  padding: 10px;
  background-color: #1c0c3b;
  color: #fff;

  height: 100vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 16px;
  margin-bottom: 16px;

  cursor: pointer;

  position: relative;

  background-color: #1c0c3b;
  .image {
    width: 48px;
    height: 48px;
  }
`;

export const Footer = styled.div`
  grid-area: I;
  display: flex;
  align-items:center;
  justify-content: center;
  margin-bottom: :
`;
