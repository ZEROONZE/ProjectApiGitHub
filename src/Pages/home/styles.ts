import styled from "styled-components";

export const Container = styled.div`
  border-radius: 20px;
  height: 100%;
  .avatar-url {
    border-radius: 50px;
  }
  .icon-title-container {
    color: ${(props) => props.theme.colors.warning};
  }
  .title-container {
    margin-top: -1rem;
    z-index: 999999;
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
  height: auto;
  max-height: 100%;
  margin-top: 1rem;
  padding-bottom:1.5rem;
  align-items: center;
  justify-content: center;
  margin: auto;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-family: "Poppins", Helvetica, Arial, serif;
  font-size: 1rem;
  text-align: center;
  gap: 19px;
  
  .button-repo {
    
    justify-content: center;
    margin: auto;
    align-items: center;
    text-align: end;
    width: 50%;
    left:-26%;
    background: ${(props) => props.theme.colors.info};
    color: ${(props) => props.theme.colors.white};
    margin-top: -1rem;

  }
  .card-content {
    border-radius: 20px;
    background: ${(props) => props.theme.colors.primary};
    align-items: center;
    margin: auto;
    flex-direction: columns;
    justify-content: center;
    height: 100%;
    max-height: 100%
    margin-top: 4rem;
    width: 100%;
    .button-container{
      background: ${(props) => props.theme.colors.white};
      margin-bottom: 1rem;
      width: 100%;
  }
  }
  .search-div{
    margin-bottom: 4rem;
  }
 

 
`;
