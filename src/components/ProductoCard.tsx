import { Link } from 'react-router-dom';
import Style from './CardStyle.module.css'

interface ProductCardProps {
  id: string;
  nombre: string;
  description: string;
  price: string;
  imageUrl: string;
}

const ProductCard = ({ id, nombre, description, price, imageUrl }: ProductCardProps) => {
  return (
    <div className="card" style={{ width: '16rem' }}>
      <img src={imageUrl} className="card-img-top" alt={nombre} />
      <div className={`card-body ${Style.interiorCarta}`}>
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"> <strong>${price}</strong></p>
        <Link to={`/productos/${id}`} className="btn btn-success">Ver más</Link>
      </div>
    </div>
  );
};

export default ProductCard;
