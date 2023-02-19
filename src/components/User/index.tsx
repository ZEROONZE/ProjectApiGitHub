import { FaGithub } from "react-icons/fa";
import { UserProps } from "../../Types/user";
import { Container } from "./styles";

export function Users({
  id,
  login,
  name,
  bio,
  avatar_url,
  followers,
  following,
}: UserProps) {
  return (
    <Container>
      <div>
        <div className="user-photo">
          <div className="photo">
            <img
              src={avatar_url}
              alt={login}
              width="100px"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="users-name-login">
            <span className="user-names">
              <h3 style={{ margin: "4px 0 -10px" }} className="user-name">
                {name}
              </h3>
              <p
                style={{
                  marginTop: "5px",
                  alignItems: "center",
                }}
                className="user-login"
              >
                {"  "}
                <FaGithub
                  style={{
                    marginTop: "12px, 2px",
                    paddingRight: "8px",
                    marginBottom: "-3px",
                    alignItems: "center",
                  }}
                />
                {login}
              </p>
            </span>
          </div>
        </div>
      </div>

      <div className="user-bio">
        <p>{bio}</p>
      </div>
      <div className="user-follo">
        <div className="followers-content">
          <p>
            <h5>{followers}</h5>
          </p>
          <span>Seguidores</span>
        </div>
        <></>
        <div className="following-content">
          <p>
            <h5>{following}</h5>
          </p>
          <span>Seguindo</span>
        </div>
      </div>
    </Container>
  );
}
