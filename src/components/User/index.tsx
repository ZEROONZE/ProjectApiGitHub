import { useQuery, gql } from "@apollo/client";
import { ReactElement } from "react";
import client from "../../index";

interface IUserPros {
  viewer: {
    login: string | undefined;
    name: string | undefined;
    bio: string | undefined;
    email: string | undefined;
    avatarUrl: ReactElement;
  };
}

export function Users({
  viewer: { login, name, bio, email, avatarUrl },
}: IUserPros) {
  return (
    <div>
      <p>{login}</p>
      <p>{name}</p>
      <p>{bio}</p>
      <p>{email}</p>
      <p>{avatarUrl}</p>

      {/* <img
        width="400"
        height="250"
        alt="location-reference"
        src={`${avatarUrl}`}
      /> */}
      <br />
      <b>About this location:</b>
      <button>teste</button>
      <br />
    </div>
  );
}
