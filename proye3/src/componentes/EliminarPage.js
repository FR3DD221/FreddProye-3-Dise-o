import React, { useState, useEffect } from 'react';
import { obtenerDatos } from '../controladores/getDiseno'; 
import Header from './Header';
import Label from './Label';
import Boton from './Boton';
import { useNavigate } from 'react-router-dom';
import miImagen from '../imgs/sedanMos.jpg';
import '../estilos/editar.css'


const EliminarPage = () => {
    const navigate = useNavigate(); 
    const handleNavigation = (path) => {
        navigate(path); 
    };

    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const jsonData = await obtenerDatos();
                setData(jsonData);
            } catch (error) {
                console.error('Error al obtener datos:', error);
                setData({});
            }
        };
    
        fetchData();
    }, []);


    const handleEliminar = async (key) => {
        try {
            const response = await fetch(`http://localhost:3000/eliminar/${key}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Error al eliminar los datos');
            }

            // Actualizar el estado local si es necesario
            const newData = { ...data };
            delete newData[key];
            setData(newData);

            console.log('Datos eliminados exitosamente');
        } catch (error) {
            console.error('Error al eliminar datos:', error);
        }
    };


    return (    
        <div className='divContenedorCentral'>
            <Header estilo="main-header">
                <Boton texto="VOLVER" estilo="button_slide slide_left" onClick={() => handleNavigation("/homeCarros")}/>
                <Label texto="NOMBRE USUARIO" estilo="labelUser"></Label>
            </Header>

            <div className='divContenedorEd'>
                {Object.keys(data).length > 0 ? (
                    Object.keys(data).map(key => (
                        <div className='divEditar' key={key}>
                            <img className='sedanImg2' src={miImagen} alt={key} />
                            <div className='divEditar2'>
                                <Label estilo="labelUserEd" texto={key}></Label>
                                <Label estilo="labelUserEd" texto="NOMBRE CREADOR"></Label>
                                <Boton estilo={"button_submit2 submitSlide2"} onClick={() => handleEliminar(key)} texto="ELIMINAR" />
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Cargando datos...</p>
                )}
            </div>
        </div>
    );
};

export default EliminarPage;