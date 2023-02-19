import { Link } from "react-router-dom";
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

export const Conainter = styled.div`
  text-decoration: none;
  margin-top: -4.26rem;
  color: #ccc;
  display: flex;
  color: ${(props) => props.theme.colors.font};
  background: ${(props) => props.theme.colors.primary};
  z-index: 9;
  border-top-right-radius: 20px;
  main {
    width: 100%;
    padding: 68px 20px 20px;
    color: #ccc;
  }

  .slider {
    background: ${(props) => props.theme.colors.secondary};
    color: #ccc;
    height: 100vh;
    width: 15rem;
    transition: all 0.5s;
    z-index: 9;
    border-top-right-radius: 40px;
  }

  .top_section {
    display: flex;
    margin-bottom: 1.9rem;
    align-items: center;
    justify-content: center;
    align-items: center;
    padding: 1.4rem 1rem;
    border-bottom: 1px #babfc7 solid;
    border-top-right-radius: 40px;
    h1 {
      font-size: 1rem;
    }
  }

  .bars {
    cursor: pointer;
    display: flex;
    font-size: 1.5rem;
    margin-left: 9.3rem;
    padding-top: 1.6rem;
  }
`;

export const SideProfile = styled.div``;
