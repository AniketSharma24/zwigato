import { useEffect, useState } from 'react';
import { FETCH_MENU_URL } from '../../constants/constant';

const useRestaurantMenu = (resId) => {
  const [restaurantDetail, setRestaurantDetails] = useState(null);

  useEffect(() => {
    getRestaurantDetailById(resId);
  }, []);

  async function getRestaurantDetailById(id) {
    const resp = await fetch(FETCH_MENU_URL + id);
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

  return restaurantDetail;
};

export default useRestaurantMenu;
