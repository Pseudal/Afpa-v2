import React from "react";
import { useLocation } from "react-router-dom";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import {BsXCircleFill, BsCheckCircleFill  } from 'react-icons/bs';

const ItemView = () => {
  const location = useLocation();
  const { Produit } = location.state;
  console.log(Produit);

  return (
    <div className="d-flex justify-content-center mt-5">
      <Card className="text-center" style={{ width: "25rem" }}>
        <Card.Img variant="top" src={Produit.image} />
        <Card.Body>
          <Card.Title>{Produit.nom}</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit laudantium blanditiis tempora, quisquam soluta necessitatibus.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Référence: {Produit.id}</ListGroupItem>
          <ListGroupItem>{Produit.prix}€</ListGroupItem>
          <ListGroupItem>Disponible: {Produit.avaible ? <BsCheckCircleFill className="text-success fs-4"/> : <BsXCircleFill className="text-danger fs-4"/>}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="/"><Button variant="dark">Home</Button></Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemView;
