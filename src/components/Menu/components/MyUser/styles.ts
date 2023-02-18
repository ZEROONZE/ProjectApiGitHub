import styled from "styled-components";

export const SideProfileComponet = styled.div`
  align-items: center;
  justify-content: center;
  align-items: center;
  margin: auto;
  color: ${(props) => props.theme.colors.font};
  padding: 10px;
  .input-search-mui {
    color: #6e6b7b;

    border: 1.5px solid #d8d5de;
    background-color: #fff;
  }
  .sideprofile-icon-email {
    color: ${(props) => props.theme.colors.info};
    padding: 0 5px;
    font-size: 1rem;
    margin-bottom: -3px;
  }
  .sideprofile-email {
    align-items: center;
    justify-content: center;
    align-items: center;
  }
  .content-sideProfile {
    align-items: center;
    justify-content: center;
    align-items: center;
    margin: auto;
    text-align: center;
  }
  .sideProfile-login {
    color: ${(props) => props.theme.colors.info};
  }
  .sideProfile-name {
    color: ${(props) => props.theme.colors.font};
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
`;
