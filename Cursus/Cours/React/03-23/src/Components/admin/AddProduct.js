import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ProductServices from "../ProductServices";

const AddProduct = () => {

    function reload(){
        window.location.reload(); 
    }

    const inistialState = {nom: "", prix: 0, image: "", avaible:false}
    const [product, setProduct] = useState(inistialState)
    const navigate = useNavigate()
    const handleChange = (e) => {
        let { name, value, checked, type } = e.target;                                      
        value = type === 'checkbox' ? checked : value; 
        setProduct({ ...product, [name]: value });
        console.log(product);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(product);
        ProductServices.addProduct(product).then(data => console.log(data))
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
            <Card.Title>Ajout d'un produit</Card.Title>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input className="form-control" type="text" name="nom" id="nom" placeholder="Nom du produit" onChange={handleChange} />
                    </div>
                        <div className="form-group">
                    <input className="form-control" type="number" name="prix" id="prix" placeholder="prix" onChange={handleChange} />
                        </div>
                    <div className="form-group">
                        <input className="form-control" type="url" name="image" id="image" placeholder="http://..." onChange={handleChange} />
                    </div>
                    <div className="">
                        <input className="form-check-input m-1" type="checkbox" name="avaible" id="avaible" placeholder="disponible ?" onChange={handleChange} />
                        <label className="form-check-label" htmlFor="avaible">Disponible ?</label>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary col-12 mb-1">Accepter</button>
                        <Button variant="dark" className="col-12" onClick={() => {navigate('/admin')}}>Annuler</Button>
                    </div>
                </form>
            </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default AddProduct;
