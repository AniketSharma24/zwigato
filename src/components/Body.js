import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { useEffect, useState, useContext } from 'react';
import notFound from '../../assets/images/notFound.svg';
import UserContext from '../constants/UserContext';
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

  const { user, setUser } = useContext(UserContext);

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

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='mb-10'>
      <div className='w-full bg-gray-900 h-72 gap-4 flex items-stretch justify-center py-5'>
        <div className='w-[300px] bg-gray-400'></div>
        <div className='w-[300px] bg-gray-400'></div>
        <div className='w-[300px] bg-gray-400'></div>
        <div className='w-[300px] bg-gray-400'></div>
      </div>
      <p className='px-12 py-10 restaurant-count flex items-center justify-between'>
        <span className='font-normal text-lg'>
          <span className='font-semibold'>{totalRestaurants}</span> restaurants
        </span>
        <span className='flex gap-4'>
          <input
            type='text'
            placeholder='Search for restaurants...'
            value={searchedText}
            onChange={(e) => {
              setSearchedText(e.target.value);
            }}
            className='border-stone-300 text-sm border-[1px] rounded px-4 py-1'
          />
          <input
            type='text'
            placeholder='Logged in user...'
            value={user.name}
            onChange={(e) => {
              setUser({ name: e.target.value, ...user });
            }}
            className='border-stone-300 text-sm border-[1px] rounded px-4 py-1'
          />
          <button
            onClick={() => {
              setFilteredRestaurants(
                searchRestaurants(searchedText, allRestaurants)
              );
            }}
            className='unset text-sm rounded px-4 py-1 bg-rose-800 text-white'
          >
            Search
          </button>
        </span>
      </p>
      {filteredRestaurants.length === 0 ? (
        <div className='px-12 not-found-error flex flex-col gap-4 items-center'>
          <img className='not-found-error-img w-48 h-48' src={notFound} />
          <p className='text-sm flex gap-2 items-center'>
            <ExclamationTriangleIcon className='hero-icon w-4 h-4 text-red-500' />
            No restaurant matches your search criteria
          </p>
        </div>
      ) : (
        <div className='px-12 card-container flex flex-wrap gap-6'>
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
