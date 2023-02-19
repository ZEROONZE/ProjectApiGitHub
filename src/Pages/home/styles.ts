import styled, { keyframes } from "styled-components";
const moveToRight = keyframes`
0% {
 
  opacity: 0;
}
50%{
  opacity: 0;

}
100%{
  transition: opacity 3s linear 3s;
  opacity: 1;
}
  `;
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
  .slack-mui {
    animation: ${moveToRight} 0.6s;
  }
  .pagination-repo {
    animation: ${moveToRight} 0.6s;
  }
  .react-modal {
    .tbody-container {
      max-height: 54vh;
      height: 54vh;
      border-top: 2px #f2f2f2 solid;
      width: 98.3%;
      margin: 10px;
      animation: ${moveToRight} 0.6s;
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
    height: 80%;
    align-items: center;
    margin: auto;
  }
  .modal-content {
    animation: ${moveToRight} 0.6s;
  }
`;

export const Card = styled.div`
  margin: auto;
  border-radius: 20px;
  max-width: 400px;
  height: auto;
  max-height: 90%;
  animation: ${moveToRight} 0.6s;
  padding-bottom:1.5rem;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  font-family: "Poppins", Helvetica, Arial, serif;
  font-size: 1rem;
  text-align: center;
  gap: 19px;
  
  .button-repo {
    animation: ${moveToRight} 0.6s;
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
    :hover{
      background: #4e08aa;
    }
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
    animation: ${moveToRight} 0.6s;
    width: 100%;
    padding-bottom:2rem;
    .button-container{
      background: ${(props) => props.theme.colors.white};
      margin-bottom: 1rem;
      width: 100%;
  }
  }
  .search-div{
    margin-bottom: 4rem;
  }
 
  @media (max-width: 800px) {
    margin: 7px;
  .button-repo{
    width:70%;
    justify-content: center;
    margin: auto;
    margin-right:-1.3rem;
    margin-top:1rem;
    align-items: center;
  }
  .card-content .button-container{
    width:100%;
    margin-top:10px;
    justify-content: center;
    margin: auto;
    align-items: center;
    background:red;
  }
  
  }
`;
