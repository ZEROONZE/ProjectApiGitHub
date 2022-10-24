//import React, { useEffect, useState } from "react";
import React from "react";

import axios from "axios";

export const Mostrar = () => {
  //const [id, setId] = React.useState([]);
  const [id, setId] = React.useState([]);

  React.useEffect(() => {
    // getAllUser();
    getUser();
  }, []);

  const getUser = async () => {
    const api_response = await axios
      .get("http://localhost:3000/rootNode", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => console.log(result.data));
    const my_user = await api_response.json();
    console.log(my_user);
    setId(my_user);
  };
  return (
    <div className="App">
      <h1>MAP list array objeto JSON</h1>
      <h2>Wellcome User!</h2>
      <h1>Users</h1>
      <ul>
        {id.map((item) => (
          <li key="item.id">
            {item.id} - {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
