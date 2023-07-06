import { StarIcon } from '@heroicons/react/24/solid';
import { useParams } from 'react-router-dom';
import { IMG_CDN } from '../constants/constant';
import Shimmer from './Shimmer';
import useRestaurantMenu from './utils/useRestaurantMenu';

const MenuItems = (menu) => {
  return (
    <div>
      <h2 className='menu-name'>{menu.menu.title}</h2>
      <div className='menu-items'>
        {menu.menu?.dishes?.map((item) => {
          return <p key={item.card?.info?.id}>{item.card?.info?.name}</p>;
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

  return restaurantDetails?.name ? (
    <div className='restaurant-detail-container'>
      <div className='restaurant-detail-header'>
        <div className='details'>
          <p className='name'>{restaurantDetails.name}</p>
          <p className='cuisines'>{restaurantDetails.cuisines.join(', ')}</p>
          <p className='rating'>
            <span className={ratingClass(restaurantDetails.avgRating)}>
              <StarIcon className='hero-icon text-blue-500' />
              {restaurantDetails.avgRating}
            </span>
          </p>
          <p className='locality'>{restaurantDetails.locality}</p>
        </div>
        <img src={IMG_CDN + restaurantDetails.cloudinaryImageId} />
      </div>
      <div className='restaurant-menu-list'>
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
