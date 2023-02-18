import { Button } from "@mui/material";
import { useState } from "react";
import { FaDivide, FaGithub, FaLine } from "react-icons/fa";
import { TbDivide, TbMinusVertical } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { UserProps } from "../../Types/user";
import { Header } from "../Header/Index";
import { Container } from "./styles";

interface HeaderProps {
  onOpenModal: () => void;
}

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
        <div>
          <span>Seguidores</span>
          <p>
            <Button variant="contained" color="info">
              {followers}
            </Button>
          </p>
        </div>
        <>
          <TbMinusVertical style={{ fontSize: "2rem" }} />
        </>
        <div>
          <span>Seguindo</span>
          <p>
            <Button variant="contained" color="info">
              {following}
            </Button>
          </p>
        </div>
      </div>

      <br />

      <br />
    </Container>
  );
}
