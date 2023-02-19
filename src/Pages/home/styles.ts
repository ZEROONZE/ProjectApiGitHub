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
    height: calc(100vh - 5rem);
    max-height: calc(100vh - 5rem);
    align-items: center;
    margin: auto;
    border-radius: 20px;
  }

  /* modal */
  .MuiTable-root {
    max-height: 50vh;
    height: 50vh;
    overflow-x: hidden;
  }
  .MuiTableBody-root {
    overflow-y: auto;
  }
  .react-modal {
    .tbody-container {
      max-height: 54vh;
      height: 54vh;
      border-top: 2px #f2f2f2 solid;
      width: 98.3%;
      margin: 10px;
      overflow-y: auto;
      overflow-y: auto;
      background: red;
      ::-webkit-scrollbar {
        width: 10px;
      }
      ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #00000001;
      }
      ::-webkit-scrollbar-track {
        background-color: red;
      }
    }
  }

  .tabela-1 {
    background: #197781;
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #00000001;
    }
    ::-webkit-scrollbar-track {
      background-color: #fff;
    }
  }
  .card-body-user {
    height: 89%;
    align-items: center;
    margin: auto;
  }
`;

export const Card = styled.div`
  margin: auto;
  border-radius: 20px;
  max-width: 400px;
  height: auto;
  max-height: 90%;

  padding-bottom:1.5rem;
  align-items: center;
  justify-content: center;

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
    margin-bottom: 1rem;
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
