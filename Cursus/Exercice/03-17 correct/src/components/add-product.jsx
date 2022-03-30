import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { uid } from 'uid';


const AddProduct = (props) => {
    const initialState = {name: "", price: 0, image: "", available: false};
    const [product, setProduct] = useState(initialState);
    const handleChange = (e) =>{
    let { name, value, checked, type } = e.target;
    value = type === 'checkbox' ? checked : value;
        setProduct({...product, [name]:value});
        console.log(product);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const prod = { reference: uid(), ...product};
        props.prodFunc(prod);
        console.log(prod);
        setProduct(initialState);
        toast.success(`Produit ajouté avec succès`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
  return (
    <div className='row'>
        
        <div className="col-4 offset-4">
            <div className="card">
                <div className="card-header"><h2>Ajout d'un produit</h2></div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Produit</label>
                            <input type="text" 
                            id='name' name='name' 
                            className="form-control" 
                            placeholder='Votre produit' 
                            onChange={handleChange}
                            value={product.name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Prix</label>
                            <input type="number" 
                            id='price' name='price' 
                            className="form-control" 
                            placeholder='Votre prix' 
                            onChange={handleChange} 
                            value={product.price} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Image</label>
                            <input type="text" 
                            id='image' name='image' 
                            className="form-control" 
                            placeholder='url...' 
                            onChange={handleChange} 
                            value={product.image} />
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" 
                            type="checkbox" value="" id="available" name='available'
                            onChange={handleChange}
                            checked={product.available} />
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
  )
}

export default AddProduct;