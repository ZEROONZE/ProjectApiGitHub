import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  overflow-x: auto;
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
