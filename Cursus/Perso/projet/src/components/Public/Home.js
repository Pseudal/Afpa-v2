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

const Home = () => {


  const [products, setProducts] = useState([]);
  const token = AuthService.checkToken();
  const Admin = AuthService.checkAdmin();

  const Unconnected = () =>
    toast.error("Vous devez vous connecter pour faire ceci", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    ProductServices.getArticle()
      .then((res) => res.data)
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);
  console.log(products);

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
        <Typography sx={{ m: 5 }} variant="h3" color="white" xs={12}>
          Les articles du jour
        </Typography>
      </Container>
      <Grid justifyContent="center" container spacing={0}>
        {products &&
          products.map((article) => (
            <Grid
              key={article.id}
              item={true}
              sx={{ mb: 10, display: "flex", justifyContent: "center" }}
              xs={4}
            >
              <Card sx={{ maxWidth: 500 }}>
                <CardHeader
                  avatar={<Avatar src={article.avatar} />}
                  title={article.nom}
                  subheader={article.paruption}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={article.img}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {article.description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Box sx={{ minWidth: "20%" }}>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </Box>
                  <Box
                    sx={{
                      minWidth: "80%",
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    {token || Admin ? (
                      <Link state={{ Article: article }} to={"/more"}>
                        <Button sx={{ mr: 0 }} variant="contained">
                          Continuer
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        variant="contained"
                        color="error"
                        onClick={Unconnected}
                      >
                        Continuer
                      </Button>
                    )}
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
      <ToastContainer />
    </>
  );
};

export default Home;
