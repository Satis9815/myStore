import { useNavigate } from 'react-router-dom';
import { Product } from '../../Products/types';
import { Star } from 'react-feather';
import "./productItem.scss";

const ProductListItem = ({
  id,
  category,
  description,
  image,
  title,
  price,
  rating,
}: Product) => {
  const navigate = useNavigate();
  const navigateToProductDetails = (productId: number) => {
    navigate(`/product-details/${productId}`);
  };
  return (
    <div onClick={() => navigateToProductDetails(id)} className="list__item">
        <div className="product__id">
            {id}
        </div>
      <div className="product__image">
        <img src={image} alt="Product Image" />
      </div>
      <h4 className="name">{`${title.substring(0,60)}...`}</h4>
      <div className="category">
        <div className="cantegory__name">{category}</div>
        <div className="ratings">
          <div className="star">
            <Star />
            <span>({rating.rate})</span>
          </div>
          <div className="total__count">
            Total Rating: <span>{rating.count}</span>
          </div>
        </div>
      </div>
      <div className="description">{`${description.substring(0,60)}...`}</div>
      <div className="price">
        Price <span>${price}</span>
      </div>
    </div>
  );
};

export default ProductListItem;
