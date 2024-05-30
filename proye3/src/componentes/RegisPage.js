import React from 'react';
import Boton from './Boton';
import Header from './Header';
import Label from './Label';
import Input from './Input';
import '../estilos/input.css';
import { useNavigate } from 'react-router-dom';

const RegisPage = () => {
    const navigate = useNavigate(); 
    const handleNavigation = (path) => {
        navigate(path); 
    };

    return (
        <div className='contenedorForms'>
            <Header estilo="main-header2">
                <Boton onClick={() => handleNavigation("/")} texto="VOLVER" estilo="button_slide slide_left" />
                <Label texto="INICIO DE SESION" estilo="labelUser"></Label>
            </Header>
            <div className='containerForm'>
                <form className='containerForm'>
                    <div >
                        <Input texto="Escribe tu nombre" value="" estilo="inputUser2"  ></Input>
                    </div>
                    <div >
                        <Input texto="Escribe tus apellidos" value="" estilo="inputUser2"  ></Input>
                    </div>
                    <div >
                        <Input texto="Correo electronico" value="" estilo="inputUser2" ></Input>
                    </div>
                    <div >
                        <Input texto="Telefono" estilo="inputUser2" typeInp="number" ></Input>
                    </div>
                    <div >
                        <Input texto="Experiencia" value="" estilo="inputUser2"  ></Input>
                    </div>
                    <div >
                        <Input texto="Usuario" value="" estilo="inputUser2" ></Input>
                    </div>
                    <div >
                        <Input texto="Contraseña" value="" estilo="inputUser2" typeInp="password" ></Input>
                    </div>
                    <div >
                        <Input texto="Confirmar contraseña" value="" estilo="inputUser2" typeInp="password" ></Input>
                    </div>
                    <Boton texto="REGISTRARSE" onClick={() => handleNavigation("/homePrinL")} estilo="button_submit submitSlide"></Boton>
                </form>
            </div>
        </div>
    );
};

export default RegisPage;