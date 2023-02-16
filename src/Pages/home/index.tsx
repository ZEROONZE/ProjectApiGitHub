import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import { Search } from "../../components/Search";
import { Users } from "../../components/User";

import { UserProps } from "../../Types/user";
import { Card, Container } from "./styles";

export function Home() {
  const GET_USER = gql`
    query GetUser {
      viewer {
        login
        name
        bio
        email
        avatarUrl
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_USER);
  const [user, setUser] = useState<UserProps | null>(null);

  const allProducts = [data];

  console.log(allProducts);

  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();
    console.log(data);

    const { login, name, bio, avatarUrl, followers, follwing } = data;

    const userData: UserProps = {
      login,
      name,
      bio,
      avatarUrl,
      followers,
      follwing,
    };
    setUser(userData);
  };

  return (
    <Container>
      <h3 className="search">
        <Search loadUser={loadUser} />
      </h3>
      <div>
        {allProducts.map((user, index) => {
          return (
            <Card>
              <Users
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
                    />
                  ),
                }}
              />
            </Card>
          );
        })}
      </div>

      <p>nome: {user && user.login}</p>

      <br />
    </Container>
  );
}
