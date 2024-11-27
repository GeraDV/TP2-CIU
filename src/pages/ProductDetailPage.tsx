import ProductDetail from '../components/ProductDetail';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductDetailPage = () => {
  return (
    <div>
      <Header />
      <main className="container mt-5">
        <h2>Producto:</h2>
        <ProductDetail />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;