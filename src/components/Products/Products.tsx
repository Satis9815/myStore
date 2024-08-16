/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import ProductCard from '../Card/ProductCard';
import './products.scss';
import CategoriesButton from '../Categories/CategoriesButton';
import { RootStore, useAppDispatch, useAppSelector } from '../../store/store';
import {
  getAllProducts,
  getCategories,
} from '../../store/features/Product/ProductApi';
import { Product } from './types';
import Loader from '../../shared/Loader/Loader';
import ProductListItem from '../Card/ProductListItem/ProductListItem';
import ProductHeading from './ProductHeading/ProductHeading';

const Products = () => {
  const [filterCategory, setFilterCategory] = useState<string>('');
  const [viewType, setViewType] = useState<string>('grid');
  const dispatch = useAppDispatch();
  const productState: any = useAppSelector(
    (store: RootStore) => store.ProductSlice
  );

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getCategories());
  }, []);

  return (
    <>
      <div className="products__wrapper">
        <div className="products__container layout__width">
          <ProductHeading
            setFilterCategory={setFilterCategory}
            viewType={viewType}
            setViewType={setViewType}
          />
          <div className="categories__wrapper">
            <div className="categories">
              {productState?.categories?.map((category: any) => (
                <CategoriesButton
                  key={category}
                  category={category}
                  filterCategory={filterCategory}
                  setFilterCategory={setFilterCategory}
                />
              ))}
              {filterCategory ? (
                <button
                  type="button"
                  onClick={() => {
                    setFilterCategory('');
                    dispatch(getAllProducts());
                  }}
                  className="clear__button"
                >
                  Clear filters
                </button>
              ) : null}
            </div>
          </div>
          <div
            className={`product__cards  ${
              viewType === 'list' ? 'list__items' : ''
            } `}
          >
            {productState?.all_products?.map((product: Product) =>
              viewType === 'grid' ? (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  category={product.category}
                  image={product.image}
                  description={product.description}
                  price={product.price}
                  title={product.title}
                  rating={product.rating}
                />
              ) : (
                <ProductListItem
                  key={product.id}
                  id={product.id}
                  category={product.category}
                  image={product.image}
                  description={product.description}
                  price={product.price}
                  title={product.title}
                  rating={product.rating}
                />
              )
            )}
          </div>
          {productState?.all_products?.length === 0 && (
            <div className="product__notfound">Product Not Found</div>
          )}
        </div>
      </div>
      {productState?.is_loading.loading && !productState.is_success.loading && (
        <Loader text={'Loading...'} />
      )}
    </>
  );
};

export default Products;
