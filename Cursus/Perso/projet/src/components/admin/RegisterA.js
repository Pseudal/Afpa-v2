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

const validationSchema = Yup.object().shape({
  email: Yup.string()
    // .email("email invalide"),
    .required("l'email est obligatoire"),
  password: Yup.string()
    .required("Mot de passe est obligatoire")
    .min(3, "3 caractères minimum"),
  nom:Yup.string()
  .required("l'email est obligatoire"),
  //     .max(50, "50 caractères maximum")
  //     .matches(/[a-z]+/, "One lowercase character")
  //     .matches(/[A-Z]+/, "One uppercase character")
  //     .matches(/[@$!%*#?&]+/, "One special character")
  //     .matches(/\d+/, "One number"),
});

const RegisterA = () => {
  const navigate = useNavigate();
  const notify = () =>
    toast.error("Login/Password incorrect", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const formik = useFormik({
    initialValues: {
      nom:"",
      email: "",
      password: "",
      admin: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      navigate("/");
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
        <Card sx={{ width: "300px" }} variant="outlined">
          <React.Fragment>
            <CardContent>
              <Typography variant="h4" component="div" sx={{ mb: 2.5 }}>
                New user
              </Typography>
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  type="text"
                  sx={{ mb: 2.5, minWidth: "100%" }}
                  name="nom"
                  id="nom"
                  label="Votre nom"
                  value={formik.values.nom}
                  onChange={formik.handleChange}
                  error={formik.touched.nom && Boolean(formik.errors.nom)}
                  helperText={formik.touched.nom && formik.errors.nom}
                />
                <TextField
                  type="text"
                  sx={{ mb: 2.5, minWidth: "100%" }}
                  name="email"
                  id="email"
                  label="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  type="password"
                  sx={{ mb: 2.5, minWidth: "100%" }}
                  id="Password"
                  label="Password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.email && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
                <Container sx={{ mb: 2.5, minWidth: "100%" }}>
                  <FormGroup >
                    <FormControlLabel sx={{ display: "flex", justifyContent: 'center' }}
                      control={
                        <Checkbox
                          checked={formik.values.admin}
                          value={formik.values.admin}
                          name="admin"
                          onChange={formik.handleChange}
                          inputProps={{ "aria-label": "controlled" }}
                        />
                      }
                      label="Admin ?"
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

export default RegisterA;
