import React, { ReactElement } from "react";
import { SideProfileComponet } from "./styles";
import { FaGithub } from "react-icons/fa";
import { BiUser } from "react-icons/bi";

interface IUserPros {
  user: {
    login: string | undefined;
    name: string | undefined;
    bio: string | undefined;
    websiteUrl: string | undefined;
    avatarUrl: ReactElement;
    followers: {
      totalCount?: number | undefined;
    };
    following: {
      totalCount?: number | undefined;
    };
  };
}

export function MyUser({
  user: { login, name, bio, websiteUrl, avatarUrl, followers, following },
}: IUserPros) {
  return (
    <SideProfileComponet>
      <div className="content-sideProfile">
        <div>{avatarUrl}</div>
        <span className="user-names">
          <h3 style={{ margin: "4px 0 -9px" }} className="sideProfile-name">
            {name}
          </h3>
          <p
            style={{
              marginTop: "5px",
              alignItems: "center",
            }}
            className="sideProfile-login"
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
        <p>{bio}</p>
        <br></br>
        <div className="user-follo">
          <div className="followers-content">
            <p>
              <h5>{followers?.totalCount}</h5>
            </p>
            <span>Seguidores</span>
          </div>
          <></>
          <div className="following-content">
            <p>
              <h5>{following?.totalCount}</h5>
            </p>
            <span>Seguindo</span>
          </div>
        </div>
        <br></br>
        <p className="sideprofile-email">
          <BiUser className="sideprofile-icon-email" />
          {websiteUrl}
        </p>
      </div>
    </SideProfileComponet>
  );
}
