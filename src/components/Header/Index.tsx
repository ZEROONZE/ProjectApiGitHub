import React from "react";
import { BiUser } from "react-icons/bi";
import { Container } from "./styles";

export const Header = () => {
  return (
    <Container>
      <div className="user-content">
        <div className="user-name">
          {/* <h3 className="title-container">
            Buscar usuario <BiUser className="icon-title-container" />
          </h3> */}
        </div>
        {/* <div className="img-user">
          <img alt="" width={40} src="user.png" />
        </div> */}
      </div>
    </Container>
  );
};
