import React from 'react'
import ProductCard from '../Card/ProductCard'
import "./products.scss";
import SearchBar from '../SearchBar/SearchBar';
import { Filter } from 'react-feather';

const Products = () => {
  return (
    <div className='products__wrapper'>
        <div className="products__container layout__width">
            <div className="product__heading">
                <h3>All Products</h3>
                <div className="right__heading__section">
                    <div className="search__input__wrapper">
                        <SearchBar/>
                    </div>
                    <div className="filter__icon">
                        <div className="filter">
                            <Filter/>
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
            <div className="product__cards ">
                {
                    [1,2,3,4,5,6].map((product)=>(
                        <ProductCard key={product}/>
                    ))
                }
            </div>
        </div>
      
    </div>
  )
}

export default Products
