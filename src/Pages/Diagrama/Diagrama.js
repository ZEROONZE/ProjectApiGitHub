// import React from "react";
// import ReactFlow from "react-flow-renderer";

// const elements = [
//   { id: "1", data: { label: "Node 1" }, position: { x: 280, y: 150 } },
//   { id: "2", data: { label: <div>Node 2</div> }, position: { x: 280, y: 150 } },
//   { id: "e1-2", source: "1", target: "2", animated: true },
// ];

// export const Diagrama = () => {
//   return (
//     <div style={{ width: "100%", height: "80vh" }}>
//       <h1>teste</h1>
//       <ReactFlow elements={elements} />
//     </div>
//   );
// };
import { Alert } from "@mui/material";

import Button from "@mui/material/Button";
import api from "../../hooks/Api";
import axios from "axios";
import React, { useCallback, useState } from "react";
import Input from "@mui/material/Input";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
} from "react-flow-renderer";
import { Container } from "./styles";
import "../../App.css";
import { InputBoot } from "./input";

const initialEdges = [
  {
    id: "inicio",
    source: "inicio",
    type: "smoothstep",
    target: "mensagem-1",
    animated: true,
  },
  {
    id: "horizontal-e1-3",
    source: "inicio",
    type: "smoothstep",
    target: "mensagem-2",
    animated: true,
  },
  {
    id: "horizontal-e1-4",
    source: "mensagem-1",
    type: "smoothstep",
    target: "mensagem-3",
    animated: true,
  },
  {
    id: "horizontal-e1-44",
    source: "mensagem-1",
    type: "smoothstep",
    target: "mensagem-4",
    animated: true,
  },
  {
    id: "horizontal-e1-44",
    source: "mensagem-1",
    type: "smoothstep",
    target: "mensagem-5",
    animated: true,
  },
  {
    id: "mensagem-2",
    source: "mensagem-2",
    type: "smoothstep",
    target: "mensagem-2.1",
    animated: true,
  },
  {
    id: "mensagem-2.1",
    source: "mensagem-2",
    type: "smoothstep",
    target: "mensagem-2.3",
    animated: true,
  },
  {
    id: "mensagem-2.3",
    source: "mensagem-2",
    type: "smoothstep",
    target: "mensagem-2.4",
    animated: true,
  },
];

const initialValues = {
  title: "",
  mensage: "",
  mensage2: "",
  mensage3: String,
  mensage4: "",
  mensage5: "",
  mensage6: "",
  mensage7: "",
  mensage8: "",
};

