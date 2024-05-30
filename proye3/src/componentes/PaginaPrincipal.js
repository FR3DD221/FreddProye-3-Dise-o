import React from 'react';
import Boton from './Boton';
import Header from './Header';
import Label from './Label';
import ContenedorSliders from './ContenedorSliders';
import { useNavigate } from 'react-router-dom';

function PaginaPrincipal() {
    const navigate = useNavigate(); 
    const handleNavigation = (path) => {
        navigate(path); 
    };

    return (
        <div className="App">
            <Header estilo="main-header">
                <Boton onClick={() => handleNavigation("/")} texto="VOLVER" estilo="button_slide slide_left" />
                <Label texto="NOMBRE USUARIO" estilo="labelUser"></Label>
            </Header>
            <ContenedorSliders estilo="contenedorSlider">
                <Boton texto="MODULO FABRICA" onClick={() => handleNavigation("/homePlantas")} estilo="botonColumna1"/>
                <Boton texto="MODULO DISEÑO" estilo="botonColumna1" onClick={() => handleNavigation("/homeCarros")}/>
            </ContenedorSliders>
        </div> 
    );
}

export default PaginaPrincipal;
