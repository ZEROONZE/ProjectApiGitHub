import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  .avatar-url {
    border-radius: 50px;
  }

  .container {
    background: ${(props) => props.theme.colors.secondary};
    width: 100%;
    height: calc(100vh - 10rem);
    max-height: calc(100vh - 10rem);
    align-items: center;
    margin: auto;
    border-radius: 10px;
  }
`;

export const Card = styled.div`
  margin: 2rem;
  border-radius: 10px;
  display: flex;
  max-width: 400px;
  height: 400px;
  max-height: 100%;
  align-items: center;
  justify-content: center;
  margin: auto;
  background: ${(props) => props.theme.colors.warning};
  color: ${(props) => props.theme.colors.white};
  font-family: "Poppins", Helvetica, Arial, serif;
  font-size: 1rem;
  text-align: center;
  gap: 19px;
`;
