import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface Fabricante {
  id: number;
  nombre: string;
  direccion: string;
  numeroContacto: string;
  pathImgPerfil: string;
}

interface Componente {
  id: number;
  nombre: string;
  descripcion: string;
}

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imageUrl: string;
  fabricantes: Fabricante[];
  componentes: Componente[];
}

console.log("Ejecutando");
const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [producto, setProducto] = useState<Producto | null>(null);
  console.log("Ejecutando cargarProducto con ID:", id);

  async function cargarProducto(id: string | undefined) {
    try {
      const respuesta = await fetch(`http://localhost:5000/productos/${id}`);
      const productoData: Producto = await respuesta.json();

      const respuestaFabricantes = await fetch(`http://localhost:5000/productos/${id}/fabricantes`)
      const productoConFabricantes = await respuestaFabricantes.json();
      productoData.fabricantes = productoConFabricantes.Fabricantes;

      const respuestaComponentes = await fetch(`http://localhost:5000/productos/${id}/componentes`)
      const productoConComponentes = await respuestaComponentes.json();
      productoData.componentes = productoConComponentes.Componentes;

      setProducto(productoData)

    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  }

  useEffect(() => {
    cargarProducto(id);
  }, [id]);

  if (!producto) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mt-5">
      <h2>{producto.nombre}</h2>

        <div className="col-md-6">
          <img src={producto.imageUrl} alt={producto.nombre} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <p><strong>Descripción:</strong> {producto.descripcion}</p>
          <p><strong>Precio:</strong> ${producto.precio}</p>
        </div>

      <section>
        <h3>Fabricantes</h3>
        <ul>
          {producto?.fabricantes?.length > 0 ? (
            producto.fabricantes.map((fabricante) => (
              <li key={fabricante.id}>
                <a href={`/fabricantes/${fabricante.id}`}>{fabricante.nombre}</a>
              </li>
            ))
          ) : (
            <p>No hay fabricantes registrados para este producto.</p>
          )}
        </ul>
      </section>

      <section>
        <h3>Componentes</h3>
        <ul>
          {producto?.componentes?.length > 0 ? (
            producto.componentes.map((componente) => (
              <li key={componente.id}>
                <a href={`/fabricantes/${componente.id}`}>{componente.nombre}</a>
              </li>
            ))
          ) : (
            <p>No hay componentes registrados para este producto.</p>
          )}
        </ul>
      </section>
    </div>
  );
};

export default ProductDetail;
