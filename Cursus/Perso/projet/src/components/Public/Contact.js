import {
  Container,
  TextField,
  Grid,
} from "@mui/material";
import React from "react";
import {useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as Yup from "yup";
import { useFormik} from "formik";
import "react-toastify/dist/ReactToastify.css";
import ProductServices from "../service/ProductServices";
import Map from "./Map";
import Contactinfo from "./Contactinfo";
import DoneIcon from '@mui/icons-material/Done';

const validationSchema = Yup.object().shape({
  nom: Yup.string().required("Ajoutez un nom svp").max(25),
  email: Yup.string()
    .required("Ajoutez votre email svp")
    .email("Entrez un mail valide"),
  message: Yup.string().required("Ajoutez votre message svp").min(50).max(500),
  description: Yup.string().required("Ajoutez votre message svp").max(50),
});

const Contact = () => {

  const [send, setSend] = useState(false);

  let utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
  const formik = useFormik({
    initialValues: {
      nom: "",
      email: "",
      message: "",
      commande:"",
      description:"",
      date: utc
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      ProductServices.addMessage(values)
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
      setSend(true)
    },
  });
  
  return (
    <>
      <Typography
        sx={{ m: 5, mb: 5 }}
        textAlign="center"
        variant="h2"
        color="white"
      >
        CONTACT
      </Typography>
      <Typography textAlign="center" paragraph color="white">
        Une question ? une réclamation?
      </Typography>
      <Typography textAlign="center" paragraph color="white">
        Contactez nous !
      </Typography>
      <Typography textAlign="center" paragraph color="white">
        Nous sommes à votre disposition ! 7j/7, 24h/24
      </Typography>
      <Grid sx={{mb:!send ? 0 : 24}} justifyContent="center" container spacing={0}>
        <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={4}>
          <Map />
        </Grid>
        <Grid sx={{ display: "flex", justifyContent: "center" }} item xs={4}>
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 8,
              mb: 7.5,
              textAlign: "center",
            }}
          >
            <Card sx={{ width: "400px", minHeight:"478", minWidth:"366", display:`${send ? "none" : "block"}` }} variant="outlined">
              <React.Fragment>
                <CardContent>
                  <Typography variant="h4" component="div" sx={{ mb: 2.5 }}>
                    Nous contacter
                  </Typography>
                  <form onSubmit={formik.handleSubmit}>
                    <TextField
                      type="text"
                      sx={{ mb: 2.5, minWidth: "100%" }}
                      name="nom"
                      id="nom"
                      label="Votre nom*"
                      value={formik.values.nom}
                      onChange={formik.handleChange}
                      error={formik.touched.nom && Boolean(formik.errors.nom)}
                      helperText={formik.touched.nom && formik.errors.nom}
                    />
                    <TextField
                      type="text"
                      sx={{ mb: 2.5, minWidth: "100%" }}
                      id="email"
                      label="Votre mail*"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                      type="text"
                      sx={{ mb: 2.5, minWidth: "100%" }}
                      id="commande"
                      label="Votre numéro de commande (facultatif)"
                      name="commande"
                      value={formik.values.commande}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.commande && Boolean(formik.errors.commande)
                      }
                      helperText={formik.touched.commande && formik.errors.commande}
                    />
                    <TextField
                      type="text"
                      sx={{ mb: 2.5, minWidth: "100%" }}
                      id="description"
                      label="Pourquoi vous nous contactez ?"
                      name="description"
                      value={formik.values.description}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.description && Boolean(formik.errors.description)
                      }
                      helperText={formik.touched.description && formik.errors.description}
                    />
                    <TextField
                      sx={{ mb: 2.5, minWidth: "100%" }}
                      id="message"
                      label="Votre message*"
                      name="message"
                      multiline
                      maxRows={5}
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.message && Boolean(formik.errors.message)
                      }
                      helperText={
                        formik.touched.message && formik.errors.message
                      }
                    />
                    <Button type="submit" color="success" variant="outlined">
                      Accepter
                    </Button>
                  </form>
                </CardContent>
              </React.Fragment>
            </Card>
            <Card sx={{ width: "400px", minHeight:"500", minWidth:"366", display:`${!send ? "none" : "flex"}`, justifyContent:"center", alignItems:'center', flexDirection:"column" }} variant="outlined">
              <Typography>
                <DoneIcon sx={{fontSize:"100px"}} color="success" />
              </Typography>
              <Typography paragraph variant="h3">Merci!</Typography>
              <Typography paragraph>Votre message à bien été envoyé</Typography>
              <Typography paragraph>Nous vous répondrons très prochainement</Typography>
            </Card>
          </Container>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          item
          xs={4}
        >
          <Contactinfo />
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
