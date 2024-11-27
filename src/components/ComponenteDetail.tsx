import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface Componente {
  id: number;
  nombre: string;
  descripcion: string;
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
  const [componente, setComponente] = useState<Componente | null>(null);

  async function cargarComponente(id: string | undefined) {
    try {
      const respuesta = await fetch(`http://localhost:5000/componentes/${id}`);
      const componenteData: Componente = await respuesta.json();

      // const respuestaFabricantes = await fetch(`http://localhost:5000/productos/${id}/fabricantes`)
      // const productoConFabricantes = await respuestaFabricantes.json();
      // fabricanteData.fabricantes = productoConFabricantes.Fabricantes;

      setComponente(componenteData)

    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  }

  useEffect(() => {
    cargarComponente(id);
  }, [id]);

  if (!componente) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mt-5">
      <h2>{componente.nombre}</h2>
        <div className="col-md-6">
          <p><strong>Descripción:</strong> ${componente.descripcion}</p>
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
