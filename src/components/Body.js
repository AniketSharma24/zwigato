import RestaurantCard from './RestaurantCard';
import { API_URL } from '../constants/constant';
import { useEffect, useState } from 'react';
import notFound from '../../assets/images/notFound.svg';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import ServerError from './ServerError';
/**
 *
 *
 * @param {*} searchedText
 * @param {*} restaurants
 * @return {*} 
 */
const searchRestaurants = (searchedText, restaurants) => {
  return restaurants.filter((restaurant) =>
    restaurant.data?.name?.toLowerCase().includes(searchedText.toLowerCase())
  );
};

const BodyComponent = () => {
  const [searchedText, setSearchedText] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getAllRestaurants();
  }, []);

async function getAllRestaurants() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      const list = data?.data?.cards[2]?.data?.data?.cards;
      setFilteredRestaurants(list);
      setAllRestaurants(list);
    } catch (err) {
      setIsError(true);
    }
  }

  if (isError) {
    return (
      <ServerError message='There is an error from the server. Please retry after sometime.' />
    );
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
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
          <img className='not-found-error-img' src={notFound} />
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
