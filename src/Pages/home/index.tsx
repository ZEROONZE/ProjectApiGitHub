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
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Sliderbar } from "../../components/Menu/Sliderbar";
import client from "../../index";

Modal.setAppElement("#root");

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
      <div className="container">
        <ToastContainer autoClose={3000} closeOnClick theme="light" />
        <div className="search-div">
          <Search
            loadUser={loadUser}
            handleOpenModalView={handleOpenModalView}
            handleClick={loadUser}
          />
        </div>
        <br></br>
        <br></br>
        <Card>
          {user && (
            <div className="card-content">
              <Users {...user} />
              <div className="button-container">
                <Button
                  onClick={handleOpenModal}
                  color="info"
                  onChange={() => handleOpenModalView(userName)}
                  className="button-repo"
                >
                  ver repositorios
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

            <div className="">
              {/* <a href={item.html_url}> */}
              <div className="tbody-container">
                <Table
                  sx={{
                    width: "100%",
                    border: "none",
                  }}
                >
                  <TableHead
                    sx={{
                      width: "100%",
                      color: "#6e6b7b",
                      borderBottom: "2px #f2f2f2 solid",
                    }}
                  >
                    <TableRow
                      style={{
                        color: "#6e6b7b",
                      }}
                    >
                      <TableCell
                        style={{
                          color: "#323233",
                          border: "none",
                          fontFamily: "Poppins",
                        }}
                      >
                        Nome
                      </TableCell>
                      <TableCell
                        style={{
                          color: "#323233",
                          border: "none",
                          fontFamily: "Poppins",
                        }}
                      >
                        descrição
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody sx={{ height: 20, maxHeight: 10 }}>
                    {modalRepository?.map((item) => {
                      return (
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": {
                              border: 0,
                            },
                          }}
                        >
                          <TableCell
                            style={{
                              borderBottom: "2px #f2f2f2 solid",
                              fontFamily: "Poppins",
                            }}
                          >
                            {item.name}
                          </TableCell>
                          <TableCell
                            style={{
                              borderBottom: "2px #f2f2f2 solid",
                              fontFamily: "Poppins",
                            }}
                          >
                            {item.description}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </div>
          </Modal>
        )}

        <br />
      </div>
    </Container>
  );
}
