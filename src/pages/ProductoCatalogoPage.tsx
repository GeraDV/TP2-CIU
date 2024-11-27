import ProductosList from '../components/ProductosList';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductoCatalogo = () => {
  return (
    <div>
      <Header />
      <main className="container mt-5">
        <h2>Catálogo de Productos</h2>
        <ProductosList />
      </main>
      <Footer />
    </div>
  );
};

export default ProductoCatalogo;
