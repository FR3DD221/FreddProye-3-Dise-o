import React, { useState, useEffect } from 'react';
import { obtenerDatosFabrica } from '../controladores/getPlantas'; 
import Header from './Header';
import Label from './Label';
import Boton from './Boton';
import Input from './Input';
import { useNavigate } from 'react-router-dom';
import miImagen from '../imgs/planta.png';
import '../estilos/editar.css';

const BuscarPlanta = () => {
    const navigate = useNavigate(); 
    const handleNavigation = (path) => {
        navigate(path); 
    };

    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const jsonData = await obtenerDatosFabrica();
                setData(jsonData);
            } catch (error) {
                console.error('Error al obtener datos:', error);
                setData([]);
            }
        };
    
        if (data.length === 0) {
            fetchData();
        }
    }, [data]);
    

    useEffect(() => {
        // Filtrar los datos basados en el término de búsqueda
        const filteredData = data.filter(item => 
            item.planta.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filteredData);
    }, [data, searchTerm]);

    return (    
        <div className='divContenedorCentral'>
            <Header estilo="main-header">
                <Boton texto="VOLVER" estilo="button_slide slide_left" onClick={() => handleNavigation("/homePlantas")}/>
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
                    filteredData.map((item, index) => (
                        <div className='divEditar' key={index}>
                            <img className='sedanImg2' src={miImagen} alt={item.planta.nombre} />
                            <div className='divEditar2'>
                                <Label estilo="labelUserEd" texto={item.planta.nombre}></Label>
                                <Label estilo="labelUserEd" texto={item.planta.direccion}></Label>
                                <Label estilo="labelUserEd" texto={item.planta.contacto}></Label>
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

export default BuscarPlanta;
