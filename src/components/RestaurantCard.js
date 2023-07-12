import { IMG_CDN } from '../constants/constant';
import { StarIcon, ReceiptPercentIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
/**
 * @param {*} rating
 * @return {*}
 */
const ratingClass = (rating) => {
  if (rating < 4) {
    return 'res-rating low';
  } else if (rating >= 4) {
    return 'res-rating high';
  } else {
    return 'res-rating';
  }
};

const RestaurantCard = ({
  id,
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  costForTwoString,
  slaString,
  aggregatedDiscountInfo,
}) => {
  const navigate = useNavigate();

  /**
   * @param {*} id
   */
  function navigateTo(id) {
    navigate('/restaurant/' + id);
  }

  return (
    <div onClick={() => navigateTo(id)} className='card shadow'>
      <img src={`${IMG_CDN + cloudinaryImageId}`} />
      <p className='res-name'>{name}</p>
      <p className='res-cuisine'>{cuisines.join(', ')}</p>
      <p className='res-data'>
        <span className={ratingClass(avgRating)}>
          <StarIcon className='hero-icon w-3 h-3 text-white' />
          {avgRating}
        </span>
        <span className='seperator'>|</span>
        <span className='res-sla'>{slaString}</span>
        <span className='seperator'>|</span>
        <span className='res-cost'>{costForTwoString}</span>
      </p>
      {aggregatedDiscountInfo?.shortDescriptionList[0] ? (
        <p className='res-discount'>
          <ReceiptPercentIcon className='hero-icon w-3 h-3' />
          {aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}
        </p>
      ) : (
        ''
      )}
    </div>
  );
};

export default RestaurantCard;
