import React, { useState, useEffect } from 'react';
import { obtenerDatos } from '../controladores/getDiseno'; 
import Header from './Header';
import Label from './Label';
import Boton from './Boton';
import Input from './Input';
import { useNavigate } from 'react-router-dom';
import miImagen from '../imgs/sedanMos.jpg';
import '../estilos/editar.css';

const BuscarPage = () => {
    const navigate = useNavigate(); 
    const handleNavigation = (path) => {
        navigate(path); 
    };

    const [data, setData] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);

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
    
        if (Object.keys(data).length === 0) {
            fetchData();
        }
    }, [data]);
    

    useEffect(() => {
        // Filtrar los datos basados en el término de búsqueda
        const filteredData = Object.keys(data).filter(key => key.includes(searchTerm));
        setFilteredData(filteredData);
    }, [data, searchTerm]);

    return (    
        <div className='divContenedorCentral'>
            <Header estilo="main-header">
                <Boton texto="VOLVER" estilo="button_slide slide_left" onClick={() => handleNavigation("/homeCarros")}/>
                <Label texto="NOMBRE USUARIO" estilo="labelUser"></Label>
            </Header>

            <Input 
                estilo={"inputUser3"} 
                texto="Escribe el nombre de los elementos a buscar"
                value={searchTerm}
                funcion={(event) => setSearchTerm(event.target.value)} // Actualiza searchTerm al escribir en el input
            />

            <div className='divContenedorEd'>
                {filteredData.length > 0 ? (
                    filteredData.map(key => (
                        <div className='divEditar' key={key}>
                            <img className='sedanImg2' src={miImagen} alt={key} />
                            <div className='divEditar2'>
                                <Label estilo="labelUserEd" texto={key}></Label>
                                <Label estilo="labelUserEd" texto="NOMBRE CREADOR"></Label>
                                <Boton estilo={"button_submit2 submitSlide2"} texto="DETALLES" />
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='labelAutoOps'>No se encontraron resultados.</p>
                )}
            </div>
        </div>
    );
};

export default BuscarPage;
