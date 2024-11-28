import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Style from '../components/CardDeatails.module.css'

interface Fabricante {
  id: number;
  nombre: string;
  direccion: string;
  numeroContacto: string;
  pathImgPerfil: string;
  productos: Producto[];
}


interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imageUrl: string;
}

const FabricanteDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [fabricante, setFabricante] = useState<Fabricante | null>(null);

  async function cargarFabricante(id: string | undefined) {
    try {

      const respuesta = await fetch(`http://localhost:5000/fabricantes/${id}`);
      const fabricanteData: Fabricante = await respuesta.json();

      const respuestaProducto = await fetch(`http://localhost:5000/fabricantes/${id}/productos`)
      const fabricanteConProductos = await respuestaProducto.json();
      fabricanteData.productos = fabricanteConProductos.Productos;

      setFabricante(fabricanteData)

    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  }

  useEffect(() => {
    cargarFabricante(id);
  }, [id]);

  if (!fabricante) {
    return <div>Fabricante no encontrado</div>;
  }

  return (
    <div className="container mt-5">
      <h2>{fabricante.nombre}</h2>
      <div className="row">
        <div className="col-md-4">
          <img src={`/${fabricante.pathImgPerfil}`} alt={fabricante.nombre} className="img-fluid" />
        </div>
        <div className="col-md-4 fs-5">
          <p><strong>Dirección:</strong> {fabricante.direccion}</p>
          <p><strong>Contacto:</strong> ${fabricante.numeroContacto}</p>
        </div>
        <div className="col-md-4">
          <section >
            <h3>Productos</h3>
            <ul>
              {fabricante?.productos?.length > 0 ? (
                fabricante.productos.map((producto) => (
                  <li key={producto.id}>
                    <Link className={Style.a1} to={`/productos/${producto.id}`}>{producto.nombre}</Link>
                  </li>
                ))
              ) : (
                <p>No hay productos registrados para este fabricante.</p>
              )}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FabricanteDetail;
