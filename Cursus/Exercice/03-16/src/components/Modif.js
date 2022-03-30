import React from 'react';
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Modif = ({data, toto}) => {
    const initialState = {reference:Math.floor(Math.random() * 999999999) ,name: "", price:"", available:false, image:""};
    const [person, setPerson] = useState(initialState);
    const [Data, setData] = useState(data)
    const handleChange = (e) =>{
        console.log(e.target.value);
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        //const {name,value} = e.target;
        //setPerson({...person,nom: e.target.value})
        setPerson({...person,[name]:value ,reference:Math.floor(Math.random() * 999999999,)});
        console.log(person.reference);
    }

    useEffect(() => {
        toto(Data);
      });
   
    
    function apres(){
        setPerson(initialState);
         
    }

    const handleSubmit = (e) =>{ 
        e.preventDefault();       
        setData([person,...Data]); 
        toast.success("Produit ajouté");       
        apres()
        }
    

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group m-2">
                    <input type="text" id='name' name="name"  onChange={handleChange} className="form-control" placeholder="Nom de l'article" value={person.name} />
                </div>
                <div className="form-group m-2">
                    <input type="text" id='price' name="price" className="form-control" placeholder="Prix de l'article"onChange={handleChange} value={person.price} />
                </div>
                <div className="form-group m-2">
                    <input type="text" id='image' name="image" className="form-control" placeholder="Image de l'article" onChange={handleChange} value={person.image} />
                </div>
                <div className="form-group m-2">
                <input type="checkbox" name="available" id="available" checked={person.available}
                    onChange = {handleChange} />
                    <label htmlFor="available" 
                    >yenas ?</label>
                </div>
                <div className="form-group">
                    <button type="submit" className='btn btn-primary'>Soumettre</button>
                </div>
            </form>
            <ToastContainer
            position="top-center"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover />
        </>
    )
}

export default Modif;