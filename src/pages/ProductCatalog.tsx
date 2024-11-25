import ProductList from '../components/ProductList';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductCatalog = () => {
  return (
    <div>
      <Header />
      <main className="container mt-5">
        <h2>Catálogo de Productos</h2>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};

export default ProductCatalog;
