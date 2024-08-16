/* eslint-disable @typescript-eslint/no-explicit-any */
import { Star } from 'react-feather';
import './productDetails.scss';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {
  RootStore,
  useAppDispatch,
  useAppSelector,
} from '../../../store/store';
import { getASingleProduct } from '../../../store/features/Product/ProductApi';

const ProductDetails = () => {
  const params = useParams();
  const { id } = params;
  const dispatch = useAppDispatch();
  const productState:any = useAppSelector((store: RootStore) => store.ProductSlice);

  useEffect(() => {
    if (id) {
      dispatch(getASingleProduct({ productId: Number(id) }));
    }
  }, [id]);

  console.log(productState.single_product);

  return (
    <div className="product__details__wrapper">
      <div className="product__details__container layout__width">
        <h3>Product Details</h3>
        <div className="product">
          {productState?.single_product && (
            <>
              <div className="card__image">
                <img
                  src={
                    productState?.single_product?.image || 'https://static.toiimg.com/thumb/msid-84196313,width-400,resizemode-4/84196313.jpg'
                  }
                  alt="courseImg"
                />
              </div>
              <div className="card__content">
                <h4 className="name">{productState?.single_product?.title}</h4>
                <div className="category">
                  <div className="cantegory__name">{productState?.single_product?.category}</div>
                  <div className="ratings">
                    <div className="star">
                      <Star />
                      <span>({productState?.single_product?.rating?.rate})</span>
                    </div>
                    <div className="total__count">
                      Total Rating: <span>{productState?.single_product?.rating?.count}</span>
                    </div>
                  </div>
                </div>
                <span className="description">
                {productState?.single_product.description}
                </span>
                <div className="card__footer">
                  Price <span>${productState?.single_product?.price}</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
