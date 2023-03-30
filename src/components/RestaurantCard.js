import { IMG_CDN } from '../constants/constant';
import { StarIcon, ReceiptPercentIcon } from '@heroicons/react/24/solid';

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
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  costForTwoString,
  slaString,
  aggregatedDiscountInfo,
}) => {
  return (
    <div className='card'>
      <img src={`${IMG_CDN + cloudinaryImageId}`} />
      <p className='res-name'>{name}</p>
      <p className='res-cuisine'>{cuisines.join(', ')}</p>
      <p className='res-data'>
        <span className={ratingClass(avgRating)}>
          <StarIcon className='hero-icon text-blue-500' />
          {avgRating}
        </span>
        <span className='seperator'>|</span>
        <span className='res-sla'>{slaString}</span>
        <span className='seperator'>|</span>
        <span className='res-cost'>{costForTwoString}</span>
      </p>
      {aggregatedDiscountInfo?.shortDescriptionList[0] ? (
        <p className='res-discount'>
          <ReceiptPercentIcon className='hero-icon text-blue-500' />
          {aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}
        </p>
      ) : (
        ''
      )}
    </div>
  );
};

export default RestaurantCard;
