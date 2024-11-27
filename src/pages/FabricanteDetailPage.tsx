import FabricanteDetail from '../components/FabricanteDetail';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FabricanteDetailPage = () => {
  return (
    <div>
      <Header />
      <main className="container mt-5">
        <h2>Fabricante:</h2>
        <FabricanteDetail />
      </main>
      <Footer />
    </div>
  );
};

export default FabricanteDetailPage;