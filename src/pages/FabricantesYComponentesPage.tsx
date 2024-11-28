import FabricantesList from '../components/FabricantesList';
import ComponentesList from '../components/ComponentesList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Style from '../components/BodyStyle.module.css'

const FabricantesYComponentes = () => {
  return (
    <div className={Style.bodyHome}>
      <Header />
      <main className="container mt-5">
        <h2 className={Style.title}>Fabricantes y Componentes</h2>
        
        <h3 className={`fs-3 p-3 ${Style.text}`}>Fabricantes</h3>
        <FabricantesList />

        <h3 className={`fs-3 p-3 ${Style.text}`}>Componentes</h3>
        <ComponentesList />
      </main>
      <Footer />
    </div>
  );
};

export default FabricantesYComponentes;
