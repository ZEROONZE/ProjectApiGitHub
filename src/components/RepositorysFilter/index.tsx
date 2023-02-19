import { Box } from "@mui/material";
import { RepoProps } from "../../Types/user";
import { Container } from "./styles";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { apiGitHub } from "../../services/Api";
import { useState } from "react";

export function Repositorys({ id, name, description, html_url }: RepoProps) {
  const [modalRepository, setModalRepository] = useState<RepoProps[] | null>();

  async function handleOpenModalView() {
    const res = await apiGitHub
      .get(`/users/ZEROONZE/repos`)

      .then((response) => {
        console.log(response.data);
        setModalRepository(response.data);
      })
      .catch((err) => {
        if (err.response.status === 404 || err.response.status === 401) {
          setModalRepository(null);

          return;
        }
        if (err.response.status === 403) {
          setModalRepository(null);

          return;
        }
        console.log(err.response.status);
        console.log(err);
        console.log(err.data);
        console.log(err.response.status);
      });
  }

  const columns: GridColDef[] = [
    { field: id, headerName: "ID", width: 70 },
    { field: name, headerName: "Name", width: 130 },
    {
      field: description,
      headerName: "Descrição 2",
      width: 130,
      sortable: false,
      valueGetter: (params: GridValueGetterParams) => `${
        params.getValue(params.id, name) || ""
      }
    
    ${params.getValue(params.id, description || "")}`,
    },
  ];

  const rows = modalRepository?.map((item) => [
    {
      id: modalRepository.length,
      lastName: item.name,
      firstName: item.description,
    },
  ]);
  return (
    <Container>
      <a href={html_url}>
        <Box sx={{ height: 400, width: "800px" }}>
          <DataGrid
            rows={[rows]}
            columns={columns}
            pageSize={2}
            rowsPerPageOptions={[2]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
            getRowId={() => Math.floor(Math.random() * 100000000)}
          />
        </Box>
        <button onClick={handleOpenModalView}>buscar</button>
      </a>
    </Container>
  );
}
