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
        <a
          key={componente.id}
          href={`/componentes/${componente.id}`}
          className="list-group-item list-group-item-action"
        >
          {componente.nombre}
        </a>
      ))}
    </div>
  );
};

export default ComponentesList;
