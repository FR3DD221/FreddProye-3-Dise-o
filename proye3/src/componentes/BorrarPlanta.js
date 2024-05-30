import React, { useState, useEffect } from 'react';
import { obtenerDatosFabrica, eliminarPlanta } from '../controladores/getPlantas'; // Importamos la función eliminarPlanta
import Header from './Header';
import Label from './Label';
import Boton from './Boton';
import { useNavigate } from 'react-router-dom';
import miImagen from '../imgs/planta.png';
import '../estilos/editar.css';

const BorrarPlanta = () => {
    const navigate = useNavigate(); 
    const handleNavigation = (path) => {
        navigate(path); 
    };

    const [data, setData] = useState([]);

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
    
    // Función para eliminar una planta
    const handleEliminar = async (nombrePlanta) => {
        try {
            await eliminarPlanta(nombrePlanta); // Suponiendo que eliminarPlanta acepta el nombre de la planta como argumento
            // Después de eliminar la planta, actualizamos los datos para reflejar los cambios
            const newData = data.filter(item => item.planta.nombre !== nombrePlanta);
            setData(newData);
        } catch (error) {
            console.error('Error al eliminar la planta:', error);
        }
    };
    

    return (    
        <div className='divContenedorCentral'>
            <Header estilo="main-header">
                <Boton texto="VOLVER" estilo="button_slide slide_left" onClick={() => handleNavigation("/homePlantas")}/>
                <Label texto="NOMBRE USUARIO" estilo="labelUser"></Label>
            </Header>

            <div className='divContenedorEd'>
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <div className='divEditar' key={index}>
                            <img className='sedanImg2' src={miImagen} alt={item.planta.nombre} />
                            <div className='divEditar2'>
                                <Label estilo="labelUserEd" texto={item.planta.nombre}></Label>
                                <Label estilo="labelUserEd" texto={item.planta.direccion}></Label>
                                <Label estilo="labelUserEd" texto={item.planta.contacto}></Label>
                                {/* Llamamos a handleEliminar cuando se hace clic en el botón ELIMINAR */}
                                <Boton estilo={"button_submit2 submitSlide2"} texto="ELIMINAR" onClick={() => handleEliminar(item.planta.nombre)} />
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

export default BorrarPlanta;
