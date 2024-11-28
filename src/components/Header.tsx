import { Link } from 'react-router-dom';
import Style from "./Header.module.css";
const Header = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${Style.barraDeNavegacion}`}>
      <div className={"container-fluid"}>
        <Link className={`navbar-brand ${Style.fuente}`} to="/">InnovaPro</Link>
        
        <div className={Style.navbarResponsive} id="">
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
