import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface Manufacturer {
  id: number;
  nombre: string;
}

interface Component {
  id: number;
  nombre: string;
}

interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imageUrl: string;
  manufacturers: Manufacturer[];
  components: Component[];
}

const ProductDetail = () => {
  // Obtén el ID del producto desde la URL
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  // Usamos useEffect para cargar los datos del producto cuando se monta el componente
  useEffect(() => {
    fetch(`http://localhost:5000/productos/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mt-5">
      <h2>{product.nombre}</h2>
      
      <div className="row">
        <div className="col-md-6">
          <img src={product.imageUrl} alt={product.nombre} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <p><strong>Descripción:</strong> {product.descripcion}</p>
          <p><strong>Precio:</strong> ${product.precio}</p>
        </div>
      </div>

      <section>
        <h3>Fabricantes</h3>
        <ul>
          {product.manufacturers.map((manufacturer) => (
            <li key={manufacturer.id}>
              <a href={`/fabricantes/${manufacturer.id}`}>{manufacturer.nombre}</a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Componentes</h3>
        <ul>
          {product.components.map((component) => (
            <li key={component.id}>
              <a href={`/componentes/${component.id}`}>{component.nombre}</a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProductDetail;
