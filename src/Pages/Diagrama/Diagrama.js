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

// const initialValues = {
//   rootNode: {
//     id: "rootNode",
//     type: "text",
//     name: "welcome",
//     text: "",
//     next: "abc1",
//   },
//   abc1: {
//     id: "abc1",
//     type: "options",
//     name: "ja_cliente",
//     text: "Você já é nosso cliente?",
//     options: [
//       {
//         id: "1",
//         name: "cliente",
//         view: true,
//         text: "Sim",
//         descricao: "Já Sou Cliente",
//         next: "abc1-5",
//       },
//       {
//         id: "2",
//         name: "cliente",
//         view: true,
//         text: "Não",
//         descricao: "Ainda não Sou Cliente",
//         next: "abc5",
//       },
//     ],
//   },
//   "abc1-5": {
//     id: "abc1",
//     type: "options",
//     name: "novoProduto",
//     text: "Voce gostaria de adquirir um novo plano de internet Residencial/Empresarial?",
//     options: [
//       {
//         id: "1",
//         name: "novoProduto",
//         view: true,
//         text: "Sim",
//         descricao: "Sim",
//         next: "abc5",
//       },
//       {
//         id: "2",
//         name: "novoProduto",
//         view: true,
//         text: "Não",
//         descrica: "Não",
//         next: "abc2",
//       },
//     ],
//   },
// };

export const Diagrama = () => {
  const [alertcriar, setAlertcriar] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [inputList, setInputList] = useState([
    // id: "rootNode",
    // name: "text",
    // typeInput: "input",
    // type: "text",
    // placeholder: "Nome",
    // text: "",
    // next: "abc1",

    {
      rootNode: [
        {
          id: "rootNodee",
          name: "text",
          typeInput: "input",
          type: "text",
          placeholder: "Nome",
          text: "",
          next: "abc1",
        },
      ],
    },

    // {
    //   abc1: {
    //     id: "abc1",
    //     type: "options",
    //     name: "ja_cliente",
    //     text: "Você já é nosso cliente?",
    //     options: [
    //       {
    //         id: "1",
    //         name: "cliente",
    //         view: true,
    //         text: "Sim",
    //         descricao: "Já Sou Cliente",
    //         next: "abc1-5",
    //       },
    //       {
    //         id: "2",
    //         name: "cliente",
    //         view: true,
    //         text: "Não",
    //         descricao: "Ainda não Sou Cliente",
    //         next: "abc5",
    //       },
    //     ],
    //   },
    // },
    // {
    //   abc15: {
    //     id: "abc1",
    //     type: "options",
    //     name: "novoProduto",
    //     text: "Voce gostaria de adquirir um novo plano de internet Residencial/Empresarial?",
    //     options: [
    //       {
    //         id: "1",
    //         name: "novoProduto",
    //         view: true,
    //         text: "Sim",
    //         descricao: "Sim",
    //         next: "abc5",
    //       },
    //       {
    //         id: "2",
    //         name: "novoProduto",
    //         view: true,
    //         text: "Não",
    //         descricao: "Não",
    //         next: "abc2",
    //       },
    //     ],
    //   },
    // },
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];

    list[index][name] = value;
    setInputList(list);
  };

  const initialNodes = [
    {
      id: "inicio",
      sourcePosition: "right",
      targetPosition: "left",
      data: {
        label: (
          <div>
            {inputList.map((item, subindex) => (
              <form onSubmit={onSubmit2} key={subindex}>
                {item.rootNode.map((item, index) => (
                  <TextareaAutosize
                    key={index}
                    name={item.name}
                    type={item.type}
                    className="input-text"
                    placeholder={item.placeholder}
                    id={item.name}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                ))}
              </form>
            ))}
          </div>
        ),
      },
      position: { x: 10, y: 30 },
    },
    // {
    //   id: "mensagem-1",
    //   sourcePosition: "right",
    //   targetPosition: "left",
    //   data: {
    //     label: (
    //       <TextareaAutosize
    //         className="input-text"
    //         id="mensage"
    //         type="text"
    //         name="mensage"
    //       />
    //     ),
    //   },
    //   position: { x: 250, y: -70 },
    // },
    // {
    //   id: "mensagem-2",
    //   sourcePosition: "right",
    //   targetPosition: "left",
    //   data: {
    //     label: (
    //       <InputBoot
    //         className="input-text"
    //         id="mensage1"
    //         name="mensage1"
    //         type="text"
    //         onChange={() => onChange()}
    //       />
    //     ),
    //   },
    //   position: { x: 250, y: 150 },
    // },
    // {
    //   id: "mensagem-3",
    //   sourcePosition: "right",
    //   targetPosition: "left",
    //   data: {
    //     label: (
    //       <Input
    //         className="input-text"
    //         id="mensage3"
    //         name="mensage3"
    //         type="text"
    //         onChange={() => onChange()}
    //       />
    //     ),
    //   },
    //   position: { x: 500, y: -120 },
    // },
    // {
    //   id: "mensagem-5",
    //   sourcePosition: "right",
    //   targetPosition: "left",

    //   data: {
    //     label: (
    //       <Input
    //         className="input-text"
    //         id="mensage4"
    //         name="mensage4"
    //         type="text"
    //         onSubmit={onSubmit2()}
    //         onChange={() => onChange()}
    //       />
    //     ),
    //   },
    //   position: { x: 500, y: -19 },
    // },
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

  async function onSubmit2(e) {
    e.preventDefault();

    await axios
      .post("http://localhost:3000/posts", inputList)

      .then((response) => {
        console.log(response.data);

        setAlertcriar(true);
      })
      .catch((error) => {
        console.log(error);
        alert("not");
      });
  }

  // // function onChange(e) {
  // //   let user = { ...values };

  // //   setText(e.target.value);
  // //   user[e.target.name] = e.target.value;
  //   // const { name, value } = ev.target.value;

  //   // setValues({ ...values, [ev.target.name]: value });
  // }

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );

  return (
    <Container>
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

      <ReactFlow
        className="ReactFlow"
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
        {/* <div style={{ zIndex: "999999" }}>
          {nodes.map((item, index) => {
            <form onSubmit={onSubmit2} key={index}>
              <h1>teste</h1>
              <label onSubmit={onSubmit2}>{item.data.label}</label>
              <input></input>
            </form>;
          })}
        </div> */}
      </ReactFlow>
    </Container>
  );
};
