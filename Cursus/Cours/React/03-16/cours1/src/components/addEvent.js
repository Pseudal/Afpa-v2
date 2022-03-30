import React from 'react';

const AddEvent = (props) => {
    const age = 10;
    const handleClick = (a) => {
        alert('patouche ' + a)  
        props.func(a)
    }
    return (
        <>
            <h1>Les evenement</h1>
            <button onClick={() =>{
                  handleClick(age)
            }}>Clic ici</button>
        </>
    );
};

export default AddEvent;