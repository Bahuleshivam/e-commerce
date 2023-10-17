import React, { useState } from 'react';
import './ProductList.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../app/features/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import productData from '../ProductDatabase/Product';
import Filter from '../Filter/Filter';


const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [ratingFilter, setRatingFilter] = useState(null);
  const [priceFilter, setPriceFilter] = useState('3000');
  const categories = [...new Set(productData.map(product => product.CategoryName))];
  const dispatch = useDispatch();
  const [sortOrder, setSortOrder] = useState('lowToHigh');
  const [activeRating, setActiveRating] = useState(null);


  const handleCategoryChange = (category) => setSelectedCategory(category);
  const handleRatingFilter = (rating) => {
    setRatingFilter(rating);
    setActiveRating(rating);
  }
  const handlePriceFilter = (priceRange) => setPriceFilter(priceRange);

  const filterProductsByPrice = (products, priceFilter) =>
    products.filter((product) => product.DiscountedPrice <= priceFilter);


  const filteredProducts = filterProductsByPrice(productData, priceFilter).filter((product) =>
    (!selectedCategory || product.CategoryName === selectedCategory) && (ratingFilter === null || product.Rating === ratingFilter)
  );

  const sortedProducts = [...filteredProducts].sort((a, b) =>
    sortOrder === 'lowToHigh'
      ? a.DiscountedPrice - b.DiscountedPrice
      : b.DiscountedPrice - a.DiscountedPrice
  );

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success('Added to cart', {
      position: 'bottom-left', 
      autoClose: 1000, 
    });
  };

  return (
    <div className="MainContainer">
      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        onRatingFilter={handleRatingFilter}
        priceFilter={priceFilter}
        onPriceFilter={handlePriceFilter}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
        activeRating={activeRating}
        
      />
        <ToastContainer />

      <div className="ProductContainer">
        {sortedProducts.map((product) => (
          <div className="ProductCard" key={product.id}>
            <div className="image">
              <img className="ProductImage" src={product.ProductImage} alt={product.Subtitle} />
            </div>
            <div className="card-body">
              <h5 className="ProductName">{product.Subtitle}</h5>
              <h6 className="discountedPrice">₹{product.DiscountedPrice}⁰⁰</h6>
              <p className="OriginalPrice">
                <del>₹{product.price}⁰⁰</del>
              </p>
              <p className="ProductDescription">{product.description}</p>
              <p>{product.Ratingstar}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className="btn">Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
