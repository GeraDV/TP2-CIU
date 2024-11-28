import Style from "./FooterStyle.module.css"

const Footer = () => {
  return (
    <div className={Style.fuente}>
      <footer className="py-3">
      <ul className="pt-3 nav justify-content-center border-bottom pb-1 mb-1 mt-2">
          <li className="nav-item"><p className="px-2 nav justify-content-center pb-2 mb-1"><strong>Dirección:</strong>&#160; Calle falsa 123</p></li>
          <li className="nav-item"><p className="px-2 nav justify-content-center pb-2 mb-1"><strong>Telefono:</strong>&#160;+54 11 12345678</p></li>
          <li className="nav-item"><p className="px-2 nav justify-content-center pb-2 mb-1"><strong>Horario de atención:</strong>&#160;Lunes a viernes, de 9:00hs a 18:00hs</p></li>
          <li className="nav-item"><p className="px-2 nav justify-content-center pb-2 mb-1">&copy; 2024 Company, Inc</p></li>
        </ul>
       
        <ul className="nav justify-content-center pt-2 mt-2 text-center text-white">
          <li className="nav-item"><p className="px-2 ">Integrantes: </p></li>
          <li className="nav-item"><p className="px-2 ">Gonzalo Diaspro</p></li>
          <li className="nav-item"><p className="px-2 ">Nicolas Benoit</p></li>
          <li className="nav-item"><p className="px-2 ">Gaston Arevalo</p></li>
          <li className="nav-item"><p className="px-2 ">Gerardo Velazquez</p></li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;