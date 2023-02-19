import { useQuery, gql } from "@apollo/client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Error } from "../../components/Error/Error";
import { Search } from "../../components/Search";
import { Users } from "../../components/User";
import { apiGitHub } from "../../services/Api";
import { ToastContainer, toast } from "react-toastify";
import Modal from "react-modal";
import { RepoProps, UserProps } from "../../Types/user";
import { Card, Container } from "./styles";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import CloseFvg from "../../assets/close.svg";
import { Repositorys } from "../../components/Repositorys";
import { ButtomModal } from "../../components/ButtomModal";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";
import { Sliderbar } from "../../components/Menu/Sliderbar";
import client from "../../index";

import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DataGridDemo from "../TESTE";
import { useSearchParams } from "react-router-dom";
import { IoClose, IoLogoJavascript } from "react-icons/io5";
import { BiBookBookmark } from "react-icons/bi";
import {
  SiCloudera,
  SiCsswizardry,
  SiKotlin,
  SiRuby,
  SiTypescript,
} from "react-icons/si";
import { FaGofore, FaJava, FaPhp } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

var LIMITE_DE_LINHAS = 5;
var PAGINA = 1;
Modal.setAppElement("#root");
interface handleOpenModalView {
  handleOpenModalView2: (userName: string) => Promise<void>;
}

