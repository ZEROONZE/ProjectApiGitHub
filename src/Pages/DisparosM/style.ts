import styled from "styled-components";

export const Container = styled.div`
  .form {
    width: 400px;
    background-color: ${(props) => props.theme.colors.secondary};
    padding: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 0.4rem;
    font-family: Poppins, sans-serif;
  }

  .form-two {
    width: 400px;
    background-color: ${(props) => props.theme.colors.secondary};
    padding: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 0.4rem;
    font-family: Poppins, sans-serif;
    margin-top: 40px;
  }

  .form,
  h2 {
    font-family: Poppins, sans-serif;
    font-size: 1.1rem;
    font-weight: 100;

    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .buttom {
    width: 20rem;
    height: 2.75rem;
    font-size: 16px;
    font-weight: 500;
    color: rgb(255, 255, 255);
    outline: none;
    border-radius: 0.4rem;
    padding: 0.7rem 2.5rem;
    transition: all 0.2s ease 0s;
    cursor: pointer;
    background: rgb(23, 151, 136);
    border: 1px solid rgb(4, 170, 109);
    margin-bottom: 15px;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 1rem;
  }
  .buttom:hover {
    width: 20rem;
    transform: (1.05);
    background: rgb(23, 151, 136);
    transition: 0.3s;
    color: black;
    padding: 0.7rem 2.5rem;
    border: 1px solid #197781;
  }
  .titulo-two {
    margin-bottom: 20px;
    font-size: 1.5rem;
    border-radius: 10px;
  }
  .titulo-tree {
    border-top: 4px solid #197781;
    width: 3%;
    margin-top: -20px;
    margin-bottom: 30px;
  }

  .text {
    height: 3.75rem;
    width: 350px;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 0.4rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 1rem;
    font-family: Poppins, sans-serif;
  }
  .text-two {
    height: 2.75rem;
    width: 350px;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 0.4rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 1rem;
    font-family: Poppins, sans-serif;
  }
`;

export const Content = styled.div``;
export const HistoryFinanceCard = styled.div``;

export const Filters = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  .tag-filter {
    font-size: 18px;
    font-weight: 500;
    background: none;
    color: ${(props) => props.theme.colors.white};
    margin: 0 10px;
    transition: opacity 0.3s;
    border-radius: 6px;
    opacity: 0.3;
    &:hover {
      opacity: 0.7;
    }

    > SelecInput {
      background-color: #000;
    }
  }

  .tag-filter-red::after {
    content: "";
    display: flex;
    width: 55px;
    margin: 0 auto;
    border-bottom: 10px solid red;
    border-radius: 5px;
  }
  .tag-filter-black::after {
    content: "";
    display: flex;
    width: 55px;
    margin: 0 auto;
    border-bottom: 10px solid black;
    border-radius: 5px;
  }
  .tag-filter-white::after {
    content: "";
    display: flex;
    width: 55px;
    margin: 0 auto;
    border-bottom: 10px solid white;
    border-radius: 5px;
  }
  .tag-actived {
    opacity: 1;
  }
`;
