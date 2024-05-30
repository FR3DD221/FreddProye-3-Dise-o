import React, {useState} from 'react';
import Boton from './Boton';
import Header from './Header';
import ContenedorSliders from './ContenedorSliders';
import { useNavigate } from 'react-router-dom';
import '../estilos/dialog.css';


function PaginaPrincipalNL() {
    const navigate = useNavigate(); 
    const handleNavigation = (path) => {
        navigate(path); 
    };

    const [dialogVisible, setDialogVisible] = useState(false);

    const handleShowDialog = () => {
        setDialogVisible(true);   
    };

    const handleCloseDialog = () => {
        setDialogVisible(false);
    };
    
    return (
        <div className="App">
            <Header estilo="main-header">
                <Boton onClick={() => handleNavigation("/LoginPage1")} texto="INICIAR SESION" estilo="button_slide slide_left" />
                <Boton onClick={() => handleNavigation("/RegisPage1")} texto="REGISTRARSE" estilo="button_slide slide_left" />
            </Header>
            <ContenedorSliders estilo="contenedorSlider">
                <Boton onClick={handleShowDialog} texto="MODULO FABRICA" estilo="botonColumna1"/>
                <Boton onClick={handleShowDialog} texto="MODULO DISEÑO" estilo="botonColumna1" />

            </ContenedorSliders>

            <dialog open={dialogVisible} onClick={handleCloseDialog} className={`dialogErr ${dialogVisible ? 'visible' : ''}`}>
                    <h2>Error</h2>
                    <p>Debes iniciar sesión o registrarte</p>
                    <p>Haz click para cerrar esta ventana</p>
            </dialog> 
        </div> 
    );
}

export default PaginaPrincipalNL;