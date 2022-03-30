import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ProductServices from "../ProductServices";
import { useLocation } from 'react-router-dom'

const ModProduct = () => {
    const location = useLocation()
    const { Produit, id } = location.state
    console.log(id);
    const inistialState = {nom: Produit.nom, prix: Produit.prix, image: Produit.image, avaible:Produit.avaible}
    const [product, setProduct] = useState(inistialState)
    const navigate = useNavigate()

    function reload(){
        window.location.reload(); 
    }

    console.log(product.avaible);

    const handleChange = (e) => {
        let { name, value, checked, type } = e.target;                                      
        value = type === 'checkbox' ? checked : value; 
        setProduct({ ...product, [name]: value });
        console.log(product);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(product);
        ProductServices.modProduct(product, id).then(data => console.log(data))
                                               .catch(err=>console.error(err))
        navigate('/admin')
            reload()                           
        setProduct(inistialState);
    }

    return (
        <>
        <h1 className="bg-secondary text-white text-center">Administration</h1>
        <div className="d-flex justify-content-center text-center">
          <Card style={{ width: "18rem" }}>
              <Card.Body>
              <Card.Title>Modifier un produit</Card.Title>
                  <form onSubmit={handleSubmit}>
                      <div className="form-group">
                          <input className="form-control" type="text" name="nom" id="nom" placeholder="Nom du produit" onChange={handleChange} defaultValue={Produit.nom} />
                      </div>
                          <div className="form-group">
                      <input className="form-control" type="number" name="prix" id="prix" placeholder="prix" onChange={handleChange} defaultValue={Produit.prix} />
                          </div>
                      <div className="form-group">
                          <input className="form-control" type="url" name="image" id="image" placeholder="http://..." onChange={handleChange} defaultValue={Produit.image} />
                      </div>
                      <div className="">
                          <input className="form-check-input m-1" type="checkbox" name="avaible" id="avaible" placeholder="disponible ?" onChange={handleChange} checked={product.avaible}  />
                          <label className="form-check-label" htmlFor="avaible">Disponible ?</label>
                      </div>
                      <div className="form-group">
                          <button className="btn btn-warning col-12 mb-1" >Modifier</button>
                          <Button variant="dark" className="col-12" onClick={() => {navigate('/admin')}}>Annuler</Button>
                      </div>
                  </form>
              </Card.Body>
          </Card>
        </div>
      </>
    );
};

export default ModProduct;