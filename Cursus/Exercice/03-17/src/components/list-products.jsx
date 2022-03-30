import React from 'react';
import { BsXCircleFill } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";

const ListProducts = ({ prods }) => {
    return (
        <div className='container'>
            <div className='row'>
                <h1>Liste des produits</h1>
                {prods.map((pr) => (
                    <div key={pr.reference} className="card m-2 col-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={`./images/${pr.image}`} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{pr.name}</h5>
                                    <p className="card-text fw-bold text-danger">{`Prix:${pr.price} €`}</p>
                                    <p className="card-text">
                                        Disponibilité:  {
                                            pr.available ? <BsCheckCircleFill className="text-success fs-4" /> : <BsXCircleFill className="text-danger fs-4" />

                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                )
                )}
            </div>
        </div>
    )
}

export default ListProducts