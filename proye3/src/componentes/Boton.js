import React from 'react';
import '../estilos/boton.css';


const Boton = ({ texto, estilo, onClick }) => {



    return (
        <button className={`${estilo}`} onClick={onClick}>
            {texto}
        </button>
    );
};

export default Boton;