export function Home() {
  // const { loading, error, data } = useQuery(GET_USER);
  const [user, setUser] = useState<UserProps | null>(null);
  const [repo, setRepo] = useState<RepoProps | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  //modal
  const [userName, setUserName] = useState("");
  const [modalRepository, setModalRepository] = useState<RepoProps[] | null>();
  const [ismodalopen, SetIsModalOpen] = useState(false);

  // search repositorios
  // const [searchRepo, SetSearchRepo] = useState<RepoProps | null>();
  // const filterRepo = modalRepository?.filter((itemRepo) =>
  //   itemRepo.includes([searchRepo])
  // );

  function handleCloseModal() {
    SetIsModalOpen(false);
  }
  function handleOpenModal() {
    SetIsModalOpen(true);
    setModalRepository(modalRepository);
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
    setUserName(userName);

    setLoading(true);
    const res = await apiGitHub
      .get(`/users/${userName}`)

      .then((response) => {
        setError(false);
        console.log(response.data);
        setUser(response.data);
        setTotalPages(response.data.public_repos);
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
  useEffect(() => {
    async function handleOpenModalView(userName: string) {
      console.log("Repo", userName);
      setLoading(true);

      const res = await apiGitHub
        .get(
          `/users/${userName}/repos?per_page=${LIMITE_DE_LINHAS}&page=${page}

      `
        )

        .then((response) => {
          setError(false);
          console.log(response.data);
          console.log(response);
          setModalRepository(response.data);
          setTotalCount(response.data.length);
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

          console.log(err.data);
          console.log(err.response.status);
        });

      setLoading(false);
    }
    handleOpenModalView(userName);
  }, [page, userName]);
  //pagination
  async function handleChange(
    event: React.ChangeEvent<unknown>,
    value: number
  ) {
    setPage(value);
    // setTimeout(() => {
    //   handleOpenModalView(userName);
    // }, 2000);

    const teste = await setModalRepository(modalRepository);
    return teste;
  }

  const coutPage = Math.ceil(totalPages / totalCount);
  return (
    <Container>
      <div className="container">
        <ToastContainer autoClose={3000} closeOnClick theme="light" />
        <div className="search-div">
          <Search
            loadUser={loadUser}
            // handleOpenModalView={handleOpenModalView}
            handleClick={loadUser}
          />
        </div>
        <br></br>
        <br></br>
        <div className="card-body-user">
          <Card>
            {user && (
              <div className="card-content">
                <Users {...user} />
                <div className="button-container">
                  <Button
                    onClick={handleOpenModal}
                    color="info"
                    className="button-repo"
                  >
                    ver repositorios
                  </Button>
                </div>
              </div>
            )}

            {error && <Error />}
          </Card>
        </div>
        {/* <div className="card">
          {modalRepository?.map((item) => {
            return (
              <Repositorys
                id={item.id}
                name={item.name}
                node_id={""}
                description={item.description}
                html_url={""}
                length={modalRepository?.length}
              />
            );
          })}
        </div> */}

        {ismodalopen && (
          <Modal
            isOpen={ismodalopen}
            onRequestClose={handleCloseModal}
            className="modal-content"
            overlayClassName="react-modal"
          >
            <div
              style={{
                borderRadius: "10px",
                marginTop: "-4px",
                marginBottom: "6px",
              }}
            >
              <input
                type="text"
                style={{ borderRadius: "10px", marginTop: "-4px" }}
              />
            </div>
            <button
              type="button"
              onClick={handleCloseModal}
              className="close-modal"
            >
              <IoClose className="close-icon" />
            </button>

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
                    background: "#121212",
                  }}
                >
                  <TableRow>
                    <TableCell
                      style={{
                        color: "#999999",
                        border: "none",
                        fontFamily: "Poppins",
                      }}
                    >
                      Nome
                    </TableCell>
                    <TableCell
                      style={{
                        color: "#999999",
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
                            borderBottom: "2px #9999 solid",
                            fontFamily: "Poppins",
                            color: "#58A6ff",
                          }}
                        >
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <span
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                marginBottom: "2rem",
                              }}
                            >
                              <BiBookBookmark
                                style={{
                                  marginRight: "10px",
                                  marginTop: "3px",
                                }}
                              />
                              {item.name}{" "}
                            </span>

                            <span>
                              {(item.language === "TypeScript" && (
                                <span className="name-languagem">
                                  <span
                                    style={{
                                      marginRight: "7px",
                                      marginBottom: "-5px",
                                      color: "#999999",
                                      alignItems: "center",
                                    }}
                                  >
                                    <AiFillStar
                                      style={{
                                        color: "yellow",
                                        marginLeft: "5px",
                                        marginRight: "4px",
                                        marginTop: "3px",
                                        marginBottom: "-2px",
                                        cursor: "pointer",
                                      }}
                                    />
                                    {item.stargazers_count}
                                  </span>
                                  <SiTypescript
                                    className="icon-languagem"
                                    style={{ color: "#3178c6" }}
                                  />
                                  TypeScript
                                </span>
                              )) ||
                                (item.language === "JavaScript" && (
                                  <span className="name-languagem">
                                    <span
                                      style={{
                                        marginRight: "7px",
                                        marginBottom: "-5px",
                                        color: "#999999",
                                        alignItems: "center",
                                      }}
                                    >
                                      <AiFillStar
                                        style={{
                                          color: "yellow",
                                          marginLeft: "5px",
                                          marginRight: "4px",
                                          marginTop: "3px",
                                          marginBottom: "-2px",
                                          cursor: "pointer",
                                        }}
                                      />
                                      {item.stargazers_count}
                                    </span>
                                    <IoLogoJavascript
                                      className="icon-languagem"
                                      style={{ color: "#F1E05A" }}
                                    />
                                    Javascript
                                  </span>
                                )) ||
                                (item.language === "HTML" && (
                                  <span className="name-languagem">
                                    <IoLogoJavascript
                                      className="icon-languagem"
                                      style={{ color: "#e34c26" }}
                                    />
                                    HTML
                                  </span>
                                )) ||
                                (item.language === "Python" && (
                                  <span className="name-languagem">
                                    <span
                                      style={{
                                        marginRight: "7px",
                                        marginBottom: "-5px",
                                        color: "#999999",
                                        alignItems: "center",
                                      }}
                                    >
                                      <AiFillStar
                                        style={{
                                          color: "yellow",
                                          marginLeft: "5px",
                                          marginRight: "4px",
                                          marginTop: "3px",
                                          marginBottom: "-2px",
                                          cursor: "pointer",
                                        }}
                                      />
                                      {item.stargazers_count}
                                    </span>
                                    <IoLogoJavascript
                                      className="icon-languagem"
                                      style={{ color: "#3572A5" }}
                                    />
                                    Python
                                  </span>
                                )) ||
                                (item.language === "Node" && (
                                  <span className="name-languagem">
                                    <span
                                      style={{
                                        marginRight: "7px",
                                        marginBottom: "-5px",
                                        color: "#999999",
                                        alignItems: "center",
                                      }}
                                    >
                                      <AiFillStar
                                        style={{
                                          color: "yellow",
                                          marginLeft: "5px",
                                          marginRight: "4px",
                                          marginTop: "3px",
                                          marginBottom: "-2px",
                                          cursor: "pointer",
                                        }}
                                      />
                                      {item.stargazers_count}
                                    </span>
                                    <IoLogoJavascript
                                      className="icon-languagem"
                                      style={{ color: "#690be5" }}
                                    />
                                    Node
                                  </span>
                                )) ||
                                (item.language === "Go" && (
                                  <span className="name-languagem">
                                    <span
                                      style={{
                                        marginRight: "7px",
                                        marginBottom: "-5px",
                                        color: "#999999",
                                        alignItems: "center",
                                      }}
                                    >
                                      <AiFillStar
                                        style={{
                                          color: "yellow",
                                          marginLeft: "5px",
                                          marginRight: "4px",
                                          marginTop: "3px",
                                          marginBottom: "-2px",
                                          cursor: "pointer",
                                        }}
                                      />
                                      {item.stargazers_count}
                                    </span>
                                    <FaGofore
                                      style={{ color: "#00ADD8" }}
                                      className="icon-languagem"
                                    />
                                    Go
                                  </span>
                                )) ||
                                (item.language === "Kotlin" && (
                                  <span>
                                    <SiKotlin
                                      style={{ color: "#A97BFF" }}
                                      className="icon-languagem"
                                    />
                                    Kotlin
                                  </span>
                                )) ||
                                (item.language === "PHP" && (
                                  <span>
                                    <FaPhp
                                      style={{ color: "#4F5D95" }}
                                      className="icon-languagem"
                                    />
                                    PHP
                                  </span>
                                )) ||
                                (item.language === "Java" && (
                                  <span className="name-languagem">
                                    <span
                                      style={{
                                        marginRight: "7px",
                                        marginBottom: "-5px",
                                        color: "#999999",
                                        alignItems: "center",
                                      }}
                                    >
                                      <AiFillStar
                                        style={{
                                          color: "yellow",
                                          marginLeft: "5px",
                                          marginRight: "4px",
                                          marginTop: "3px",
                                          marginBottom: "-2px",
                                          cursor: "pointer",
                                        }}
                                      />
                                      {item.stargazers_count}
                                    </span>
                                    <FaJava
                                      style={{ color: "#b07219" }}
                                      className="icon-languagem"
                                    />
                                    Java
                                  </span>
                                )) ||
                                (item.language === "Ruby" && (
                                  <span className="name-languagem">
                                    <span
                                      style={{
                                        marginRight: "7px",
                                        marginBottom: "-5px",
                                        color: "#999999",
                                        alignItems: "center",
                                      }}
                                    >
                                      <AiFillStar
                                        style={{
                                          color: "yellow",
                                          marginLeft: "5px",
                                          marginRight: "4px",
                                          marginTop: "3px",
                                          marginBottom: "-2px",
                                          cursor: "pointer",
                                        }}
                                      />
                                      {item.stargazers_count}
                                    </span>
                                    <SiRuby
                                      style={{ color: "#701516" }}
                                      className="icon-languagem"
                                    />
                                    Ruby
                                  </span>
                                )) ||
                                (item.language === "C++" && (
                                  <span className="name-languagem">
                                    <span
                                      style={{
                                        marginRight: "7px",
                                        marginBottom: "-5px",
                                        color: "#999999",
                                        alignItems: "center",
                                      }}
                                    >
                                      <AiFillStar
                                        style={{
                                          color: "yellow",
                                          marginLeft: "5px",
                                          marginRight: "4px",
                                          marginTop: "3px",
                                          marginBottom: "-2px",
                                          cursor: "pointer",
                                        }}
                                      />
                                      {item.stargazers_count}
                                    </span>
                                    <SiCloudera
                                      style={{ color: "#f34b7d" }}
                                      className="icon-languagem"
                                    />
                                    C++
                                  </span>
                                )) ||
                                (item.language === "C#" && (
                                  <span className="name-languagem">
                                    <span
                                      style={{
                                        marginRight: "7px",
                                        marginBottom: "-5px",
                                        color: "#999999",
                                        alignItems: "center",
                                      }}
                                    >
                                      <AiFillStar
                                        style={{
                                          color: "yellow",
                                          marginLeft: "5px",
                                          marginRight: "4px",
                                          marginTop: "3px",
                                          marginBottom: "-2px",
                                          cursor: "pointer",
                                        }}
                                      />
                                      {item.stargazers_count}
                                    </span>
                                    <SiCloudera
                                      style={{ color: "#f34b7d" }}
                                      className="icon-languagem"
                                    />
                                    C#
                                  </span>
                                )) ||
                                (item.language === "C" && (
                                  <span className="name-languagem">
                                    <span
                                      style={{
                                        marginRight: "7px",
                                        marginBottom: "-5px",
                                        color: "#999999",
                                        alignItems: "center",
                                      }}
                                    >
                                      <AiFillStar
                                        style={{
                                          color: "yellow",
                                          marginLeft: "5px",
                                          marginRight: "4px",
                                          marginTop: "3px",
                                          marginBottom: "-2px",
                                          cursor: "pointer",
                                        }}
                                      />
                                      {item.stargazers_count}
                                    </span>
                                    <SiCloudera
                                      style={{ color: "#f34b7d" }}
                                      className="icon-languagem"
                                    />
                                    C
                                  </span>
                                )) ||
                                (item.language === "CSS" && (
                                  <span className="name-languagem">
                                    <span
                                      style={{
                                        marginRight: "7px",
                                        marginBottom: "-5px",
                                        color: "#999999",
                                        alignItems: "center",
                                      }}
                                    >
                                      <AiFillStar
                                        style={{
                                          color: "yellow",
                                          marginLeft: "5px",
                                          marginRight: "4px",
                                          marginTop: "3px",
                                          marginBottom: "-2px",
                                          cursor: "pointer",
                                        }}
                                      />
                                      {item.stargazers_count}
                                    </span>
                                    <SiCsswizardry
                                      style={{ color: "#340964" }}
                                      className="icon-languagem"
                                    />
                                    CSS
                                  </span>
                                )) ||
                                (item.language === "Dockerfile" && (
                                  <span className="name-languagem">
                                    <span
                                      style={{
                                        marginRight: "7px",
                                        marginBottom: "-5px",
                                        color: "#999999",
                                        alignItems: "center",
                                      }}
                                    >
                                      <AiFillStar
                                        style={{
                                          color: "yellow",
                                          marginLeft: "5px",
                                          marginRight: "4px",
                                          marginTop: "3px",
                                          marginBottom: "-2px",
                                          cursor: "pointer",
                                        }}
                                      />
                                      {item.stargazers_count}
                                    </span>
                                    <SiCsswizardry
                                      style={{ color: "#aaaa" }}
                                      className="icon-languagem"
                                    />
                                    Dockerfile
                                  </span>
                                ))}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell
                          style={{
                            borderBottom: "2px #9999 solid",
                            fontFamily: "Poppins",
                            color: "#999999",
                          }}
                          className="desc-repo"
                        >
                          {(item.description === null && (
                            <p className="desc-repo">
                              Projeto não tem descrição.
                            </p>
                          )) ||
                            item.description}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
            <TableFooter>
              <TableRow>
                <Stack spacing={2}>
                  <Pagination
                    page={page}
                    count={coutPage}
                    variant="outlined"
                    color="primary"
                    onChange={handleChange}
                  />
                </Stack>
              </TableRow>
            </TableFooter>
          </Modal>
        )}

        <br />
      </div>
    </Container>
  );
}
