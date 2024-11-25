import { useState, useEffect } from 'react';

const ManufacturerList = () => {
  const [manufacturers, setManufacturers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/fabricantes')
      .then((response) => response.json())
      .then((data) => setManufacturers(data))
      .catch((error) => console.error('Error fetching manufacturers:', error));
  }, []);

  return (
    <div className="list-group">
      {manufacturers.map((manufacturer: any) => (
        <a
          key={manufacturer.id}
          href={`/fabricantes/${manufacturer.id}`}
          className="list-group-item list-group-item-action"
        >
          {manufacturer.nombre}
        </a>
      ))}
    </div>
  );
};

export default ManufacturerList;
