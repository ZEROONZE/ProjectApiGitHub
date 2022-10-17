import React, { useState } from "react";
import api from "../../hooks/Api";
import { Container } from "./style";

const Disparos: React.FC = () => {
  const [downloand, SetDownloand] = useState("");
  const [Saving, setSaving] = useState(false);
  const [text, setText] = useState("");
  const [cardFile, setCardFile] = useState("");

  const handleUploadFile = (e: any) => setCardFile(e.target.files[0]);

  const UrlDownloand =
    "https://docs.google.com/uc?export=download&id=1rhOJqBV8ltFwtdODWaB-RCPD43_XDNbf";

  const Submit = async () => {
    setSaving(true);
    const data = new FormData();
    data.append("card", cardFile);

    api
      .post(
        "/send_message",
        { number: "62994719784", message: text },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "0uyw8haw86mzelmsug01yusrqb7raj",
          },
        }
      )
      .then((response) => console.log(response.data))
      .catch((err) => console.error(err));
  };

  return (
    <Container>
      <div>
        <div className="titulo">
          <h1 className="titulo-two">Múltiplos Disparos</h1>
          <p className="titulo-tree"></p>
        </div>

        <div className="form">
          <form>
            <label>
              <h2>Planilha de disparos</h2>
            </label>
          </form>
          <button onClick={() => SetDownloand(UrlDownloand)} className="buttom">
            Download da planilha
          </button>

          {downloand && (
            <iframe src={downloand} style={{ display: "none" }}></iframe>
          )}
        </div>

        <div className="form-two">
          <form>
            <label>
              <h2>Selecionar arquivo</h2>
              <br></br>
              <input type="file" onChange={handleUploadFile} accept="xlsx" />

              <br></br>
            </label>
          </form>

          <a>
            <button onClick={() => SetDownloand} className="buttom">
              Enviar
            </button>
          </a>
        </div>
      </div>

      <p>{cardFile}</p>
    </Container>
  );
};

export default Disparos;
