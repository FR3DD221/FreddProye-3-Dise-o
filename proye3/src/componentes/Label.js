import React from 'react';
import '../estilos/label.css';


const Label = ({ texto, estilo }) => {
    return (
        <label className={`${estilo}`}>
            {texto}
        </label>
    );
};

export default Label;