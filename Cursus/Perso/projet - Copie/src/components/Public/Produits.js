import React from "react";
import { Container, Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ProductServices from "../service/ProductServices";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AuthService from "../service/AuthService";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { ToastContainer, toast } from "react-toastify";

const Produits = () => {

    const token = AuthService.checkToken();
    const Admin = AuthService.checkAdmin();
    const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductServices.getProducts2()
      .then((res) => res.data)
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);
  console.log(products);

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
  const Success = () =>
  toast.success("Ajouté au panier avec succée", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined, 
  });

  return (
    <>
      <Grid className="mt-5 mb-5" container justifyContent="center">
        <Typography sx={{m: 5}} variant="h3" color="white">
          Nos Produits
        </Typography>
      </Grid>
      <Grid justifyContent="center" container spacing={2}>
      {products && products.map((product) => (
        <Grid key={product.id} item={true} sx={{ mx: 3, display: "flex", justifyContent: 'center', mb:7.5  }} xs={2.5}>
          <Card sx={{ maxWidth: 345, textAlign: "center" }}>
            <CardMedia
              component="img"
              height="140"
              image={product.image}
              alt={product.nom}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.nom}
              </Typography>
              <Typography  variant="body2" color="text.secondary">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, omnis!
              </Typography>
              <Typography sx={{ borderTop: 1, mt:1, pt:1 }} variant="body1" color="text.secondary">
                Prix: {product.prix}€
              </Typography>
              <Typography sx={{ borderTop: 1, mt:1, pt:1 }} variant="body1" color="text.secondary">
                En stock? {product.avaible ? (
                      <CheckCircleRoundedIcon color="success" />
                    ) : (
                      <CancelRoundedIcon color="error" />
                    )}
              </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: 'center', mt:-1  }}>
            {token || Admin ? (
                    <Button variant="contained" onClick={Success} >Acheter</Button>) : (
                        <Button variant="contained" color="error" onClick={Unconnected} >Acheter</Button>
                    )}
            </CardActions>
          </Card>
        </Grid>
        ))}
      </Grid>
      <ToastContainer />
    </>
  );
};

export default Produits;
