import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Style from '../components/CardDeatails.module.css'

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
  pathImg: string;
  fabricantes: Fabricante[];
  componentes: Componente[];
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [producto, setProducto] = useState<Producto | null>(null);

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
    return <div className='pt-5 pb-5 fs-1 mt-5 mb-5'><strong>PRODUCTO NO ENCONTRADO</strong></div>;
  }

  return (
    <div className="container mt-5">
      <h2>{producto.nombre}</h2>
      <div className="row">
        <div className="col-md-4">
          <img src={`/${producto.pathImg}`} alt={producto.nombre} className="img-fluid" />
        </div>
        <div className="col-md-4">
          <p className='fs-4'><strong>Descripción:</strong> {producto.descripcion}</p>
          <p className='fs-3'><strong>Precio:</strong> ${producto.precio}</p>
        </div>
        <div className="col-md-2">
          <section>
            <h3>Fabricantes</h3>
            <ul>
              {producto?.fabricantes?.length > 0 ? (
                producto.fabricantes.map((fabricante) => (
                  <li key={fabricante.id}>
                    <Link className={Style.a1} to={`/fabricantes/${fabricante.id}`}>{fabricante.nombre} </Link>
                  </li>
                ))
              ) : (
                <p>No hay fabricantes registrados para este producto.</p>
              )}
            </ul>
          </section>
        </div>
        <div className="col-md-2">
          <section>
            <h3>Componentes</h3>
            <ul>
              {producto?.componentes?.length > 0 ? (
                producto.componentes.map((componente) => (
                  <li key={componente.id}>
                    <Link className={Style.a1} to={`/componentes/${componente.id}`}>{componente.nombre}</Link>
                  </li>
                ))
              ) : (
                <p>No hay componentes registrados para este producto.</p>
              )}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
