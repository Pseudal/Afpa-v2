import React, { useState } from 'react';

const Form = () => {
    const initialState = {nom: "", prenom:"prenom", formation:"", isChecked:false};
    const [person, setPerson] = useState(initialState);
    const handleChange = (e) =>{
        console.log(e.target.value);
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        //const {name,value} = e.target;
        //setPerson({...person,nom: e.target.value})
        setPerson({...person,[name]:value});
     
        
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(person);


        setPerson(initialState);

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group m-1">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" id='nom' name="nom"  onChange={handleChange} className="form-control" placeholder='Votre nom..' value={person.nom} />
                </div>
                <div className="form-group m-1">
                    <label htmlFor="prenom">Prénom</label>
                    <input type="text" id='prenom' name="prenom" className="form-control" placeholder='Votre prénom..'onChange={handleChange} value={person.prenom} />
                </div>
                <div className="form-group m-1">
                    <select name="formation" id="" className='form-control' onChange={handleChange}>
                        <option >Choisir</option>
                        <option value="dwwm">Dwwm</option>
                        <option value="tai">Tai</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type="checkbox" name="isChecked" id="isChecked" checked={person.isChecked}
                    onChange = {handleChange} />
                    <label htmlFor="isChecked" 
                    >Coche</label>
                </div>
                <div className="form-group">
                    <button type="submit" className='btn btn-primary'>Soumettre</button>
                </div>
            </form>
        </>
    )
}

export default Form;