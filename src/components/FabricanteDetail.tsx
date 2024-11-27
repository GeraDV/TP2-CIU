import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface Fabricante {
  id: number;
  nombre: string;
  direccion: string;
  numeroContacto: string;
  pathImgPerfil: string;
}


// interface Producto {
//   id: number;
//   nombre: string;
//   descripcion: string;
//   precio: number;
//   imageUrl: string;
//   fabricantes: Fabricante[];
//   componentes: Componente[];
// }

const FabricanteDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [fabricante, setFabricante] = useState<Fabricante | null>(null);

  async function cargarFabricante(id: string | undefined) {
    try {
      const respuesta = await fetch(`http://localhost:5000/fabricantes/${id}`);
      const fabricanteData: Fabricante = await respuesta.json();

      // const respuestaFabricantes = await fetch(`http://localhost:5000/productos/${id}/fabricantes`)
      // const productoConFabricantes = await respuestaFabricantes.json();
      // fabricanteData.fabricantes = productoConFabricantes.Fabricantes;

      setFabricante(fabricanteData)

    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  }

  useEffect(() => {
    cargarFabricante(id);
  }, [id]);

  if (!fabricante) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mt-5">
      <h2>{fabricante.nombre}</h2>

        <div className="col-md-6">
          <img src={fabricante.pathImgPerfil} alt={fabricante.nombre} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <p><strong>Dirección:</strong> {fabricante.direccion}</p>
          <p><strong>Contacto:</strong> ${fabricante.numeroContacto}</p>
        </div>

      {/* <section>
        <h3>Productos</h3>
        <ul>
          {fabricante?.fabricantes?.length > 0 ? (
            fabricante.fabricantes.map((fabricante) => (
              <li key={fabricante.id}>
                <a href={`/fabricantes/${fabricante.id}`}>{fabricante.nombre}</a>
              </li>
            ))
          ) : (
            <p>No hay fabricantes registrados para este producto.</p>
          )}
        </ul>
      </section> */}
    </div>
  );
};

export default FabricanteDetail;
