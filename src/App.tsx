import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductoCatalogo from './pages/ProductoCatalogoPage';
import ProductDetailPage from './pages/ProductosDetailPage';
import FabricanteDetailPage from './pages/FabricanteDetailPage';
import FabricantesYComponentes from './pages/FabricantesYComponentesPage';
import ComponenteDetailPage from './pages/ComponenteDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ProductoCatalogo />} />
        <Route path="/productos/:id" element={<ProductDetailPage />} />
        <Route path="/fabricantes-componentes" element={<FabricantesYComponentes />} />
        <Route path="/fabricantes/:id" element={<FabricanteDetailPage />} />
        <Route path="/componentes/:id" element={<ComponenteDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
