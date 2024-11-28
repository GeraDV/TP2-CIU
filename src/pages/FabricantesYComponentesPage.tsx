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
        <h2>Fabricantes y Componentes</h2>
        
        <h3>Fabricantes</h3>
        <FabricantesList />

        <h3>Componentes</h3>
        <ComponentesList />
      </main>
      <Footer />
    </div>
  );
};

export default FabricantesYComponentes;
