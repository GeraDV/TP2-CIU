import { Link } from 'react-router-dom';
import Style from "./Header.module.css";

const Header = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${Style.barraDeNavegacion}`}>
      <div className={"container-fluid"}>
        <a className={`navbar-brand ${Style.fuente}`} href="#">InnovaPro</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${Style.fuente}`} aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/productos" className={`nav-link ${Style.fuente}`}>Catalogo de Productos</Link>
            </li>
            <li className="nav-item">
              <Link to="/fabricantes-componentes" className={`nav-link ${Style.fuente}`}>Fabricantes/Componentes</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
