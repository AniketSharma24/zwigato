export const searchRestaurants = (searchedText, restaurants) => {
  return restaurants.filter((restaurant) =>
    restaurant.data?.name?.toLowerCase().includes(searchedText.toLowerCase())
  );
};
