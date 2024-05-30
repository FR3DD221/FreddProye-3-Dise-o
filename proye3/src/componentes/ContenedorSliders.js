import React from 'react';
import '../estilos/contSlider.css';


const ContenedorSliders = (props) => {
    return (
        <div className={`${props.estilo}`}>
            {props.children}
        </div>
    );
};

export default ContenedorSliders;