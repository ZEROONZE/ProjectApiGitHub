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
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .followers-content,
    .following-content {
      width: 45%;

      justify-content: center;
      align-items: center;

      p,
      span {
        justify-content: center;
        align-items: center;
        margin: auto;
        text-align: center;
        width: 50%;
      }
      span {
        color: ${(props) => props.theme.colors.font};
      }
      p {
        padding: 5px 4px;
        align-items: center;
        margin: auto;
        padding: auto;
        border-radius: 5px;

        h5 {
          align-items: center;
          margin: 0;
          padding: auto;
          font-size: 1.2rem;
          color: ${(props) => props.theme.colors.info};
        }
      }
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
