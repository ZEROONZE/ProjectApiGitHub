import { FaDivide, FaGithub, FaLine } from "react-icons/fa";
import { TbDivide, TbMinusVertical } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { RepoProps, UserProps } from "../../Types/user";
import { Container } from "./styles";

export function Repositorys({ id, name, description }: RepoProps) {
  return (
    <Container>
      <div>
        <div className="user-photo">
          <div className="users-name-login">
            <span className="user-names">
              <p style={{ margin: "4px 0 -10px" }} className="user-name">
                {name}
              </p>
            </span>
            <p>{description}</p>
          </div>
        </div>
      </div>

      <NavLink to="/home">
        <button>Ver repositórios</button>
      </NavLink>

      <br />
    </Container>
  );
}
