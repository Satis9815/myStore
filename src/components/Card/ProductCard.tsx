import React from 'react';
import "./productCard.scss";
import { useNavigate } from 'react-router-dom';

const ProductCard = ({id}:{id:number}) => {
  const navigate= useNavigate();
  const navigateToProductDetails = (productId:number)=>{
    navigate(`/product-details/${productId}`)
  }
  return (
    <div onClick={()=>navigateToProductDetails(id)} className="card" >
      <div>
        <div className="card__image">
          <img
            src={
              'https://static.toiimg.com/thumb/msid-84196313,width-400,resizemode-4/84196313.jpg'
            }
            alt="courseImg"
          />
        </div>
      </div>
      <div className="card__content">
        <h4 className="name">Product Strategy</h4>
        <span className="description">
          Thestibulum eget est nec ipsum asd as convallis adafol scelerisque a
          sed mi lpa Morbi orbi asqw comm aafa.
        </span>
        <div className="card__footer">
          Price <span>$600</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
