import React, {useState} from 'react';
import Boton from './Boton';
import Header from './Header';
import Label from './Label';
import { useLocation, useNavigate } from 'react-router-dom';
import miImagen from '../imgs/sedanMos.jpg';
import '../estilos/imagenes.css'
import '../estilos/contSlider.css'
import '../estilos/boton.css'
import { reemplazar } from '../controladores/reemplazarApi';




const EditarDiseno = () => {

    const navigate = useNavigate(); 
    const handleNavigation = (path) => {
        navigate(path); 
    };
    

    const location = useLocation();
    const  state  = location;
    const  objeto  = state;
    console.log("Valor de objectoInic:", objeto.state); // Agrega esta línea

    const [estadosBotones, setBotonesEstado] = useState(objeto.state);

    const id = Object.keys(estadosBotones)[0]; // Esto solo obtiene la primera clave del objeto
    
    const handleBotonPresionado = (boton) => {
        // const id = Object.keys(estadosBotones)[0]; // Esto solo obtiene la primera clave del objeto
    

    
        const newState = {
            ...estadosBotones, // Copiar el estado actual
            [id]: {
                ...estadosBotones[id], // Copiar el estado del botón actual
                botonTraccion: boton === "botonTraccion" ? !estadosBotones[id].botonTraccion : estadosBotones[id].botonTraccion,
                botonAsiento: boton === "botonAsiento" ? !estadosBotones[id].botonAsiento : estadosBotones[id].botonAsiento,
                botonSonido: boton === "botonSonido" ? !estadosBotones[id].botonSonido : estadosBotones[id].botonSonido,
                botonMotor: boton === "botonMotor" ? !estadosBotones[id].botonMotor : estadosBotones[id].botonMotor,
                botonTablero: boton === "botonTablero" ? !estadosBotones[id].botonTablero : estadosBotones[id].botonTablero,
                botonTrans: boton === "botonTrans" ? !estadosBotones[id].botonTrans : estadosBotones[id].botonTrans
            }
        };
    
        console.log("nuevo:" + id + JSON.stringify(newState));
    
        setBotonesEstado(newState);
    };
    

    const handleGuardar = async () => {
        try {
            console.log("Estado a guardar:", estadosBotones);
            await reemplazar(estadosBotones);
            console.log('Estados guardados exitosamente.');
            navigate('/EditarPage')
        } catch (error) {
            console.error('Error al guardar los estados:', error);
        }
    };

    return (
        <div className='contenedorForms'>
            <Header estilo="main-header">
                <Boton onClick={() => handleNavigation("/EditarPage")} texto="VOLVER" estilo="button_slide slide_left" />
                <Label texto="PERSONALIZACION" estilo="labelUser"></Label>
            </Header>
            <img className='sedanImg' src={miImagen} alt="Texto alternativo" />
            <div className='contenedorPer'>
                <div className="contenedorBotonLabel">
                    <Boton onClick={() => handleBotonPresionado('botonTraccion')} estilo="botonTraccion" />
                    <Label texto="TRACCION" estilo="labelAutoOps" />
                    {console.log("ddsd")}
                    { estadosBotones[id].botonTraccion ? <p className='labelAutoOps'>4x4</p> : <p className='labelAutoOps'>4x2</p>}
                </div>  
                <div className="contenedorBotonLabel">
                    <Boton onClick={() => handleBotonPresionado('botonAsiento')} estilo="botonAsiento" ></Boton>
                    <Label texto="MATERIAL ASIENTO" estilo="labelAutoOps" />
                    {estadosBotones[id].botonAsiento ? <p className='labelAutoOps'>CUERO</p> : <p className='labelAutoOps'>TELA</p>}
                </div>
                <div className="contenedorBotonLabel">
                    <Boton onClick={() => handleBotonPresionado('botonSonido')} estilo="botonSonido"></Boton>
                    <Label texto="EQUIPO DE SONIDO" estilo="labelAutoOps" />
                    {estadosBotones[id].botonSonido ? <p className='labelAutoOps'>ESTEREO 7.1</p> : <p className='labelAutoOps'>ESTANDAR</p>}
                </div>
                <div className="contenedorBotonLabel">
                    <Boton onClick={() => handleBotonPresionado('botonMotor')} estilo="botonMotor"></Boton>
                    <Label texto="TIPO DE MOTOR" estilo="labelAutoOps" />
                    {estadosBotones[id].botonMotor ? <p className='labelAutoOps'>GASOLINA</p> : <p className='labelAutoOps'>DIESEL</p>}
                </div>
                <div className="contenedorBotonLabel">
                    <Boton onClick={() => handleBotonPresionado('botonTablero')} estilo="botonTablero"></Boton>
                    <Label texto="TABLERO" estilo="labelAutoOps" />
                    {estadosBotones[id].botonTablero ? <p className='labelAutoOps'>TACTIL</p> : <p className='labelAutoOps'>ANALOGO</p>}
                </div>
                <div className="contenedorBotonLabel">
                    <Boton onClick={() => handleBotonPresionado('botonTrans')} estilo="botonTrans"></Boton>
                    <Label texto="TRANSMISION" estilo="labelAutoOps" />
                    {estadosBotones[id].botonTrans ? <p className='labelAutoOps'>MANUAL</p> : <p className='labelAutoOps'>AUTOMATICO</p>}
                </div>
            </div>
            <div className='contenedorPer'>
                <Boton texto="GUARDAR" onClick={handleGuardar} estilo="button_submit2 submitSlide2" />
            </div>
        </div>
    );
};

export default EditarDiseno;