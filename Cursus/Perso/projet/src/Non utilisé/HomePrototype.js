import React from "react";
import { Container, Box, Grid, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import ProductServices from "../components/service/ProductServices";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import AuthService from "../components/service/AuthService";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";



const Home2 = () => {

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
    console.log(panel)
  };

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
        <Typography sx={{ mb: 2 }} variant="h3" color="white" xs={12}>
          Les articles du jour
        </Typography>
      </Container>
      <Grid justifyContent="center" container spacing={0}>
        {products &&
          products.map((article) => (
            <Grid
              key={article.id}
              item={true}
              sx={{ mb: 22.5, display: "flex", justifyContent: "center", alignItems:'center' }}
              xs={5}
            >
              <Card sx={{ maxWidth: 500, textAlign:"center" }}>
              <CardHeader 
                  sx={{textAlign:"start"}}
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
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expanded}
                    onClick={() => {
                      handleclick(`panel${article.id}`);
                    }}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded === `panel${article.id}`} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Suite</Typography>
                    <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add
                      saffron and set aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                      Heat oil in a (14- to 16-inch) paella pan or a large, deep
                      skillet over medium-high heat. Add chicken, shrimp and
                      chorizo, and cook, stirring occasionally until lightly
                      browned, 6 to 8 minutes. Transfer shrimp to a large plate
                      and set aside, leaving chicken and chorizo in the pan. Add
                      pimentón, bay leaves, garlic, tomatoes, onion, salt and
                      pepper, and cook, stirring often until thickened and
                      fragrant, about 10 minutes. Add saffron broth and
                      remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                      Add rice and stir very gently to distribute. Top with
                      artichokes and peppers, and cook without stirring, until
                      most of the liquid is absorbed, 15 to 18 minutes. Reduce
                      heat to medium-low, add reserved shrimp and mussels,
                      tucking them down into the rice, and cook again without
                      stirring, until mussels have opened and rice is just
                      tender, 5 to 7 minutes more. (Discard any mussels that
                      don’t open.)
                    </Typography>
                    <Typography>
                      Set aside off of the heat to let rest for 10 minutes, and
                      then serve.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          ))}
      </Grid>
      <ToastContainer />
    </>
  );
};

export default Home2;
