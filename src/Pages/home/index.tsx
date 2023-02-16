import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import { Error } from "../../components/Error/Error";
import { Search } from "../../components/Search";
import { Users } from "../../components/User";
import { apiGitHub } from "../../services/Api";
import { ToastContainer, toast } from "react-toastify";

import { UserProps } from "../../Types/user";
import { Card, Container } from "./styles";
import { BiUser } from "react-icons/bi";

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

  // const { loading, error, data } = useQuery(GET_USER);
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // Alert
  function handleSuccess() {
    toast.success("Usuario encontrado!");
  }

  function handleError() {
    toast.error("Usuario encontrado!");
  }

  function handleErrorLimit() {
    toast.error("Limite de buscas exedidos!");
  }

  // const loadUser = async (userName: string) => {
  //   setError(false);
  //   setUser(null);
  //   const res = await fetch(`https://api.github.com/users/${userName}`);

  //   const data = await res.json();
  //   if (res.status === 404) {
  //     setError(true);
  //     return;
  //   }
  //   console.log(data);

  //   const { login, name, bio, avatar_url, followers, following } = data;

  //   const userData: UserProps = {
  //     login,
  //     name,
  //     bio,
  //     avatar_url,
  //     followers,
  //     following,
  //   };
  //   setUser(userData);
  // };

  async function loadUser(userName: string) {
    setLoading(true);
    const res = await apiGitHub
      .get(`/users/${userName}`)

      .then((response) => {
        setError(false);
        console.log(response.data);
        setUser(response.data);
        handleSuccess();
      })
      .catch((err) => {
        if (err.response.status === 404 || err.response.status === 401) {
          setUser(null);
          setError(true);
          handleError();
          return;
        }
        if (err.response.status === 403) {
          setUser(null);
          setError(true);
          handleErrorLimit();
          return;
        }
        console.log(err.response.status);
        console.log(err);
        console.log(err.data);
        console.log(err.response.status);
      });

    setLoading(false);
  }

  return (
    <Container>
      <h3>
        <BiUser /> / Buscar usuario
      </h3>
      <div className="container">
        <ToastContainer autoClose={3000} closeOnClick theme="light" />

        <Search loadUser={loadUser} />

        <Card>
          {user && <Users {...user} />} {error && <Error />}
        </Card>

        <br />
      </div>
    </Container>
  );
}
