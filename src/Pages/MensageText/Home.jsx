import React, { useState } from "react";
import api from "../../hooks/Api";
import { Container } from "./styles";
import { ColorRing } from "react-loader-spinner";
import { Alert } from "@mui/material";

import axios from "axios";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import Add from "@mui/icons-material/Add";

const initialValues = {
  rootNode: {
    id: "rootNode",
    type: "text",
    name: "welcome",
    text: "",
    next: "abc1",
  },
  abc1: {
    id: "abc1",
    type: "options",
    name: "ja_cliente",
    text: "Você já é nosso cliente?",
    options: [
      {
        id: "1",
        name: "cliente",
        view: true,
        text: "Sim",
        descricao: "Já Sou Cliente",
        next: "abc1-5",
      },
      {
        id: "2",
        name: "cliente",
        view: true,
        text: "Não",
        descricao: "Ainda não Sou Cliente",
        next: "abc5",
      },
    ],
  },
};
export const MensageText = () => {
  const [alertt, setAlertt] = useState(false);
  const [alerterr, setAlerterr] = useState(false);
  const [alertcriar, setAlertcriar] = useState(false);
  const [mensage, setMensage] = useState("");
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [alertContent, setAlertContent] = useState("");

  const [values, setValues] = useState(initialValues);
  function onChange(ev) {
    const { name, value } = ev.target;
    setMensage(ev.target.value);
    setValues({ ...values, [name]: value });
  }

  function onSubmit2(ev) {
    ev.preventDefault();
    axios
      .post("http://localhost:3000/posts", values)

      .then((response) => {
        console.log(response.data);
        setAlertcriar(true);
      })
      .catch((error) => {
        console.log(error);
        alert("not");
      });
  }

  async function Submit() {
    setLoading(true);
    await api
      .post(
        "/send_message",
        { number: number, message: mensage },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "0uyw8haw86mzelmsug01yusrqb7raj",
          },
        }
      )

      .then((response) => {
        console.log(response.data);
        setAlertContent(response.data.result);
        setAlertt(true);
      })
      .catch((err) => {
        console.log(err);

        setAlerterr(true);
      });

    setLoading(false);
  }

  return (
    <Container>
      {alertt ? (
        <Alert
          style={{
            width: "19rem",
            height: "37px",
            position: "absolute",
            right: "7px",
            transition: "all 0.5s",
            boxShadow: "2px 2px 9px rgba(0, 0, 0, 0.1)",
            zIndex: "9",
          }}
          className="alert"
          severity="success"
          onClose={(event) => setAlertt(false)}
        >
          Menssagem enviada!
          {alertContent}
        </Alert>
      ) : (
        <></>
      )}
      {alerterr ? (
        <Alert
          style={{
            width: "19rem",
            height: "37px",
            position: "absolute",
            right: "7px",
            transition: "all 0.5s",
            boxShadow: "2px 2px 9px rgba(0, 0, 0, 0.1)",
            zIndex: "9",
          }}
          className="alert"
          severity="error"
          onClose={(event) => setAlerterr(false)}
        >
          Menssagem não enviada!
          {alertContent}
        </Alert>
      ) : (
        <></>
      )}
      {alertcriar ? (
        <Alert
          style={{
            width: "19rem",
            height: "37px",
            position: "absolute",
            right: "7px",
            transition: "all 0.5s",
            boxShadow: "2px 2px 9px rgba(0, 0, 0, 0.1)",
            zIndex: "9",
          }}
          className="alert"
          severity="info"
          onClose={(event) => setAlertcriar(false)}
        >
          Menssagem criada!
          {alertContent}
        </Alert>
      ) : (
        <></>
      )}
      <div className="container-form">
        <div className="title-form">
          <h3>Enviar mensagem</h3>
          <p className="title-border"></p>
        </div>
        <form onSubmit={onSubmit2}>
          <label> Numero: </label>
          <input
            type="text"
            placeholder="Digite o numero receptor da mensagem..."
            className="number-input"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            id="mensage"
            name="mensage"
            value={number}
          />

          <label htmlFor="mensage"> Mensagem: </label>
          <textarea
            value={mensage}
            id="mensage"
            onChange={(ev) => {
              onChange(ev);
            }}
            name="mensage"
            type="text"
            className="mensage-input"
            placeholder="Digite sua menssagem de texto..."
          />
          {loading ? (
            <ColorRing
              height={77}
              width={75}
              ariaLabel="loading"
              wrapperStyle={{ margin: "auto" }}
            />
          ) : (
            <div className="buttons-form">
              <Button
                variant="contained"
                type="submit"
                style={{ margin: "1rem" }}
                endIcon={<Add />}
                className="button-add"
              >
                CRIAR
              </Button>

              <Button
                variant="contained"
                onClick={Submit}
                disabled={loading}
                endIcon={<SendIcon />}
                style={{ background: "rgb(8, 203, 148)", color: "#a5a3a3" }}
              >
                Enviar
              </Button>
            </div>
            // {/* /* <Alert
            //   severity="success"
            //   icon={<Check fontSize="inherit" />}
            //   onClose={() => setOpen(false)}

            //   // style={{
            //   //   display: open ? "none" : "block",
            //   //   position: "absolute",
            //   // }}

            //   <AlertTitle>Sucesso!</AlertTitle>
            //   Menssagem enviada.
            // </Alert> */}
          )}
        </form>
      </div>

      <div className="container-whats">
        <div className="img-foto2">
          <img className="img-foto3" alt="" width={230} src="p5.png" />
        </div>

        <div className="nome-whats1">
          <p className="nome-whats">{mensage}</p>
        </div>
        <br />
        <br />
        <br />
      </div>
      {/* <Boot /> */}
    </Container>
  );
};
