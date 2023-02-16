import styled from "styled-components";

export const Container = styled.div`
  .avatar-url {
    border-radius: 50px;
  }

  .search {
    align-items: center;
    justify-content: center;
    margin: auto;
    max-width: 400px;
  }
`;

export const Card = styled.div`
  display: flex;
  max-width: 400px;
  align-items: center;
  justify-content: center;
  margin: auto;
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  font-family: "Poppins", Helvetica, Arial, serif;
  font-size: 1rem;
  text-align: center;
  gap: 19px;
`;
