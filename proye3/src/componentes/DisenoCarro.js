import React, {useState, useEffect} from 'react';
import Boton from './Boton';
import Header from './Header';
import Label from './Label';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';
import miImagen from '../imgs/sedanMos.jpg';
import '../estilos/imagenes.css'
import '../estilos/contSlider.css'
import '../estilos/boton.css'
import { disenoXapi } from '../controladores/disenoXapi';


const DisenoCarro = () => {
    const [modalAbierto, setModalAbierto] = useState(false);
    const navigate = useNavigate(); 
    const handleNavigation = (path) => {
        navigate(path); 
    };

    const [estadosBotones, setEstadosBotones] = useState({
        "editar": false,
        "botonTraccion": false,
        "botonAsiento": false,
        "botonSonido": false,
        "botonMotor": false,
        "botonTablero": false,
        "botonTrans": false
    });

    const [caretaker, setCaretaker] = useState([{
        "editar": false,
        "botonTraccion": false,
        "botonAsiento": false,
        "botonSonido": false,
        "botonMotor": false,
        "botonTablero": false,
        "botonTrans": false
    }]);
    const [indexCareTaker, setIndexCareTaker] = useState(0);

    const handleBotonPresionado = (boton) => {
        const newState = {
            ...estadosBotones, // Hacer una copia del estado actual
            [boton]: !estadosBotones[boton] // Modificar el botón correspondiente
        };
    
        setEstadosBotones(newState); // Establecer el nuevo estado
    
        // Actualizar el caretaker solo si hay un cambio
        if (JSON.stringify(newState) !== JSON.stringify(caretaker[indexCareTaker])) {
            setCaretaker(prevCaretaker => [...prevCaretaker.slice(0, indexCareTaker + 1), newState]);
            setIndexCareTaker(prevIndex => prevIndex + 1);
        }
    };

    const handleUndo = () => {
        if (indexCareTaker > 0) {
            setIndexCareTaker(prevIndex => prevIndex - 1);
            setEstadosBotones(caretaker[indexCareTaker - 1]);
        }
    };

    const handleRedo = () => {
        if (indexCareTaker < caretaker.length - 1) {
            setIndexCareTaker(prevIndex => prevIndex + 1);
            setEstadosBotones(caretaker[indexCareTaker + 1]);
        }
    };

    useEffect(() => {
        console.log(caretaker);
    }, [caretaker]);

    const handleGuardar = (nombreObjeto) => {
        const randomNumber = Math.floor(Math.random() * 999999999) + 1;
        const dataToSave = {
            [nombreObjeto + randomNumber]: caretaker[indexCareTaker]
        };
        disenoXapi(dataToSave);
    };

    return (
        <div className='contenedorForms'>
            <Header estilo="main-header">
                <Boton onClick={() => handleNavigation("/CrearProt")} texto="VOLVER" estilo="button_slide slide_left" />
                <Label texto="PERSONALIZACION" estilo="labelUser"></Label>
            </Header>
            <img className='sedanImg'  src={miImagen} alt="Texto alternativo" />
            <div className='contenedorPer'>
                <div className="contenedorBotonLabel">
                    <Boton onClick={() => handleBotonPresionado('botonTraccion')} estilo="botonTraccion" />
                    <Label texto="TRACCION" estilo="labelAutoOps" />
                    {estadosBotones.botonTraccion ? <p className='labelAutoOps'>4x4</p> : <p className='labelAutoOps'>4x2</p>}
                </div>  
                <div className="contenedorBotonLabel">
                    <Boton onClick={() => handleBotonPresionado('botonAsiento')} estilo="botonAsiento" ></Boton>
                    <Label texto="MATERIAL ASIENTO" estilo="labelAutoOps" />
                    {estadosBotones.botonAsiento ? <p className='labelAutoOps'>CUERO</p> : <p className='labelAutoOps'>TELA</p>}
                </div>
                <div className="contenedorBotonLabel">
                    <Boton onClick={() => handleBotonPresionado('botonSonido')} estilo="botonSonido"></Boton>
                    <Label texto="EQUIPO DE SONIDO" estilo="labelAutoOps" />
                    {estadosBotones.botonSonido ? <p className='labelAutoOps'>ESTEREO 7.1</p> : <p className='labelAutoOps'>ESTANDAR</p>}
                </div>
                <div className="contenedorBotonLabel">
                    <Boton onClick={() => handleBotonPresionado('botonMotor')} estilo="botonMotor"></Boton>
                    <Label texto="TIPO DE MOTOR" estilo="labelAutoOps" />
                    {estadosBotones.botonMotor ? <p className='labelAutoOps'>GASOLINA</p> : <p className='labelAutoOps'>DIESEL</p>}
                </div>
                <div className="contenedorBotonLabel">
                    <Boton onClick={() => handleBotonPresionado('botonTablero')} estilo="botonTablero"></Boton>
                    <Label texto="TABLERO" estilo="labelAutoOps" />
                    {estadosBotones.botonTablero ? <p className='labelAutoOps'>TACTIL</p> : <p className='labelAutoOps'>ANALOGO</p>}
                </div>
                <div className="contenedorBotonLabel">
                    <Boton onClick={() => handleBotonPresionado('botonTrans')} estilo="botonTrans"></Boton>
                    <Label texto="TRANSMISION" estilo="labelAutoOps" />
                    {estadosBotones.botonTrans ? <p className='labelAutoOps'>MANUAL</p> : <p className='labelAutoOps'>AUTOMATICO</p>}
                </div>
            </div>
            <div className='contenedorPer'>
                <Boton texto="DESHACER" onClick={handleUndo} estilo="button_submit2 submitSlide2" />
                <Boton texto="REHACER" onClick={handleRedo} estilo="button_submit2 submitSlide2" />
                <Boton texto="GUARDAR" onClick={() => setModalAbierto(true)} estilo="button_submit2 submitSlide2" />
                <Modal
                    isOpen={modalAbierto}
                    onClose={() => setModalAbierto(false)}
                    onSave={handleGuardar}
                />
            </div>
        </div>
    );
};

export default DisenoCarro;