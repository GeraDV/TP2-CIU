import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary text-white p-3">
      <h1>InnovaPro</h1>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="/productos" className="nav-link text-white">Catálogo de Productos</Link>
          </li>
          <li className="nav-item">
            <Link to="/fabricantes-componentes" className="nav-link text-white">Fabricantes y Componentes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
