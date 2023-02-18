import { FaDivide, FaGithub, FaLine } from "react-icons/fa";
import { TbDivide, TbMinusVertical } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { RepoProps, UserProps } from "../../Types/user";
import { Container } from "./styles";

export function Repositorys({ id, name, description, html_url }: RepoProps) {
  return (
    <Container>
      <a href={html_url}>
        <h4>{name}</h4>

        <p>{description}</p>
      </a>
    </Container>
  );
}
