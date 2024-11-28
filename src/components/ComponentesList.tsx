import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ComponentesList = () => {
  const [componentes, setComponentes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/componentes')
      .then((response) => response.json())
      .then((data) => setComponentes(data))
      .catch((error) => console.error('Error cargando componentes:', error));
  }, []);

  return (
    <div className="list-group">
      {componentes.map((componente: any) => (
        <p>
          <Link
            key={componente.id}
            to={`/componentes/${componente.id}`}
            className="list-group-item list-group-item-action d-flex justify-content-center fs-5">
            {componente.nombre}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default ComponentesList;
