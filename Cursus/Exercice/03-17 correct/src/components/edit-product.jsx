import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProduct = (props) => {
    const initialState = { name: "", price: 0, image: "", available: false };
    const [product, setProduct] = useState(props.editP);
    useEffect(
        () => {
            setProduct(props.editP)
        },
        [props]
    );
    const handleChange = (e) => {
        let { name, value, checked, type } = e.target;
        value = type === 'checkbox' ? checked : value;
        setProduct({ ...product, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.update(product, props.index);
        console.log(product);
        toast.success(`Produit modifié avec succès`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    console.log(product)
    return (
        <div className='row'>

            <div className="col-4 offset-4">
                <div className="card">
                    <div className="card-header"><h2>Edit d'un produit</h2></div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="reference">Référence</label>
                                <input type="text"
                                    id='reference' name='reference'
                                    className="form-control"
                                    placeholder='Votre produit'
                                    readOnly
                                    onChange={handleChange}
                                    value={product.reference} />
                            </div>
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
                            <button className="btn btn-warning col-12">Modifier</button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}

export default EditProduct;