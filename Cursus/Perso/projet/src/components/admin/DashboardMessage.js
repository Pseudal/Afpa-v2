import React from "react";
import { Container, Box, Grid, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import ProductServices from "../service/ProductServices";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import AuthService from "../service/AuthService";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DashMenu from "./DashMenu";

const DashMessage = () => {
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  const [expanded, setExpanded] = React.useState("");

  const handleclick = (panel) => {
    console.log(panel);
    console.log(expanded);
    setExpanded(expanded == panel ? "" : panel);
    console.log(panel);
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductServices.getMsg()
      .then((res) => res.data)
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);
  console.log(products);

  function del(index) {
    ProductServices.delMsg(index).then((data) => console.log(data));
    window.location.reload();
  }

  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
        className="mt-5 mb-5"
      >
        <Typography sx={{m: 5}} variant="h3" color="white" xs={12}>
          Messages reçu
        </Typography>
      </Container>
      <Container>
        
      
      <Grid justifyContent="center" container spacing={0}>
        {products && products.slice(0).reverse().map((msg) => (
            <Grid
              key={msg.id}
              item={true}
              sx={{
                mb: 5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              xs={3}
            >
              <Card sx={{ maxWidth: 250, textAlign: "center", minWidth: 250 }}>
                <CardHeader
                  sx={{ textAlign: "start" }}
                  avatar={<Avatar src={msg.avatar} />}
                  title={msg.nom}
                  subheader={`envoyé le: ${msg.date}`}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {msg.nom} nous contact pour:
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {msg.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    onClick={() => {
                      handleclick(`panel${msg.id}`);
                    }}
                    variant="contained"
                  >
                    Lire
                  </Button>
                  <Button
                  color="error"
                  onClick={() => {
                    if (window.confirm("êtes vous sûr ?")) {
                      del(msg.id);
                    }
                  }}
                    variant="contained"
                  >
                    Supp
                  </Button>
                </CardActions>
                <Collapse
                  in={expanded === `panel${msg.id}`}
                  timeout="auto"
                  unmountOnExit
                >
                  <CardContent>
                    <Typography paragraph>{msg.message}</Typography>
                    <Button color="success" variant="contained">Répondre</Button>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid> 
          ))}
      </Grid>
      </Container>
      <ToastContainer />
    </>
  );
};

export default DashMessage;
