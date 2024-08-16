import './productDetails.scss';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const params = useParams();

  const { id } = params;
  return (
    <div className="product__details__wrapper">
      <div className="product__details__container layout__width">
        <h3>Product Details {id}</h3>
        <div className="product">
          <div className="card__image">
            <img
              src={
                'https://static.toiimg.com/thumb/msid-84196313,width-400,resizemode-4/84196313.jpg'
              }
              alt="courseImg"
            />
          </div>
          <div className="card__content">
            <h4 className="name">Product Strategy</h4>
            <span className="description">
              Thestibulum eget est nec ipsum asd as convallis adafol scelerisque
              a sed mi lpa Morbi orbi asqw comm aafa.
            </span>
            <div className="card__footer">
              Price <span>$600</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
