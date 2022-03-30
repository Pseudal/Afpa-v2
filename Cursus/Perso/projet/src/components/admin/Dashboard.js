import React from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { Button, Container, ButtonGroup, Typography, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import ProductServices from "../service/ProductServices";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DashMenu from "./DashMenu";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Dash = () => {
  const navigate = useNavigate();
  const [tabledata, setTabledata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/articles")
      .then((data) => data.json())
      .then((data) => setTabledata(data));
  }, []);

  function del(index) {
    ProductServices.delArticle(index).then((data) => console.log(data));
    window.location.reload();
  }

  return (
    <>
      <Typography textAlign="center" sx={{m: 5}} variant="h3" color="white" xs={12}>
          Administration des articles
      </Typography>
      <Container
        sx={{
          mt: 5,
          mb: 1,
          borderRadius: 5,
          textAlign: "center",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Link to={"/AddArticle"}>
            <IconButton color="primary" variant="contained"><AddIcon /></IconButton>
          </Link>
        </Box>
      </Container>
      <Box sx={{ textAlign: "center", bgcolor: "#ffffff", mx: 35, mb:5 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="center">Avatar</TableCell>
                <TableCell align="center">Nom</TableCell>
                <TableCell align="center">Paruption</TableCell>
                <TableCell align="center">Image</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {tabledata &&
              tabledata.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  
                  <TableCell align="left">{row.id}</TableCell>
                  <TableCell align="center"><img src={row.avatar} width={50}></img></TableCell>
                  <TableCell align="center">{row.nom}</TableCell>
                  <TableCell align="center">{row.paruption}</TableCell>
                  <TableCell align="center"><img src={row.img} width={50}></img></TableCell>
                  <TableCell align="center">
                    <Link state={{Produit: row, id: row.id}} to={'/modarticle'}><IconButton color="warning">
                      <EditIcon />
                    </IconButton></Link>
                    <IconButton color="error" onClick={() => {
                        if (window.confirm("êtes vous sûr ?")) {
                          del(row.id);
                        }
                      }}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box height="25px"></Box>
    </>
  );
};
export default Dash;
