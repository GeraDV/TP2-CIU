import FabricanteDetail from '../components/FabricanteDetail';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Style from '../components/BodyStyle.module.css'

const FabricanteDetailPage = () => {
  return (
    <div className={Style.bodyHome}>
      <Header />
      <main className="container mt-5">
        <FabricanteDetail />
      </main>
      <Footer />
    </div>
  );
};

export default FabricanteDetailPage;