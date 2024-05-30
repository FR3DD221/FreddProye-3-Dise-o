import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePrin from './componentes/PaginaPrincipal';
import HomeCarros from './componentes/PaginaCarros';
import HomePrinNl from './componentes/PaginaPrincipalNL';
import LoginPage from './componentes/LoginPage';
import RegisPage from './componentes/RegisPage';
import CrearPrototipo from './componentes/CrearPrototipo';
import DisenoCarro from './componentes/DisenoCarro';
import EditarPage from './componentes/EditarPage';
import EditarDise from './componentes/EditarDiseno';
import BuscarPage from './componentes/BuscarPage';
import EliminarPage from './componentes/EliminarPage';
import PaginaPlantas from './componentes/PaginaPlantas';
import CrearPlantaP from './componentes/CrearPlantaP';
import BuscarPlanta from './componentes/BuscarPlanta';
import BorrarPlanta from './componentes/BorrarPlanta';



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePrinNl />} />
          <Route path="/homePrinL" element={<HomePrin />} />
          <Route path="/homeCarros" element={<HomeCarros />} />
          <Route path="/LoginPage1" element={<LoginPage />} />
          <Route path="/RegisPage1" element={<RegisPage />} />
          <Route path="/CrearProt" element={<CrearPrototipo />} />
          <Route path="/DiseProt" element={<DisenoCarro />} />
          <Route path="/EditarPage" element={<EditarPage />} />
          <Route path="/EditarDise" element={<EditarDise />} />
          <Route path="/BuscarP" element={<BuscarPage />} />
          <Route path="/EliminarP" element={<EliminarPage />} />
          <Route path="/homePlantas" element={<PaginaPlantas />} />
          <Route path="/CrearP" element={<CrearPlantaP />} />
          <Route path="/BuscarPlan" element={<BuscarPlanta />} />
          <Route path="/BorrarPlan" element={<BorrarPlanta />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


