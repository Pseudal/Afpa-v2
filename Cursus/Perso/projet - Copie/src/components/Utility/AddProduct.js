import {
  Container,
  FormLabel,
  TextField,
  FormControl,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as Yup from "yup";
import { useFormik, getIn } from "formik";
import AuthService from "../service/AuthService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ProductServices from "../service/ProductServices";

const validationSchema = Yup.object().shape({
  nom: Yup.string().required("Ajoutez un nom svp"),
  prix: Yup.string().required("Ajoutez un prix svp"),
  image: Yup.string().required("Lien de l'image"),
});

const AddProduct = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      nom: "",
      prix: "",
      image: "",
      avaible: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        ProductServices.addProduct(values).then(data => console.log(data))
        .catch(err=>console.error(err))
        navigate('/Dashboard') 
        window.location.reload(); 
    },
  });

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 10,
          textAlign: "center",
        }}
      >
        <Card sx={{ width: "400px" }} variant="outlined">
          <React.Fragment>
            <CardContent>
              <Typography variant="h4" component="div" sx={{ mb: 2.5 }}>
                Nouveau produit
              </Typography>
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  type="text"
                  sx={{ mb: 2.5, minWidth: "100%" }}
                  name="nom"
                  id="nom"
                  label="Nom du produit"
                  value={formik.values.nom}
                  onChange={formik.handleChange}
                  error={formik.touched.nom && Boolean(formik.errors.nom)}
                  helperText={formik.touched.nom && formik.errors.nom}
                />
                <TextField
                  type="number"
                  sx={{ mb: 2.5, minWidth: "100%" }}
                  id="prix"
                  label="Prix du produit"
                  name="prix"
                  value={formik.values.prix}
                  onChange={formik.handleChange}
                  error={formik.touched.prix && Boolean(formik.errors.prix)}
                  helperText={formik.touched.prix && formik.errors.prix}
                />
                <TextField
                  type="text"
                  sx={{ mb: 2.5, minWidth: "100%" }}
                  id="image"
                  label="Image du produit"
                  name="image"
                  value={formik.values.image}
                  onChange={formik.handleChange}
                  error={formik.touched.image && Boolean(formik.errors.image)}
                  helperText={formik.touched.image && formik.errors.image}
                />
                <Container sx={{ mb: 2.5, minWidth: "100%" }}>
                  <FormGroup>
                    <FormControlLabel
                      sx={{ display: "flex", justifyContent: "center" }}
                      control={
                        <Checkbox
                          checked={formik.values.avaible}
                          value={formik.values.avaible}
                          name="avaible"
                          onChange={formik.handleChange}
                          inputProps={{ "aria-label": "controlled" }}
                        />
                      }
                      label="Disponible ?"
                    />
                  </FormGroup>
                </Container>

                <Button type="submit" color="success" variant="outlined">
                  Accepter
                </Button>
              </form>
            </CardContent>
          </React.Fragment>
        </Card>
      </Container>
      <ToastContainer />
    </>
  );
};

export default AddProduct;
