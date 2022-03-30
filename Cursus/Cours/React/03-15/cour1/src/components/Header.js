import React from 'react';

const Header = (props) => {
    console.log(props.prop_age)
    return (
        <>
            <h1>Ceci est mon en-tête</h1>
        </>
    );
};

export default Header;