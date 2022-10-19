import styled, { keyframes } from "styled-components";
const animate = keyframes`

  0% {
    transform: translateX(100px);
    opacity: 0;
}
50%{
    opacity: .3;
}
100%{
    transform: translateX(0px);
    opacity: 1;
}


`;

export const Container = styled.div`
  top: 10px;
  height: 90%;
  width: 100%;
  z-index: 100;
  .alert {
    transition: all 0.5s;
    animation: ${animate} 0.5s;

    font-family: "Montserrat", Helvetica, Arial, serif;
  }
  .ReactFlow {
    z-index: 100;

    top: 40px;
    div label {
      background: gold;
    }
  }

  > input {
    width: 140px;
    padding: 3px 3px;
    display: flex;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    left: 10px;
    position: relative;
  }

  .updatenode__bglabel {
    padding-left: 10px;
    margin-left: 13px;
  }
  .RED {
    color: rgb(255, 255, 255);
    width: 70px;
    height: 20px;
    border-radius: 7px;
    font-weight: bold;
    font-size: 14px;
    align-items: center;
    padding-top: 10px;
    cursor: pointer;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.751);
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: rgb(251, 0, 0);
  }

  .BLACK {
    color: rgb(255, 255, 255);
    width: 70px;
    height: 20px;
    border-radius: 7px;
    font-weight: bold;
    font-size: 14px;
    align-items: center;
    padding-top: 10px;
    cursor: pointer;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.751);
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.751);
  }

  .input-text {
    color: #6e6e6e;
    background: transparent;
    margin: -8px;
    border: none;
    padding: 0px 20px;
    font-weight: 600;
    font-size: 0.8rem;
    font-family: "Montserrat", Helvetica, Arial, serif;
  }
  .input-text2 {
    color: #6e6e6e;
    background: transparent;
    margin-top: -10px;
    margin-left: -3px;
    margin-right: -1px;
    margin-bottom: -10px;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 8.1rem;
    font-weight: 600;
    height: 0.9rem;
    border: none;
    padding: 6.7px 2px;
    font-family: "Montserrat", Helvetica, Arial, serif;
  }
`;
