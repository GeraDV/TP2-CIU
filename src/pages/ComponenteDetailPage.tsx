import ComponenteDetail from '../components/ComponenteDetail';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ComponenteDetailPage = () => {
  return (
    <div>
      <Header />
      <main className="container mt-5">
        <h2>Componente:</h2>
        <ComponenteDetail />
      </main>
      <Footer />
    </div>
  );
};

export default ComponenteDetailPage;