export const Diagrama = () => {
  const [values, setValues] = useState(initialValues);
  const [alertcriar, setAlertcriar] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [mensage3, setMensage3] = useState(initialValues);
  const [mensage1, setMensage1] = useState("");

  const initialNodes = [
    {
      id: "inicio",
      sourcePosition: "right",
      targetPosition: "left",
      type: "text",
      data: {
        label: (
          <TextareaAutosize
            className="input-text2"
            id="title"
            name="title"
            type="text"
            onChange={onChange}
          />
        ),
      },
      position: { x: 10, y: 30 },
    },
    {
      id: "mensagem-1",
      sourcePosition: "right",
      targetPosition: "left",
      data: {
        label: <TextareaAutosize id="mensage" type="text" name="mensage" />,
      },
      position: { x: 250, y: -70 },
    },
    {
      id: "mensagem-2",
      sourcePosition: "right",
      targetPosition: "left",
      data: {
        label: (
          <InputBoot
            className="input-text"
            id="mensage1"
            name="mensage1"
            type="text"
            onChange={onChange}
          />
        ),
      },
      position: { x: 250, y: 150 },
    },
    {
      id: "mensagem-3",
      sourcePosition: "right",
      targetPosition: "left",
      data: {
        label: (
          <Input
            className="input-text"
            id="mensage3"
            name="mensage3"
            type="text"
            onChange={onChange}
          />
        ),
      },
      position: { x: 500, y: -120 },
    },
    {
      id: "mensagem-5",
      sourcePosition: "right",
      targetPosition: "left",

      data: {
        label: (
          <Input
            className="input-text"
            id="mensage4"
            name="mensage4"
            type="text"
            onChange={onChange}
          />
        ),
      },
      position: { x: 500, y: -19 },
    },
    // {
    //   id: "mensagem-4",
    //   sourcePosition: "right",
    //   targetPosition: "left",
    //   data: {
    //     label: (
    //       <Input
    //         className="input-text"
    //         id="mensage5"
    //         name="mensage5"
    //         onChange={(ev) => {
    //           onChange(ev);
    //         }}
    //       />
    //     ),
    //   },

    //   position: { x: 500, y: -70 },
    // },

    // {
    //   id: "mensagem-2.1",
    //   sourcePosition: "right",
    //   targetPosition: "left",
    //   data: {
    //     label: (
    //       <Input
    //         className="input-text"
    //         id="mensage6"
    //         name="mensage6"
    //         onChange={(ev) => {
    //           onChange(ev);
    //         }}
    //       />
    //     ),
    //   },
    //   position: { x: 500, y: 100 },
    // },
    // {
    //   id: "mensagem-2.3",
    //   sourcePosition: "right",
    //   targetPosition: "left",
    //   data: {
    //     label: (
    //       <Input
    //         className="input-text"
    //         id="mensage7"
    //         name="mensage7"
    //         type="text"
    //         onChange={(ev) => {
    //           onChange(ev);
    //         }}
    //       />
    //     ),
    //   },
    //   position: { x: 500, y: 150 },
    // },
    // {
    //   id: "mensagem-2.4",
    //   sourcePosition: "right",
    //   targetPosition: "left",
    //   style: {
    //     strokeWidth: 2,
    //     stroke: "#FF0072",
    //   },
    //   data: {
    //     label: (
    //       <Input
    //         className="input-text"
    //         id="mensage8"
    //         name="mensage8"
    //         type="text"
    //         onChange={(ev) => {
    //           onChange(ev);
    //         }}
    //       />
    //     ),
    //   },
    //   position: { x: 500, y: 200 },
    // },
  ];

  async function onSubmit2(ev) {
    ev.preventDefault();
    await axios
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

  function onChange(ev) {
    const { id, value } = ev.target;

    setValues({ ...values, [id]: value });
  }

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );

  return (
    <Container onSubmit={onSubmit2}>
      {alertcriar ? (
        <Alert
          style={{
            width: "19rem",
            height: "37px",
            position: "absolute",
            right: "15rem",
            transition: "all 0.5s",
            boxShadow: "2px 2px 9px rgba(0, 0, 0, 0.1)",
            zIndex: "9",
          }}
          className="alert"
          severity="info"
          onClose={(event) => setAlertcriar(false)}
        >
          fluxo criado!
          {alertContent}
        </Alert>
      ) : (
        <></>
      )}
      {nodes.map((item, index) => {
        <div onSubmit={onSubmit2} key={index}>
          <form onSubmit={onSubmit2}>{item.data.label}</form>
        </div>;
      })}

      <ReactFlow
        className="ReactFlow"
        onSubmit={onSubmit2}
        edges={edges}
        nodes={nodes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition="bottom-left"
      >
        <Button
          onSubmit={onSubmit2}
          onClick={onSubmit2}
          variant="contained"
          style={{ margin: "1rem", zIndex: "99999999" }}
        >
          Criar fluxo
        </Button>
        <div style={{ zIndex: "999999" }}>
          {nodes.map((item, index) => {
            <form onSubmit={onSubmit2} key={index}>
              <h1>teste</h1>
              <label onSubmit={onSubmit2}>{item.data.label}</label>
              <input></input>
            </form>;
          })}
        </div>
      </ReactFlow>
    </Container>
  );
};
