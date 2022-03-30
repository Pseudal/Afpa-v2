import React, { useState } from "react";
import { BsXCircleFill, BsCheckCircleFill } from "react-icons/bs";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { uid } from "uid";
import "./App.css";

//stock l'index actuel en global
let test2 = 0;

const TableProduct = ({ prods, removeProduct, prodFunc, edit }) => {
  //gère les données
  const initialState = { name: "", price: 0, image: "", available: false };
  const [product, setProduct] = useState(initialState);
  //passe de ajout à edit              
  const [isOpen, setIsOpen] = useState(false);

  //clic pour passer de ajout à edit
  const onClickHeader = (test) => {
    console.log(test);
    test2 = test;
    setProduct( prods[test2] );
    if(isOpen)
      setProduct(initialState)
    setIsOpen(!isOpen);
  };


  //changement de valeur ajout
  const handleChange = (e) => {
    console.log(product);
    let { name, value, checked, type } = e.target;
    value = type === "checkbox" ? checked : value;
    setProduct({ ...product, [name]: value });
    console.log(product);
  };

  //click sur le bouton "soumettre"
  const handleSubmit = (e) => {
    e.preventDefault();
    const prod = { reference: uid(), ...product };
    prodFunc(prod);
    console.log(prod);
    setProduct(initialState);
  };

  //changement de valeur edit
  const handleEdit = (e) => {
    let { name, value, checked, type } = e.target;
    value = type === "checkbox" ? checked : value;
    setProduct({ ...product, [name]: value });
  
  };
 //click sur le bouton "editer"
  const editSubmit = (e) => {
    e.preventDefault();
    const prod = product;
    edit(prod, test2);
    setProduct(initialState);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`row ${isOpen ? "nope" : "visible"}`}> {/* editer */}
        <div className="col-4 offset-4">
          <div className="card">
            <div className="card-header">
              <h2>Modifier un produit</h2>
            </div>
            <div className="card-body">
              <form onSubmit={editSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Produit</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Votre produit"
                    onChange={handleEdit}
                    value={product.name}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Prix</label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    className="form-control"
                    placeholder="Votre prix"
                    onChange={handleEdit}
                    value={product.price}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="image">Image</label>
                  <input
                    type="text"
                    id="image"
                    name="image"
                    className="form-control"
                    placeholder="url..."
                    onChange={handleEdit}
                    value={product.image}
                  />
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="available"
                    name="available"
                    onChange={handleEdit}
                    checked={product.available}
                  />
                  <label className="form-check-label" htmlFor="available">
                    Disponibilité
                  </label>
                </div>
                <div className="flex">
                  <button className="btn btn-warning col-12">Editer</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={`row ${isOpen ? "visible" : "nope"}`}> {/* ajouter */}
        <div className="col-4 offset-4">
          <div className="card">
            <div className="card-header">
              <h2>Ajout d'un produit</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Produit</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Votre produit"
                    onChange={handleChange}
                    value={product.name}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Prix</label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    className="form-control"
                    placeholder="Votre prix"
                    onChange={handleChange}
                    value={product.price}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="image">Image</label>
                  <input
                    type="text"
                    id="image"
                    name="image"
                    className="form-control"
                    placeholder="url..."
                    onChange={handleChange}
                    value={product.image}
                  />
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="available"
                    name="available"
                    onChange={handleChange}
                    checked={product.available}
                  />
                  <label className="form-check-label" htmlFor="available">
                    Disponibilité
                  </label>
                </div>
                <button className="btn btn-primary col-12">Soumettre</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div>
          <table className="table table-striped table-bordered text-center"> {/* tableau */}
            <thead>
              <tr>
                <th>#</th>
                <th>Article</th>
                <th>Prix</th>
                <th>Image</th>
                <th>Disponibilité</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {prods.map((prod, index) => (
                <tr key={prod.reference}>
                  <td>{prod.reference}</td>
                  <td>{prod.name}</td>
                  <td>{prod.price}</td>
                  <td>
                    <img
                      src={`./images/${prod.image}`}
                      className="img-fluid rounded-start"
                      width={50}
                      alt="..."
                    />
                  </td>
                  <td>
                    {prod.available ? (
                      <BsCheckCircleFill className="text-success fs-4" />
                    ) : (
                      <BsXCircleFill className="text-danger fs-4" />
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-danger m-1"
                      onClick={() => {
                        if (window.confirm("Etes vous sûr ...")) {
                          removeProduct(index);
                        }
                      }}
                    >
                      <FaTrashAlt />
                    </button>
                    <button
                      className="btn btn-warning m-1"
                      onClick={() => {
                        onClickHeader(index);
                      }}
                    >
                      <FaEdit />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TableProduct;