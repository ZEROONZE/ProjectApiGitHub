import { BiComment } from "react-icons/bi";
import {
  FiChevronDown,
  FiMessageSquare,
  FiImage,
  FiFolder,
  FiChevronUp,
} from "react-icons/fi";
import { useQuery, gql } from "@apollo/client";
import { TbUsers, TbDoorExit } from "react-icons/tb";
import { IoBarChartOutline, IoPaperPlaneOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import Modal from "react-modal";
import { ReactNode, useState } from "react";
import { Conainter, SideProfile } from "./styles";

import { MyUser } from "./components/MyUser";

type IPropsUser = {
  avatarUrl: string;
  login: string;
  websiteUrl: string;
  name: string;
  bio: string;
  following: {
    totalCount?: number;
  };
  followers: {
    totalCount?: number;
  };
};

interface ToggleProps {
  children?: React.ReactNode;
  Open: boolean;
}
Modal.setAppElement("#root");
export const Sliderbar = ({ children, Open }: ToggleProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const GET_USER = gql`
    query GetUser {
      user(login: "ZEROONZE") {
        login
        avatarUrl
        bio
        name
        websiteUrl
        following {
          totalCount
        }
        followers {
          totalCount
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_USER);
  const [user, setUser] = useState<IPropsUser | null>(null);
  const allProducts = [data];
  console.log(allProducts);

  const style = {
    "media screen and (max-width: 600px)": {
      display: isOpen ? "none" : "none",
    },
  };

  return (
    <Conainter style={{ zIndex: "5" }} Open={isOpen}>
      <div style={{ width: isOpen ? "24rem" : "3rem" }} className="slider">
        <div className="top_section">
          <div
            style={{
              marginLeft: isOpen ? "7.3rem" : "-0.3rem",
              marginTop: "-1.7rem",
            }}
            className="bars"
          >
            <FaBars
              style={{
                marginLeft: isOpen ? "-4.6rem" : "0.3rem",
                marginTop: isOpen ? "7px" : "10px",
              }}
              onClick={toggle}
            />
          </div>
        </div>
        <div style={{ display: isOpen ? "block" : "none" }}>
          {allProducts.map((user) => {
            return (
              <SideProfile>
                <MyUser
                  user={{
                    login: user?.user.login,
                    name: user?.user.name,
                    bio: user?.user.bio,
                    websiteUrl: user?.user.websiteUrl,

                    followers: user?.user.followers,
                    following: user?.user.following,
                    avatarUrl: (
                      <img
                        src={user?.user.avatarUrl}
                        alt="avatar"
                        width="100px"
                        className="avatar-url"
                        style={{ borderRadius: "50%" }}
                      />
                    ),
                  }}
                />
              </SideProfile>
            );
          })}
        </div>
      </div>
      <main>{children}</main>
    </Conainter>
  );
};
