import ProductDetail from '../components/ProductoDetail';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Style from '../components/BodyStyle.module.css'

const ProductDetailPage = () => {
  return (
    <div className={Style.bodyHome}>
      <Header />
      <main className="container mt-5">
        <ProductDetail />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;