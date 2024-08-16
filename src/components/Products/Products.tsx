/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react';
import ProductCard from '../Card/ProductCard';
import './products.scss';
import SearchBar from '../SearchBar/SearchBar';
import { Filter } from 'react-feather';
import CategoriesButton from '../Categories/CategoriesButton';
import { RootStore, useAppDispatch, useAppSelector } from '../../store/store';
import {
  getAllProducts,
  getCategories,
} from '../../store/features/Product/ProductApi';
import { Product } from './types';
import Loader from '../../shared/Loader/Loader';

const Products = () => {
  const [filterCategory, setFilterCategory] = useState('');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const dropdownRef: any = useRef(null);
  const dispatch = useAppDispatch();
  const productState: any = useAppSelector(
    (store: RootStore) => store.ProductSlice
  );

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getCategories());
  }, []);

  
  const handleClickOutSide = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowFilterDropdown(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutSide);
    // return ()=>{
    //   document.addEventListener("mousedown",handleClickOutSide);
    // }
  }, []);

  console.log(filterCategory);

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
              <div className="filter" onClick={() => setShowFilterDropdown(!showFilterDropdown)}>
                <Filter />
              </div>
              {showFilterDropdown && (
                <div className="filter__action__wrapper" ref={dropdownRef}>
                  <div className="filter__actions">
                    <p>Accending</p>
                    <p>Decending</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
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
        <div className="product__cards ">
          {productState?.all_products?.map((product: Product) => (
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
          {productState?.is_loading.loading &&
            !productState.is_success.loading && <Loader text={'Loading...'} />}
        </div>
      </div>
    </div>
  );
};

export default Products;
