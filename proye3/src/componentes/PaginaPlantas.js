import Boton from './Boton';
import Header from './Header';
import Label from './Label';
import ContenedorSliders from './ContenedorSliders';
import { useNavigate } from 'react-router-dom';



function PaginaPlantas() {
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
      <ContenedorSliders estilo="contenedorSlider3">
        <Boton texto="CREAR FABRICA" onClick={() => handleNavigation("/CrearP")} estilo="botonColumna1"/>
        <Boton texto="EDITAR FABRICA" estilo="botonColumna1"/>
        <Boton texto="ELIMINAR FABRICA" onClick={() => handleNavigation("/BorrarPlan")} estilo="botonColumna1"/>
        <Boton texto="BUSCAR FABRICA" onClick={() => handleNavigation("/BuscarPlan")} estilo="botonColumna1"/>
      </ContenedorSliders>
    </div> 
  );
};

export default PaginaPlantas;
