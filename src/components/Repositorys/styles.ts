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
  padding: 1rem;
  display: flex;
  background: ${(props) => props.theme.colors.info};
  width: 400px;
  animation: ${moveToRight} 0.6s;
  height: 400px;
  .user-login {
    color: ${(props) => props.theme.colors.gray};
    align-items: center;
    gap: 10px;
  }
  .user-follo {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      background: ${(props) => props.theme.colors.info};
      border-radius: 10px;
    }
  }
  .user-photo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .photo {
      padding-right: 1rem;
    }
  }
  .user-names {
    justify-content: start;
    text-align: start;
    align-items: center;
    .users-name-login {
      padding-left: 1rem;
    }
  }
`;
