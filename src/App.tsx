import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductCatalog from './pages/ProductCatalog';
import ProductDetailPage from './pages/ProductDetailPage';
import ManufacturersAndComponents from './pages/ManufacturersAndComponents';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ProductCatalog />} />
        <Route path="/productos/:id" element={<ProductDetailPage />} />
        <Route path="/fabricantes-componentes" element={<ManufacturersAndComponents />} />
      </Routes>
    </Router>
  );
}

export default App;
