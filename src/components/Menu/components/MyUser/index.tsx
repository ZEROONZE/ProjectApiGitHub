import React, { ReactElement, useState } from "react";

interface IUserPros {
  viewer: {
    login: string | undefined;
    name: string | undefined;
    bio: string | undefined;
    email: string | undefined;
    avatarUrl: ReactElement;
  };
}

export function MyUser({
  viewer: { login, name, bio, email, avatarUrl },
}: IUserPros) {
  return (
    <div>
      <p>{avatarUrl}</p>
      <p>{login}</p>
      <p>{name}</p>
      <p>{bio}</p>
      <p>{email}</p>
    </div>
  );
}
