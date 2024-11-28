import { useState, useEffect } from 'react';
import ProductCard from './ProductoCard';
import imgPrueba from '../assets/logoEmpresa.jpg'

const ProductosList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/productos')
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error('Error cargando productos:', error));
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center gap-3">
      {productos.map((producto: any) => (
        <ProductCard
          key={producto.id}
          id={producto.id}
          nombre={producto.nombre}
          description={producto.descripcion}
          price={producto.precio}
          imageUrl={imgPrueba}
        />
      ))}
    </div>
  );
};

export default ProductosList;
