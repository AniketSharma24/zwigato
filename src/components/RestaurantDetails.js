import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid';
import Shimmer from './Shimmer';
import { IMG_CDN } from '../constants/constant';

const MenuItems = (menu) => {
  return (
    <div>
      <h2 className='menu-name'>{menu.menu.title}</h2>
      <div className='menu-items'>
        {menu.menu?.dishes?.map((item) => {
          return <p>{item.card?.info?.name}</p>;
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
  const [restaurantDetails, setRestaurantDetails] = useState();
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    getRestaurantDetailById(resId);
  }, []);

/**
 * @param {*} id
 */
async function getRestaurantDetailById(id) {
    const resp = await fetch(
      'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.109024&lng=79.044678&restaurantId=' +
        id
    );
    const json = await resp.json();
    let objectFound = json.data.cards.find(
      (obj) => obj.hasOwnProperty('groupedCard') && obj
    );

    let {
      name,
      cuisines,
      avgRating,
      locality,
      aggregatedDiscountInfo,
      cloudinaryImageId,
    } = json.data?.cards
      ?.map((obj) => {
        if (obj.card?.card?.hasOwnProperty('info')) return obj.card?.card?.info;
      })
      .filter(Boolean)[0];

    let menuListArr = [];
    objectFound?.groupedCard?.cardGroupMap?.REGULAR?.cards?.forEach((obj) => {
      if (obj.card?.card?.hasOwnProperty('itemCards')) {
        let menu = {
          title: obj.card?.card?.title,
          dishes: obj.card?.card?.itemCards,
        };
        menuListArr.push(menu);
      }
    });

    setMenuList(menuListArr);
    setRestaurantDetails({
      name,
      cuisines,
      avgRating,
      locality,
      menuListArr,
      aggregatedDiscountInfo,
      cloudinaryImageId,
    });
  }
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
