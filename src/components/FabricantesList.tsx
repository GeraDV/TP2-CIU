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
    <div className="list-group">
      {fabricantes.map((fabricante: any) => (
        <a
          key={fabricante.id}
          href={`/fabricantes/${fabricante.id}`}
          className="list-group-item list-group-item-action"
        >
          {fabricante.nombre}
        </a>
      ))}
    </div>
  );
};

export default FabricantesList;
