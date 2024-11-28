import { useState, useEffect } from 'react';

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
          <a
            key={componente.id}
            href={`/componentes/${componente.id}`}
            className="list-group-item list-group-item-action d-flex justify-content-center fs-5">
            {componente.nombre}
          </a>
        </p>
      ))}
    </div>
  );
};

export default ComponentesList;
