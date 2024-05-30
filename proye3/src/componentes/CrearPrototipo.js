import React from 'react';
import Boton from './Boton';
import Header from './Header';
import Label from './Label';
import ContenedorSliders from './ContenedorSliders';
import { useNavigate } from 'react-router-dom';


const CrearPrototipo = () => {

    const navigate = useNavigate(); 
    const handleNavigation = (path) => {
        navigate(path); 
    };

    return (
        <div className='App'>
            <Header estilo="main-header">
                <Boton onClick={() => handleNavigation("/homeCarros")} texto="VOLVER" estilo="button_slide slide_left" />
                <Label texto="ELIGE MODELO DE AUTO" estilo="labelUser"></Label>
            </Header>
            <ContenedorSliders estilo="contenedorSlider2">
                <Boton onClick={() => handleNavigation("/DiseProt")} estilo="botonSedan"/>
                <Boton estilo="botonCamioneta"/>
                <Boton estilo="botonTransporte"/>
            </ContenedorSliders>
        </div>
    );
};

export default CrearPrototipo;