import styled from "styled-components";

export const Container = styled.div`
  align-items: center;

  margin: auto;
  display: flex;
  width: 100%;
  flex-direction: row;
  .container-users {
    display: flex;
    width: 95%;
    margin: auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  input {
    background: none;
    color: ${(props) => props.theme.colors.white};
    width: 200px;
    border-bottom: 2px ${(props) => props.theme.colors.tertiary} solid;
  }
  label {
    color: ${(props) => props.theme.colors.font};
  }
  input::-webkit-input-placeholder:before {
    border-color: ${(props) => props.theme.colors.tertiary};
    color: ${(props) => props.theme.colors.font};
  }
  .input-search-mui::before {
    border-color: ${(props) => props.theme.colors.tertiary};
    padding: 1rem 0;
  }
  .input-search-mui {
    background: none;
    background: transparent;
    border-color: ${(props) => props.theme.colors.tertiary};
  }
  .MuiInputBase-root {
    background: none;
  }
  .title-container {
    color: ${(props) => props.theme.colors.tertiary};
    font-size: 1rem;
    margin-top: 0.3rem;
  }
  .buttom-search {
    height: 38px;
    width: 42px;
    border-radius: 10px;
    border-color: ${(props) => props.theme.colors.info};
    background: ${(props) => props.theme.colors.warning};
    margin-top: 0.9rem;
    cursor: pointer;
    border: none;
  }
  p {
    font-family: "Poppins";
    font-size: 1rem;
    font-weight: 400;
  }
  .title-search {
    width: 45%;

    p {
      justify-content: start;
      text-align: start;
    }
  }
  .input-search {
    width: 50%;
    flex-direction: row;
    display: flex;
    margin: auto;
  }
  .input-search .input {
    justify-content: end;
    text-align: end;
    width: 100%;
  }

  @media (max-width: 800px) {
    /* input {
    background: none;
    color: ${(props) => props.theme.colors.white};
    width: 200px;
    border-bottom: 2px ${(props) => props.theme.colors.tertiary} solid;
  } */
    .container-users {
      display: flex;
      flex-direction: column;
      margin: auto;
    }
    input {
      margin: auto;
      width: 100%;
      color: #1f1f1f;
      padding-right: 30px;
      border-bottom: 2px ${(props) => props.theme.colors.info} solid;
    }
    .label {
      color: #1f1f1f;
    }
    .title-search {
      width: 100%;
      margin: auto;
      flex-direction: row;
      text-align: center;
      margin-top: 2px;
      margin-bottom: 9px;
      justify-content: center;
    }
    .title-container {
      text-align: center;
      margin: auto;
      justify-content: center;
    }
    .input {
      width: 100%;
      margin: auto;
      padding: auto;
      display: flex;
      background: #fafafa;
      border-radius: 10px;
      flex-direction: row;
    }
    .input-search {
      width: 100%;
      margin: auto;
    }
    .buttom-search {
    }
    .icon-title-container {
      margin-bottom: -1.6px;
    }
  }
`;
