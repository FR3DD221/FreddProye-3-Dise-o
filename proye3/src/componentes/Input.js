import React from 'react';
import '../estilos/input.css';


const Input = ({ texto, typeInp, estilo, funcion }) => {

    return (
        <input placeholder={texto} className={estilo} type={typeInp} onChange={funcion} />
    );
};

export default Input;