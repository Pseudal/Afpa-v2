import React, { useEffect, useState } from "react";
import { FaPlusSquare } from 'react-icons/fa';
import { Card, Button, Table, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductServices from "../ProductServices";

const Admin = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductServices.getProducts2()
      .then((res) => res.data)
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  console.log(products);

  return (
    <>
      <Container className="mt-5 text-center">
        <div className="text-end">
          <Link className="btn btn-warning mb-1" to={`/AddProduct`}><FaPlusSquare/> Add</Link>
        </div>
        <Table variant="dark" striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Produit</th>
              <th>Prix</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products && products.map(product => (
              <tr key={product.id}>
                 <td>{product.id}</td>
                 <td>{product.nom}</td>
                 <td>{product.prix}</td>
                 <td><img src={product.image} width={50} alt="" /></td>
                 <td>{product.id}</td> 
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Admin;
