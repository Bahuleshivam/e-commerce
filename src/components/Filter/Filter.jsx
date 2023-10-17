import {React, useState} from 'react';
import './Filter.css';

const Filter = ({
  categories,
  selectedCategory,
  onCategoryChange,
  onRatingFilter,
  priceFilter,
  onPriceFilter,
  sortOrder,
  onSortChange,
  activeRating,
  
}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className={`Filter-list ${isMenuOpen ? 'toggle-function' : ''}`}>
       <div className="toggle" onClick={toggleMenu} >
        Filter
      </div>
      <div className="Category" >
        <h2 className='title'>Category</h2>
        <select value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}>
          <option value="">All</option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="RatingFilter">
        <h4 className='title'>Filter by Rating:</h4>
        {[null, 1, 2, 3, 4, 5].map((rating) => (
          <button key={rating} onClick={() => onRatingFilter(rating)}
          className={rating === activeRating ? 'activeButton' : 'inactiveButton'}
          id='filbtn'>
            {rating === null ? 'All' : `${rating} ⭐`}
          </button>
        ))}
      </div>

      <div className="PriceFilter">
        <h4 className='title'>Filter by Price Range:</h4>
        <input
        className='filRange'
          type="range"
          min="799"
          max="3000"
          value={priceFilter}
          onChange={(e) => onPriceFilter(parseInt(e.target.value))}
        />
        <p className='filpara'>Price Range: {priceFilter}⁰⁰</p>
      </div>

      <div className="SortBy">
        <h4 className='title'>Sort By Price:</h4>
        {['lowToHigh', 'highToLow'].map((sortOption) => (
          <label key={sortOption}>
            <input
              type="radio"
              name="sort"
              value={sortOption}
              checked={sortOrder === sortOption}
              onChange={() => onSortChange(sortOption)}
            />
            {sortOption === 'lowToHigh' ? 'Low to High' : 'High to Low'}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filter;
