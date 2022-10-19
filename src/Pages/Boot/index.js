import React, { useState } from "react";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import axios from "axios";

const initialValues = {
  title: "",
  mensage: "",
};

export const Boot = () => {
  const [values, setValues] = useState(initialValues);

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(ev) {
    ev.preventDefault();
    axios
      .post("http://localhost:3000/posts", values)

      .then((response) => {
        console.log(response.data);
        alert("Enviado");
      })
      .cath((err) => {
        console.log(err);
        alert("not");
      });
  }

  return (
    <div id="formulario">
      <form onSubmit={onSubmit}>
        <div>
          <label> Nome: </label>
          <Input type="text" id="title" name="title" onChange={onChange} />
        </div>
        <div>
          <label htmlFor=""> Menssagem: </label>
          <Input type="text" id="mensage" name="mensage" onChange={onChange} />
        </div>

        <div style={{ marginTop: "1rem" }}>
          <Button type="submit" variant="contained" style={{ margin: "1rem" }}>
            Criar menssagem
          </Button>
          <Button variant="outlined" style={{ margin: "1rem" }}>
            deletar
          </Button>
        </div>
      </form>
      {/* <table style={{ padding: "10px" }}>
        <thead style={{ margin: "20px" }}>
          <th style={{ margin: "20px" }}>ID</th>
          <th style={{ padding: "20px" }}>PRODUTO</th>
          <th>VALOR</th>
        </thead>
        <tbody id="tbody">
          <tr>
            <td style={{ margin: "30px" }}>1</td>
            <td style={{ margin: "20px" }}>Nome</td>
            <td style={{ padding: "20px" }}>Mensg</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
};
