import { FaDivide, FaGithub, FaLine } from "react-icons/fa";
import { TbDivide, TbMinusVertical } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { UserProps } from "../../Types/user";
import { Container } from "./styles";

export function Users({
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
              <p style={{ margin: "4px 0  0 0px" }} className="user-login">
                {" "}
                <FaGithub
                  style={{ margin: "4px 4px  0x 0px", alignItems: "center" }}
                />
                {login}
              </p>
            </span>
          </div>
        </div>
      </div>

      <div>
        <p>{bio}</p>
      </div>
      <div className="user-follo">
        <div>
          <span>Seguidores</span>
          <p>{followers}</p>
        </div>
        <>
          <TbMinusVertical style={{ fontSize: "2rem" }} />
        </>
        <div>
          <span>Seguindo</span>
          <p>{following}</p>
        </div>
      </div>

      <br />
      <NavLink to="/home">
        <button>Ver repositórios</button>
      </NavLink>

      <br />
    </Container>
  );
}
