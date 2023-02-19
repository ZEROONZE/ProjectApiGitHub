import { TextField } from "@mui/material";
import React, { useState } from "react";
import { BiSearch, BiUser } from "react-icons/bi";
import { Container } from "./styles";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
  handleClick: (userName: string) => Promise<void>;
};
interface KeyboardEvent {
  key: string;
}

export const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  // function to search using the ENTER key.
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };

  const handleClick = () => {
    loadUser(userName);
  };

  return (
    <Container>
      <div className="container-users">
        <div className="title-search">
          <p>
            <p className="title-container">
              <BiUser className="icon-title-container" /> / Buscar usuários
            </p>
          </p>
        </div>

        <div className="input-search">
          <div className="input">
            <TextField
              id="standard-basic"
              label="Buscar usuários"
              variant="filled"
              color="info"
              className="input-search-mui"
              style={{
                background: "none",
                borderColor: "#ffff",
              }}
              onChange={(e) => setUserName(e.target.value)}
              onKeyDown={handleKeyDown}
              value={userName}
            />{" "}
            <button onClick={() => handleClick()} className="buttom-search">
              <BiSearch
                style={{
                  fontSize: "1.5rem",
                  color: "#fff",
                  marginBottom: "-4px",
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};
