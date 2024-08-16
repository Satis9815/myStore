import React from 'react';
import './productCard.scss';
import { useNavigate } from 'react-router-dom';
import { Star } from 'react-feather';
import { Product } from '../Products/types';

const ProductCard = ({
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
    <div onClick={() => navigateToProductDetails(id)} className="card">
      <div>
        <div className="card__image">
          <img src={image} alt="Product Image" />
        </div>
      </div>
      <div className="card__content">
        <h4 className="name">{title}</h4>
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
        <span className="description">{description}</span>
        <div className="card__footer">
          Price <span>${price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
