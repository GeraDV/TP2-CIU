import { useState, useEffect } from 'react';

const ComponentList = () => {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/componentes')
      .then((response) => response.json())
      .then((data) => setComponents(data))
      .catch((error) => console.error('Error fetching components:', error));
  }, []);

  return (
    <div className="list-group">
      {components.map((component: any) => (
        <a
          key={component.id}
          href={`/componentes/${component.id}`}
          className="list-group-item list-group-item-action"
        >
          {component.nombre}
        </a>
      ))}
    </div>
  );
};

export default ComponentList;
