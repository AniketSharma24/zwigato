import { StarIcon } from '@heroicons/react/24/solid';
import { useParams } from 'react-router-dom';
import { IMG_CDN } from '../constants/constant';
import Shimmer from './Shimmer';
import useRestaurantMenu from './utils/useRestaurantMenu';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../constants/cartSlice';

const MenuItems = (menu) => {
  const dispatch = useDispatch();

  const onAddItem = (e) => {
    dispatch(addItem(e));
  };

  const onRemoveItem = (e) => {
    dispatch(removeItem(e));
  };

  return (
    <div className='flex gap-2 flex-col'>
      <h2 className='menu-name text-lg font-semibold'>{menu.menu.title}</h2>
      <div className='menu-items'>
        {menu.menu?.dishes?.map((item) => {
          return (
            <div
              className='shadow-lg p-4 mb-2 flex gap-2 justify-between'
              key={item.card?.info?.id}
            >
              <span>{item.card?.info?.name}</span>
              <div>
                <button onClick={() => onAddItem(item.card.info)}>
                  <PlusIcon className='w-4 h-4 text-gray-600' />
                </button>
                <button onClick={() => onRemoveItem(item.card.info)}>
                  <MinusIcon className='w-4 h-4 text-gray-600' />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ratingClass = (rating) => {
  if (rating < 4) {
    return 'rating low';
  } else if (rating >= 4) {
    return 'rating high';
  } else {
    return 'rating';
  }
};

const RestaurantDetails = () => {
  const { resId } = useParams();

  const restaurantDetails = useRestaurantMenu(resId);

  const { cart } = useSelector((store) => store);

  console.log(cart);

  return restaurantDetails?.name ? (
    <div className='restaurant-detail-container w-9/12 m-auto flex flex-col gap-6 py-10'>
      <div className='restaurant-detail-header flex justify-between items-start'>
        <div className='details'>
          <p className='name'>{restaurantDetails.name}</p>
          <p className='cuisines'>{restaurantDetails.cuisines.join(', ')}</p>
          <p className='rating'>
            <span className={ratingClass(restaurantDetails.avgRating)}>
              <StarIcon className='hero-icon w-4 h-4 text-gray-600' />
              {restaurantDetails.avgRating}
            </span>
          </p>
          <p className='locality'>{restaurantDetails.locality}</p>
        </div>
        <img
          className='aspect-video w-56'
          src={IMG_CDN + restaurantDetails.cloudinaryImageId}
        />
      </div>
      <div className='restaurant-menu-list flex w-full flex-col gap-4'>
        {restaurantDetails.menuListArr.map((menu) => {
          return <MenuItems menu={menu} key={menu.title}></MenuItems>;
        })}
      </div>
    </div>
  ) : (
    <Shimmer />
  );
};

export default RestaurantDetails;
