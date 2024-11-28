import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
          <Link
          key={fabricante.id}
           to={`/fabricantes/${fabricante.id}`}
          className="list-group-item list-group-item-action d-flex justify-content-center fs-5">
          {fabricante.nombre}</Link>
        </p>
      ))}
    </div>
  );
};

export default FabricantesList;
