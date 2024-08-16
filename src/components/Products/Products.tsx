import React, { useEffect } from 'react';
import ProductCard from '../Card/ProductCard';
import './products.scss';
import SearchBar from '../SearchBar/SearchBar';
import { Filter } from 'react-feather';
import CategoriesButton from '../Categories/CategoriesButton';
import { RootStore, useAppDispatch, useAppSelector } from '../../store/store';
import { getAllProducts } from '../../store/features/Product/ProductApi';
import { Product } from './types';

const Products = () => {
  const dispatch = useAppDispatch();
  const productState = useAppSelector((store: RootStore) => store.ProductSlice);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  console.log(productState);

  return (
    <div className="products__wrapper">
      <div className="products__container layout__width">
        <div className="product__heading">
          <h3>All Products</h3>
          <div className="right__heading__section">
            <div className="search__input__wrapper">
              <SearchBar />
            </div>
            <div className="filter__icon">
              <div className="filter">
                <Filter />
              </div>
              <div className="filter__action__wrapper">
                <div className="filter__actions">
                  <p>Accending</p>
                  <p>Decending</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="categories__wrapper">
          <div className="categories">
            <CategoriesButton />
          </div>
        </div>
        <div className="product__cards ">
          {productState?.all_products?.map((product:Product) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
