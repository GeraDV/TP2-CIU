import ManufacturerList from '../components/ManufacturerList';
import ComponentList from '../components/ComponentList';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ManufacturersAndComponents = () => {
  return (
    <div>
      <Header />
      <main className="container mt-5">
        <h2>Fabricantes y Componentes</h2>
        
        <h3>Fabricantes</h3>
        <ManufacturerList />

        <h3>Componentes</h3>
        <ComponentList />
      </main>
      <Footer />
    </div>
  );
};

export default ManufacturersAndComponents;
