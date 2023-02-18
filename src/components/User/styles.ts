import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  border-radius: 10px;
  flex-direction: columns;
  width: 90%;
  height: auto;
  margin: auto;
  .user-login {
    color: ${(props) => props.theme.colors.gray};
    align-items: center;
    gap: 10px;
  }
  .user-follo {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      background: ${(props) => props.theme.colors.info};
      border-radius: 10px;
    }
  }
  .user-photo {
    width: 90%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .photo {
      padding-right: 1rem;
    }
  }
  .user-names {
    width: 90%;
    justify-content: start;
    text-align: start;
    align-items: center;
    .users-name-login {
      padding-left: 1rem;
    }
  }
  .user-bio {
  }
`;
