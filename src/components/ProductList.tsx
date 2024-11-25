import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/productos')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {products.map((product: any) => (
        <ProductCard
          key={product.id}
          id={product.id}
          nombre={product.nombre}
          description={product.descripcion}
          price={product.precio}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
};

export default ProductList;
