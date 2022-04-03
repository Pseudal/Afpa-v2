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
  nom: Yup.string().required("pas de champ vide svp"),
  paruption: Yup.string().required("pas de champ vide svp"),
  img: Yup.string().required("pas de champ vide svp"),
  avatar: Yup.string().required("pas de champ vide svp"),
  description: Yup.string().required("pas de champ vide svp"),
});

const AddArticle = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      description:"",
      nom: "",
      avatar: "",
      img: "",
      paruption: "",
      id: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        ProductServices.addArticle(values).then(data => console.log(data))
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
                  name="avatar"
                  id="avatar"
                  label="Avatar"
                  value={formik.values.avatar}
                  onChange={formik.handleChange}
                  error={formik.touched.avatar && Boolean(formik.errors.avatar)}
                  helperText={formik.touched.avatar && formik.errors.avatar}
                />
                <TextField
                  type="text"
                  sx={{ mb: 2.5, minWidth: "100%" }}
                  name="nom"
                  id="nom"
                  label="Nom de l'article"
                  value={formik.values.nom}
                  onChange={formik.handleChange}
                  error={formik.touched.nom && Boolean(formik.errors.nom)}
                  helperText={formik.touched.nom && formik.errors.nom}
                />
                <TextField
                  type="text"
                  sx={{ mb: 2.5, minWidth: "100%" }}
                  id="paruption"
                  label="dâte de paruption"
                  name="paruption"
                  value={formik.values.paruption}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.paruption && Boolean(formik.errors.paruption)
                  }
                  helperText={
                    formik.touched.paruption && formik.errors.paruption
                  }
                />
                <TextField
                  type="text"
                  sx={{ mb: 2.5, minWidth: "100%" }}
                  id="img"
                  label="Image de l'article"
                  name="img"
                  value={formik.values.img}
                  onChange={formik.handleChange}
                  error={formik.touched.img && Boolean(formik.errors.img)}
                  helperText={formik.touched.img && formik.errors.img}
                />
                <TextField
                  type="text"
                  sx={{ mb: 2.5, minWidth: "100%" }}
                  id="description"
                  label="La description"
                  name="description"
                  multiline
                  maxRows={5}
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  error={formik.touched.description && Boolean(formik.errors.description)}
                  helperText={formik.touched.description && formik.errors.description}
                />

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

export default AddArticle;
