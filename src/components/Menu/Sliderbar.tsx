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

import { ReactNode, useState } from "react";
import { Conainter, SideProfile } from "./styles";

import { MyUser } from "./components/MyUser";

type IPropsUser = {
  avatarUrl: string;
  login: string;
  email: string;
  name: string;
  bio: string;
};

interface IchildrenProps {
  children: ReactNode;
  ItemList: IPropsUser[];
}

export const Sliderbar = ({ children, ItemList }: IchildrenProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const GET_USER = gql`
    query GetUser {
      viewer {
        login
        avatarUrl
        bio
        name
        email
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_USER);
  const [user, setUser] = useState<IPropsUser | null>(null);
  const allProducts = [data];
  console.log(allProducts);

  // const { date } = await client.query({
  //   query: gql`
  //     query GetUser {
  //       viewer {
  //         login
  //         name
  //         bio
  //         email
  //         avatarUrl
  //       }
  //     }
  //   `,
  // });

  console.log(data);
  return (
    <Conainter style={{ zIndex: "5" }}>
      <div style={{ width: isOpen ? "19rem" : "3rem" }} className="slider">
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
              }}
              onClick={toggle}
            />
          </div>
        </div>
        <div>
          <h1>teste</h1>
          {allProducts.map((user) => {
            return (
              <SideProfile>
                <MyUser
                  viewer={{
                    login: user?.viewer.login,
                    name: user?.viewer.name,
                    bio: user?.viewer.bio,
                    email: user?.viewer.email,
                    avatarUrl: (
                      <img
                        src={user?.viewer.avatarUrl}
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
