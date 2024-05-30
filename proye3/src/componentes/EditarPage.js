import React, { useState, useEffect } from 'react';
import { obtenerDatos } from '../controladores/getDiseno'; 
import Header from './Header';
import Label from './Label';
import Boton from './Boton';
import { useNavigate } from 'react-router-dom';
import miImagen from '../imgs/sedanMos.jpg';
import '../estilos/editar.css'



const EditarPage = () => {
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
    
    


    const handleEditar = async (objeto) => {
        try {
            console.log(objeto)
            navigate('/EditarDise', { state: objeto });
        } catch (error) {
            console.error('Error al reemplazar objeto:', error);
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
                                <Boton estilo={"button_submit2 submitSlide2"} texto="EDITAR" onClick={() => handleEditar({ [key]: data[key] })}/>
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

export default EditarPage;