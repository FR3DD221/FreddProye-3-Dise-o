import React from 'react';
import '../estilos/header.css';

const Header = (props) => {
    return (
        <header className={props.estilo}>
            {props.children}
        </header>
    );
};

export default Header;