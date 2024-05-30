import React, { useState } from 'react';
import Boton from './Boton';
import Header from './Header';
import Label from './Label';
import Input from './Input';
import '../estilos/input.css';
import '../estilos/contSlider.css';

import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate(); 
    const handleNavigation = (path) => {
        navigate(path); 
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor para la autenticación
        console.log('Nombre de usuario:', username);
        console.log('Contraseña:', password);
    };

    return (
        <div className='contenedorForms'>
            <Header estilo="main-header2">
                <Boton onClick={() => handleNavigation("/")} texto="VOLVER" estilo="button_slide slide_left" />
                <Label texto="INICIO DE SESION" estilo="labelUser"></Label>
            </Header>
            <div className='containerForm'>
                <form className='containerForm' onSubmit={handleSubmit}>
                    <div >
                        <Input texto="Ingrese su usuario" value="" estilo="inputUser"  funcion={handleUsernameChange}></Input>
                    </div>
                    <div >
                        <Input texto="Ingrese su contraseña" value="" estilo="inputUser" typeInp="password" funcion={handlePasswordChange}></Input>
                    </div>
                    <Label texto="¿Has olvidado tu contraseña?" estilo="label-olvidado-contrasena"></Label>
                    <Boton texto="INICIAR SESION" onClick={() => handleNavigation("/homePrinL")} estilo="button_submit submitSlide"></Boton>
                </form>
            </div>
        </div> 
    );
}

export default LoginPage;