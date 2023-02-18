import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { Error } from "../../components/Error/Error";
import { Search } from "../../components/Search";
import { Users } from "../../components/User";
import { apiGitHub } from "../../services/Api";
import { ToastContainer, toast } from "react-toastify";
import Modal from "react-modal";
import { RepoProps, UserProps } from "../../Types/user";
import { Card, Container } from "./styles";
import { BiUser } from "react-icons/bi";
import { ModaRepository } from "../../components/RepositoryModal";
import { Header } from "../../components/Header/Index";
import CloseFvg from "../../assets/close.svg";
import { Repositorys } from "../../components/Repositorys";
import { ButtomModal } from "../../components/ButtomModal";
import { Button } from "@mui/material";
import { Sliderbar } from "../../components/Menu/Sliderbar";
import client from "../../index";

export function Home() {
  // const { loading, error, data } = useQuery(GET_USER);
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  //modal
  const [userName, setUserName] = useState("");
  const [modalRepository, setModalRepository] = useState<RepoProps[] | null>();

  const [ismodalopen, SetIsModalOpen] = useState(false);

  function handleCloseModal() {
    SetIsModalOpen(false);
  }
  function handleOpenModal() {
    SetIsModalOpen(true);
  }
  // Alert
  function handleSuccess() {
    toast.success("Usuario encontrado!");
  }

  function handleError() {
    toast.error("Usuario não encontrado!");
  }

  function handleErrorLimit() {
    toast.error("Limite de buscas exedidas!");
  }

  async function loadUser(userName: string) {
    console.log("user", userName);

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

  async function handleOpenModalView(userName: string) {
    console.log("Repo", userName);
    setLoading(true);
    const res = await apiGitHub
      .get(`/users/${userName}/repos`)

      .then((response) => {
        setError(false);
        console.log(response.data);
        setModalRepository(response.data);
      })
      .catch((err) => {
        if (err.response.status === 404 || err.response.status === 401) {
          setModalRepository(null);
          setError(true);

          return;
        }
        if (err.response.status === 403) {
          setModalRepository(null);
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

        <Search
          loadUser={loadUser}
          handleOpenModalView={handleOpenModalView}
          handleClick={loadUser}
        />

        <Card>
          {user && (
            <div className="card-content">
              <Users {...user} />
              <div className="button-container">
                <Button
                  onClick={handleOpenModal}
                  variant="contained"
                  color="info"
                  onChange={() => handleOpenModalView(userName)}
                  className="button-repo"
                >
                  ver resultado
                </Button>
              </div>
            </div>
          )}

          {error && <Error />}
        </Card>

        {ismodalopen && (
          <Modal
            isOpen={ismodalopen}
            onRequestClose={handleCloseModal}
            className="modal-content"
            overlayClassName="react-modal"
          >
            <button type="button" onClick={handleCloseModal}>
              <img src={CloseFvg} alt="fechar modal" />
            </button>

            <div className="card-repo">
              {modalRepository?.map((item) => {
                return (
                  <div className="card-repo">
                    <a href={item.html_url}>
                      <h4> {item.name}</h4>

                      <p>{item.description}</p>
                    </a>
                  </div>
                );
              })}
            </div>
          </Modal>
        )}

        <br />
      </div>
    </Container>
  );
}
