import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import img from '../assets/logoEmpresa.jpg';
import Style from '../components/CardDeatails.module.css'

interface Componente {
  id: number;
  nombre: string;
  descripcion: string;
  productos: Producto[];
}

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imageUrl: string;
}

const ComponenteDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [componente, setComponente] = useState<Componente | null>(null);

  async function cargarComponente(id: string | undefined) {
    try {
      const respuesta = await fetch(`http://localhost:5000/componentes/${id}`);
      const componenteData: Componente = await respuesta.json();

      const respuestaProducto = await fetch(`http://localhost:5000/componentes/${id}/productos`)
      const componenteConProducto = await respuestaProducto.json();
      componenteData.productos = componenteConProducto.Productos;

      setComponente(componenteData)

    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  }

  useEffect(() => {
    cargarComponente(id);
  }, [id]);

  if (!componente) {
    return <div>Componente no encontrado</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className='pb-3'>{componente.nombre}</h2>
      <div className="row">
        <div className="col-md-6">
          <p className='fs-4'><strong>Descripción:</strong> ${componente.descripcion}</p>
        </div>
        <div className="col-md-6">
          <section>
            <h3>Productos</h3>
            <ul>
              {componente?.productos?.length > 0 ? (
                componente.productos.map((producto) => (
                  <li key={producto.id}>
                    <a className={Style.a1} href={`/productos/${producto.id}`}>{producto.nombre}</a>
                  </li>
                ))
              ) : (
                <p>No hay productos registrados para este componente.</p>
              )}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ComponenteDetail;
