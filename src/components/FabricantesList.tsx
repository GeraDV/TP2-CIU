import { useState, useEffect } from 'react';

const FabricantesList = () => {
  const [fabricantes, setFabricantes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/fabricantes')
      .then((response) => response.json())
      .then((data) => setFabricantes(data))
      .catch((error) => console.error('Error cargando fabricantes:', error));
  }, []);

  return (
    <div className="list-group d-flex justify-content-center ">
      {fabricantes.map((fabricante: any) => (
        <p>
          <a
          key={fabricante.id}
           href={`/fabricantes/${fabricante.id}`}
          className="list-group-item list-group-item-action d-flex justify-content-center fs-5">
          {fabricante.nombre}</a>
        </p>
      ))}
    </div>
  );
};

export default FabricantesList;
