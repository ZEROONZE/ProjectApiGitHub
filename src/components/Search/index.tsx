import { Button } from "@mui/material";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Container } from "./styles";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
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

  return (
    <Container>
      <div className="container-users">
        <div className="title-search">
          <p>Buscar por usuários</p>
        </div>

        <div className="input-search">
          <div className="input">
            <input
              type="text"
              placeholder="digite nome"
              onChange={(e) => setUserName(e.target.value)}
              onKeyDown={handleKeyDown}
              value={userName}
            />
            <Button variant="contained" onClick={() => loadUser(userName)}>
              <BiSearch />
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};
