import React from "react";
import { useEffect, useState } from "react";
import ProductServices from "./ProductServices";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    ProductServices.getProducts2()
      .then((res) => res.data)
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);
  console.log(products);

  return (
    <div className="d-flex justify-content-center">
      <Container bg="dark" className="m-2">
        <Row>
          {products &&
            products.map((product) => (
              <Col
                className="d-flex justify-content-center mb-5 mt-3"
                sm="4"
                key={product.id}
              >
                <Card bg="secondary" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.nom}</Card.Title>
                    <Card.Text>{product.prix}€</Card.Text>
                    <Link state={{ Produit: product}} to={`/ItemView`}><Button variant="dark">Plus d'information</Button></Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
