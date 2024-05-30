import Boton from './Boton';
import Header from './Header';
import Label from './Label';
import ContenedorSliders from './ContenedorSliders';
import { useNavigate } from 'react-router-dom';



function PaginaCarros() {
  const navigate = useNavigate(); 
  const handleNavigation = (path) => {
      navigate(path); 
  };

  return (
    <div className="App">
      <Header estilo="main-header">
        <Boton texto="VOLVER" estilo="button_slide slide_left" onClick={() => handleNavigation("/homePrinL")}/>
        <Label texto="NOMBRE USUARIO" estilo="labelUser"></Label>
      </Header> 
      <ContenedorSliders estilo="contenedorSlider">
        <Boton texto="CREAR PROTOTIPO" onClick={() => handleNavigation("/CrearProt")} estilo="botonColumna1"/>
        <Boton texto="EDITAR PROTOTIPO" onClick={() => handleNavigation("/EditarPage")}  estilo="botonColumna1"/>
        <Boton texto="ELIMINAR PROTOTIPO" onClick={() => handleNavigation("/EliminarP")} estilo="botonColumna1"/>
        <Boton texto="BUSCAR PROTOTIPO" onClick={() => handleNavigation("/BuscarP")} estilo="botonColumna1"/>
      </ContenedorSliders>
    </div> 
  );
};

export default PaginaCarros;
