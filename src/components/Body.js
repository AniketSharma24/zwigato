import RestaurantCard from './RestaurantCard';
import { API_URL, RESTAURANT_LIST } from '../constants/constant';
import { useEffect, useState } from 'react';
import notFound from '../../assets/images/notFound.svg';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const searchRestaurants = (searchedText, restaurants) => {
  return restaurants.filter((restaurant) =>
    restaurant.data?.name?.toLowerCase().includes(searchedText.toLowerCase())
  );
};

const BodyComponent = () => {
  const [searchedText, setSearchedText] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    // Fake api
    getAllRestaurants();
    console.log('useEffect() called');
  }, []);

  async function getAllRestaurants() {
    const response = await fetch(API_URL);
    const data = await response.json();
    const list = data?.data?.cards[2]?.data?.data?.cards;
    setFilteredRestaurants(list);
    setAllRestaurants(list);
  }
  console.log('render() called');
  return allRestaurants.length === 0 ? (
    <p className='search-text'>Searching...</p>
  ) : (
    <div>
      <p className='restaurant-count'>
        <span>{filteredRestaurants.length} restaurants</span>
        <span>
          <input
            type='text'
            placeholder='Search for restaurants...'
            value={searchedText}
            onChange={(e) => {
              setSearchedText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setFilteredRestaurants(
                searchRestaurants(searchedText, allRestaurants)
              );
            }}
          >
            Search
          </button>
        </span>
      </p>
      {filteredRestaurants.length === 0 ? (
        <div className='not-found-error'>
          <img src={notFound} />
          <p>
            <ExclamationTriangleIcon className='hero-icon text-blue-500' />
            No restaurant matches your search criteria
          </p>
        </div>
      ) : (
        <div className='card-container'>
          {filteredRestaurants.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.data} key={restaurant.data?.id} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BodyComponent;
