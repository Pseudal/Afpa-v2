import React from 'react';
import { useNavigate } from 'react-router-dom';

const Comp3 = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>404</h1>
            <button onClick={ () =>navigate("/")}>                
            Accueil</button>   
        </div>
    );
};

export default Comp3;