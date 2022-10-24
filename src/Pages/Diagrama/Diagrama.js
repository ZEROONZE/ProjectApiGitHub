import { Alert } from "@mui/material";
import Json from "../../db.json";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import React, { useCallback, useEffect, useState, useRef } from "react";
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
import { ColorRing } from "react-loader-spinner";
import { FcCheckmark, FcPlus } from "react-icons/fc";

import { InputBoot } from "./input";

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
    target: "mensagem-0",
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
    id: "horizontal-e1-46",
    source: "mensagem-3",
    type: "smoothstep",
    target: "mensagem-5",
    animated: true,
  },
  {
    id: "horizontal-e1-45",
    source: "mensagem-6",
    type: "smoothstep",
    target: "mensagem-5",
    animated: true,
  },
  {
    id: "horizontal-e1-0",
    source: "mensagem-7",
    type: "smoothstep",
    target: "mensagem-5",
    animated: true,
  },
  {
    id: "mensagem-2",
    source: "mensagem-2",
    type: "smoothstep",
    target: "mensagem-4",
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
export const Diagrama = () => {
  const [alertcriar, setAlertcriar] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [inputList, setInputList] = useState([{ Json }]);

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);
  const Url = "http://localhost:3000/";
  const FormRef = useRef();
  const FormRefAbc5 = useRef();
  const FormRefAbc1 = useRef();
  const [atualizaGrid, setAtualizarGrid] = useState(false);

  async function CarregaDados() {
    await axios
      .get(Url + "rootNode")
      .then((response) => setData(response.data));
  }

  // async function InputDados(e) {
  //   e.preventDefault();
  //   const { InputDesc } = FormRef.current;
  //   const dados = {
  //     id: "rootNode",
  //     type: "text",
  //     name: "welcome",
  //     text: "Olá, eu sou assistente virtual da Oi 😎",
  //     next: "abc1",
  //   };
  //   console.log(InputDesc.value);
  //   await axios.post(Url + "rootNode", dados);
  //   setAtualizarGrid(!atualizaGrid);
  // }

  useEffect(() => {
    setLoading(true);
    CarregaDados();
    setLoading(false);
  }, [atualizaGrid]);
  console.log(loading);
  //DELETE FORM

  // async function Deletar(id) {
  //   await axios.delete(Url + `rootNode/${id}`);
  //   setAtualizarGrid(!atualizaGrid);
  //   console.log(Url + `rootNode/${id}`);
  //   setAtualizarGrid(!atualizaGrid);
  // }
  //função PUT rootNODE
  async function Editar(e) {
    setLoading(true);
    e.preventDefault();

    const { InputDesc } = FormRef.current;
    const dados = {
      id: "rootNode",
      type: "text",
      name: "welcome",
      text: InputDesc.value,
      next: "abc1",
    };

    await axios.put(Url + "rootNode/" + dados.id, dados);
    console.log(Url + "rootNode/" + dados.id, dados);
    console.log(InputDesc.value);
    setLoading(false);
  }

  //função PUT abc1
  async function EditarAbc1(e) {
    e.preventDefault();
    const { InputDescAbc1 } = FormRefAbc1.current;
    const dados = {
      id: "abc1",
      type: "options",
      name: "ja_cliente",
      text: InputDescAbc1.value,
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
    };

    await axios.put(Url + "abc1/" + dados.id, dados);
    console.log(Url + "abc1/" + dados.id, dados);
    console.log(InputDescAbc1.value);
  }

  async function EditarAbc5(e) {
    e.preventDefault();
    const { InputDescAbc5 } = FormRefAbc5.current;
    const dados = {
      id: "abc15",
      type: "options",
      name: "novoProduto",
      text: InputDescAbc5.value,
      // "Voce gostaria de adquirir um novo plano de internet Residencial/Empresarial?",
      options: [
        {
          id: "1",
          name: "novoProduto",
          view: true,
          text: "Sim",
          descricao: "Sim",
          next: "abc5",
        },
        {
          id: "2",
          name: "novoProduto",
          view: true,
          text: "Não",
          descricao: "Não",
          next: "abc2",
        },
      ],
    };
    await axios.put(Url + "abc15/" + dados.id, dados);
    console.log(Url + "abc15/" + dados.id, dados);
  }

  const initialNodes = [
    //Saudação
    {
      id: "inicio",
      sourcePosition: "right",
      targetPosition: "left",
      data: {
        label: (
          <div>
            {inputList.map((item, index) => {
              return (
                <form
                  onSubmit={Editar}
                  className="form"
                  ref={FormRef}
                  key={item.Json.rootNode.id}
                >
                  <TextareaAutosize
                    key={item.Json.rootNode.id}
                    type="text"
                    className="input-text"
                    placeholder="Saudação..."
                    id="InputDesc"
                  />

                  {/* <button
                    type="submit"
                    onClick={() => Editar(item.Json.rootNode.id)}
                    id="inputDesc"
                  > */}
                  {/* <Checkbox
                    style={{ width: "1rem" }}
                    type="submit"
                    onClick={() => Editar(item.Json.rootNode.id)}
                    checked
                  /> */}

                  {loading ? (
                    <ColorRing
                      height={27}
                      width={25}
                      ariaLabel="loading"
                      wrapperStyle={{
                        marginLeft: "8.9rem",
                        marginBottom: "-1rem",
                        curso: "point",
                        width: "2rem",
                        zIndex: "99999",
                      }}
                    />
                  ) : (
                    <button
                      type="submit"
                      className="buttonIcon"
                      style={{
                        background: "transparent",
                        border: "none",
                        marginLeft: "7.9rem",
                        marginBottom: "-7rem",
                        curso: "point",
                        width: "0.5rem",
                      }}
                      onClick={() => Editar(item.Json.rootNode.id)}
                    >
                      <FcPlus
                        style={{
                          width: "2rem",
                        }}
                      />
                    </button>
                  )}
                  {/* <FcCheckmark /> */}

                  {/* </button> */}
                </form>
              );
            })}
          </div>
        ),
      },
      position: { x: 10, y: 30 },
    },
    //Já é Cliente
    {
      id: "mensagem-1",
      sourcePosition: "right",
      targetPosition: "left",
      data: {
        label: (
          <div>
            {inputList.map((item, index) => {
              return (
                <form
                  onSubmit={EditarAbc1}
                  className="form"
                  ref={FormRefAbc1}
                  key={item.Json.abc1.id}
                >
                  <TextareaAutosize
                    key={item.Json.abc1.id}
                    type="text"
                    className="input-text"
                    id="InputDescAbc1"
                    placeholder="Já e cliente..."
                    // value={item.Json.abc1.text}
                  />
                  {loading ? (
                    <ColorRing
                      height={27}
                      width={25}
                      ariaLabel="loading"
                      wrapperStyle={{
                        marginLeft: "8.9rem",
                        marginBottom: "-1rem",
                        curso: "point",
                        width: "2rem",
                        zIndex: "99999",
                      }}
                    />
                  ) : (
                    <button
                      type="submit"
                      className="buttonIcon"
                      style={{
                        background: "transparent",
                        border: "none",
                        marginLeft: "7.9rem",
                        marginBottom: "-7rem",
                        curso: "point",
                        width: "0.5rem",
                      }}
                      onClick={() => Editar(item.Json.rootNode.id)}
                    >
                      <FcPlus
                        style={{
                          width: "2rem",
                        }}
                      />
                    </button>
                  )}
                </form>
              );
            })}
          </div>
        ),
      },
      position: { x: 250, y: -70 },
    },
    // Não é cliente
    {
      id: "mensagem-2",
      sourcePosition: "right",
      targetPosition: "left",
      data: {
        label: (
          <div>
            {inputList.map((item, index) => {
              return (
                <form
                  // onSubmit={EditarAbc5}
                  className="form"
                  // ref={FormRefAbc5}
                  // key={item.Json.abc15.id}
                >
                  <TextareaAutosize
                    // key={item.Json.abc15.id}
                    type="text"
                    className="input-text"
                    id="InputDescAbc5"
                    placeholder="Não é cliente..."
                  />

                  {loading ? (
                    <ColorRing
                      height={27}
                      width={25}
                      ariaLabel="loading"
                      wrapperStyle={{
                        marginLeft: "8.9rem",
                        marginBottom: "-1rem",
                        curso: "point",
                        width: "2rem",
                        zIndex: "99999",
                      }}
                    />
                  ) : (
                    <button
                      type="submit"
                      className="buttonIcon"
                      style={{
                        background: "transparent",
                        border: "none",
                        marginLeft: "7.9rem",
                        marginBottom: "-7rem",
                        curso: "point",
                        width: "0.5rem",
                      }}
                      onClick={() => Editar(item.Json.rootNode.id)}
                    >
                      <FcPlus
                        style={{
                          width: "2rem",
                        }}
                      />
                    </button>
                  )}
                </form>
              );
            })}
          </div>
        ),
      },
      position: { x: 750, y: 150 },
    },

    // NÃO
    {
      id: "mensagem-3",
      sourcePosition: "right",
      targetPosition: "left",
      data: {
        label: <h1 className="nao">NÃO</h1>,
        // <div>
        //   {inputList.map((item, index) => {
        //     return (
        //       <select onSubmit={EditarAbc5} className="form">
        //         <TextareaAutosize
        //           key={item.Json.abc15.id}
        //           type="text"
        //           className="input-text"
        //           id="InputDesc5"
        //         />
        //         <option value="volvo">SIM</option>
        //       </select>
        //     );
        //   })}
        // </div>
        // ),
      },
      position: { x: 500, y: -119 },
    },

    // Qual plano
    {
      id: "mensagem-5",
      sourcePosition: "right",
      targetPosition: "left",

      data: {
        label: (
          <div>
            {inputList.map((item, index) => {
              return (
                <form
                  onSubmit={EditarAbc5}
                  className="form"
                  ref={FormRefAbc5}
                  key={item.Json.abc15.id}
                >
                  <TextareaAutosize
                    key={item.Json.abc15.id}
                    type="text"
                    className="input-text"
                    id="InputDescAbc5"
                    placeholder="Qual plano..."
                  />

                  {loading ? (
                    <ColorRing
                      height={27}
                      width={25}
                      ariaLabel="loading"
                      wrapperStyle={{
                        marginLeft: "8.9rem",
                        marginBottom: "-1rem",
                        curso: "point",
                        width: "2rem",
                        zIndex: "99999",
                      }}
                    />
                  ) : (
                    <button
                      type="submit"
                      className="buttonIcon"
                      style={{
                        background: "transparent",
                        border: "none",
                        marginLeft: "7.9rem",
                        marginBottom: "-7rem",
                        curso: "point",
                        width: "0.5rem",
                      }}
                      onClick={() => Editar(item.Json.rootNode.id)}
                    >
                      <FcPlus
                        style={{
                          width: "2rem",
                        }}
                      />
                    </button>
                  )}
                </form>
              );
            })}
          </div>
        ),
      },
      position: { x: 700, y: -129 },
    },

    // SIM
    {
      id: "mensagem-4",
      sourcePosition: "right",
      targetPosition: "left",
      data: {
        label: <h1 className="nao">SIM</h1>,
      },

      position: { x: 500, y: -59 },
    },

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

    // EMPRESARIAL
    {
      id: "mensagem-6",
      sourcePosition: "right",
      targetPosition: "left",
      data: {
        label: <h1 className="nao">EMPRESARIAL</h1>,
        // <div>
        //   {inputList.map((item, index) => {
        //     return (
        //       <select onSubmit={EditarAbc5} className="form">
        //         <TextareaAutosize
        //           key={item.Json.abc15.id}
        //           type="text"
        //           className="input-text"
        //           id="InputDesc5"
        //         />
        //         <option value="volvo">SIM</option>
        //       </select>
        //     );
        //   })}
        // </div>
        // ),
      },
      position: { x: 900, y: -120 },
    },

    // RESIDÊNCIAL
    {
      id: "mensagem-7",
      sourcePosition: "right",
      targetPosition: "left",
      data: {
        label: <h1 className="nao">RESIDÊNCIAL</h1>,
        // <div>
        //   {inputList.map((item, index) => {
        //     return (
        //       <select onSubmit={EditarAbc5} className="form">
        //         <TextareaAutosize
        //           key={item.Json.abc15.id}
        //           type="text"
        //           className="input-text"
        //           id="InputDesc5"
        //         />
        //         <option value="volvo">SIM</option>
        //       </select>
        //     );
        //   })}
        // </div>
        // ),
      },
      position: { x: 900, y: -61 },
    },
  ];

  // async function getLists() {
  //   await this.alertContent({ alertcriar: true }, () => {
  //     axios("http://localhost:3002/abc1")
  //       .then((res) => res.json())
  //       .then((result) =>
  //         this.alertContent({
  //           alertcriar: false,
  //           alldata: result,
  //         })
  //       )
  //       .catch(console.log);
  //   });
  // }
  // async function onSubmit2(e, id) {
  //   e.preventDefault();

  //   await axios
  //     .put("http://localhost:3000/abc1/2/?text=", {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       this.alertContent({
  //         singledata: {
  //           text: "",
  //           nome: "",
  //         },
  //       });
  //       getLists();
  //     });
  // }
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
        {/* {inputList.map((data) => {
          <list key={data.id}>
            <h1>{data.nome}</h1>
            <Button
              onClick={() => Deletar(data.id)}
              variant="contained"
              style={{ margin: "1rem", zIndex: "99999999" }}
            >
              Deletar
            </Button>
          </list>;
        })} */}
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
