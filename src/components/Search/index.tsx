import { Button } from "@mui/material";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Container } from "./styles";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

export const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  return (
    <Container>
      <h3>Busque por usuários:</h3>
      <p>Estrelas</p>
      <div>
        <input
          type="text"
          placeholder="digite nome"
          onChange={(e) => setUserName(e.target.value)}
        />
        <Button variant="contained" onClick={() => loadUser(userName)}>
          <BiSearch />
        </Button>
        <p>{userName}</p>
      </div>
    </Container>
  );
};
