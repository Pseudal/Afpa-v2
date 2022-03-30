import React, { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const initialstate = { email: "", password: "" };
  const [user, setUser] = useState(initialstate);
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
  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (AuthService.login(user.email, user.password)) {
      navigate("/admin");
    } else {
      notify();
    }
  };
  return (
    <>
      <Container className="m-5">
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Card className="text-center" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Connectez vous</Card.Title>
                <form onSubmit={handleSubmit} action="">
                  <div className="form-group mb-3">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="email"
                      value={user.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      placeholder="password"
                      value={user.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <Button
                      type="submit"
                      variant="dark"
                      className="btn btn-dark col-12"
                    >
                      Connexion
                    </Button>
                  </div>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </>
  );
};

export default Login;
