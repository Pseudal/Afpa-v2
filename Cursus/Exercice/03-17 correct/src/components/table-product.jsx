import React from 'react';
import { BsXCircleFill, BsCheckCircleFill } from "react-icons/bs";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const TableProduct = ({ prods, removeProduct, edit }) => {

  return (
    <div className='container mt-5'>
      <div>
        <table className='table table-striped table-bordered text-center'>
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
                <td><img src={`./images/${prod.image}`} className="img-fluid rounded-start" width={50} alt="..." /></td>
                <td>{
                  prod.available ? <BsCheckCircleFill className="text-success fs-4" /> : <BsXCircleFill className="text-danger fs-4" />
                }</td>
                <td>
                  <button className='btn btn-primary' onClick={()=>edit(prod,index)}><FaEdit /></button>
                  <button className='btn btn-danger'
                    onClick={() => {
                      if (window.confirm('Etes vous sûr ...')) { removeProduct(index) }
                    }
                    }><FaTrashAlt /></button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default TableProduct