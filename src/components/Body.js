import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import notFound from '../../assets/images/notFound.svg';
import { API_URL } from '../constants/constant';
import RestaurantCard from './RestaurantCard';
import ServerError from './ServerError';
import Shimmer from './Shimmer';
import { searchRestaurants } from './utils/helper';

const BodyComponent = () => {
  const [searchedText, setSearchedText] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [isError, setIsError] = useState(false);
  const [totalRestaurants, setTotalRestaurants] = useState(0);

  useEffect(() => {
    getAllRestaurants();
  }, []);

  async function getAllRestaurants() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      const list = data?.data?.cards[2]?.data?.data?.cards;
      setTotalRestaurants(data?.data?.cards[2]?.data?.data?.totalRestaurants);
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
        <span>{totalRestaurants} restaurants</span>
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
