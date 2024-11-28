import ProductosList from '../components/ProductosList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Style from '../components/BodyStyle.module.css'

const ProductoCatalogo = () => {
  return (
    <div className={Style.bodyHome}>
      <Header />
      <main className="container mt-5">
        <h2 className={`d-flex pb-4 justify-content-center ${Style.fuente}`}>Catálogo de Productos</h2>
        <ProductosList />
      </main>
      <Footer />
    </div>
  );
};

export default ProductoCatalogo;
