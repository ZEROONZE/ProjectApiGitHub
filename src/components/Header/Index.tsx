import React from "react";
import { BiUser } from "react-icons/bi";
import { Container } from "./styles";

export const Header = () => {
  return (
    <Container>
      <div className="user-content">
        <div className="user-name"></div>
      </div>
    </Container>
  );
};
