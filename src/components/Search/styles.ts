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
    width: 250px;

    height: 30px;
    border-radius: 10px;
  }
  button {
    height: 40px;
    margin: 0;
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
`;
