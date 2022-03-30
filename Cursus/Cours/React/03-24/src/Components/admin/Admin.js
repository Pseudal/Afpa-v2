import React, { useEffect, useState } from "react";
import { FaPlusSquare, FaTrash, FaEdit, FaHome } from "react-icons/fa";
import { BsXCircleFill, BsCheckCircleFill } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { Button, Table, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ProductServices from "../ProductServices";
import AuthService from "../../services/AuthService";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    ProductServices.getProducts2()
      .then((res) => res.data)
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  function del(index) {
    ProductServices.delProduct(index).then((data) => console.log(data));
    window.location.reload();
  }

  const handleClic = () => {
    AuthService.logout()
    navigate('/')
  }

  return (
    <>
      <h1 className="bg-secondary text-white text-center">Administration</h1>
      <Button onClick={handleClic} variant="danger" className=" float-end me-5">
        <MdLogout />
      </Button>
      <ol className="list-unstyled ms-3 d-flex">
        <li className="text_decoration-none">
          <Link to="/">
            <FaHome />
          </Link>
        </li>
        <li className="ms-1"> / Admin</li>
      </ol>

      <Container className="mt-5 text-center">
        <div className="text-end">
          <Link className="btn btn-warning mb-1" to={`/AddProduct`}>
            <FaPlusSquare /> Add
          </Link>
        </div>
        <Table variant="dark" striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Produit</th>
              <th>Prix</th>
              <th>Image</th>
              <th>Dispo ?</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.nom}</td>
                  <td>{product.prix}</td>
                  <td>
                    <img src={product.image} width={50} alt="" />
                  </td>
                  <td>
                    {product.avaible ? (
                      <BsCheckCircleFill className="text-success fs-4" />
                    ) : (
                      <BsXCircleFill className="text-danger fs-4" />
                    )}
                  </td>
                  <td>
                    <Button
                      className="m-1"
                      variant="danger"
                      onClick={() => {
                        if (window.confirm("êtes vous sûr ?")) {
                          del(product.id);
                        }
                      }}
                    >
                      <FaTrash />
                    </Button>
                    <Link
                      className="m-1"
                      state={{ Produit: product, id: product.id }}
                      to={`/ModifProduct`}
                    >
                      <Button variant="warning">
                        <FaEdit />
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Admin;
