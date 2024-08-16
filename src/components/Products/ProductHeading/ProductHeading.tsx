/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react';
import SearchBar from '../../SearchBar/SearchBar';
import { Filter, Grid, List } from 'react-feather';
import { searchProducts } from '../../../store/features/Product/ProductSlice';
import { useAppDispatch } from '../../../store/store';
import { getProductByAscOrDesc } from '../../../store/features/Product/ProductApi';
import './productHeading.scss';

const ProductHeading = (props: any) => {
  const { setFilterCategory, viewType, setViewType } = props;
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const dropdownRef: any = useRef(null);
  const [searchText, setSearchText] = useState('');
  const dispatch = useAppDispatch();

  const handleClickOutSide = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowFilterDropdown(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutSide);
  }, []);

  useEffect(() => {
    dispatch(searchProducts(searchText));
  }, [searchText]);
  const handleSort = (sortBy: string) => {
    console.log(sortBy);
    setShowFilterDropdown(false);
    dispatch(getProductByAscOrDesc({ sortBy }));
    setFilterCategory('');
  };
  console.log(viewType,viewType === 'grid');
  return (
    <>
      <div className="product__heading">
        <h3>All Products</h3>
        <div className="right__heading__section">
          <div className="toggle__list__grid__view">
            <button
              className={`${viewType === 'grid' ? 'active' : ''}`}
              type="button"
              onClick={() => setViewType('grid')}
            >
              <Grid />
            </button>
            <button
              type="button"
              className={viewType === 'list' ? 'active' : ''}
              onClick={() => setViewType('list')}
            >
              <List />
            </button>
          </div>
          <div className="search__input__wrapper">
            <SearchBar value={searchText} setValue={setSearchText} />
          </div>
          <div className="filter__icon" ref={dropdownRef}>
            <div
              className="filter"
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
            >
              <Filter />
            </div>
            {showFilterDropdown && (
              <div className="filter__action__wrapper">
                <div className="filter__actions">
                  <p onClick={() => handleSort('asc')}>Product By asc order</p>
                  <p onClick={() => handleSort('desc')}>
                    Product By desc order
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductHeading;
