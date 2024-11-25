import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    fetch(`http://localhost:5000/productos/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mt-5">
      <h2>{product.nombre}</h2>
      <p>{product.descripcion}</p>
      <p><strong>Precio:</strong> ${product.precio}</p>
      <img src={product.imageUrl} alt={product.nombre} className="img-fluid" />
      <br />
      <h3>Fabricantes</h3><br />
      <ul>
        {product.manufacturers?.map((manufacturer: any) => (
          <li key={manufacturer.id}>
            <a href={`/fabricantes/${manufacturer.id}`}>{manufacturer.nombre}</a>
          </li>
        ))}
      </ul>

      <h3>Componentes</h3>
      <ul>
        {product.components?.map((component: any) => (
          <li key={component.id}>
            <a href={`/componentes/${component.id}`}>{component.nombre}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetailPage;
