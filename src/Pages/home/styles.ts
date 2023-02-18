import styled from "styled-components";

export const Container = styled.div`
  border-radius: 20px;
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
    border-radius: 20px;
  }
`;

export const Card = styled.div`
  margin: 2rem;
  border-radius: 20px;
  max-width: 400px;
  height: 430px;
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
  .button-repo {
    
    justify-content: center;
    margin: auto;
    align-items: center;
    text-align: center;
    width: 50%;
    left:-26%;

    margin-top: -1rem;
  }
  .card-content {
    border-radius: 20px;
    background: ${(props) => props.theme.colors.warning};
    align-items: center;
    margin: auto;
    flex-direction: columns;
    justify-content: center;
    height: 100%;
    max-height: 100%

    width: 100%;
  }

 
`;
