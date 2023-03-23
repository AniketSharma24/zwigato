import RestaurantCard from "./RestaurantCard";
import { API_URL, RESTAURANT_LIST } from "../constants/constant";
import { useEffect, useState } from "react";

const searchRestaurants = (searchedText, restaurants) => {
  console.log(restaurants, searchedText);
  return restaurants.filter((restaurant) =>
    restaurant.data?.data?.name
      ?.toLowerCase()
      .includes(searchedText.toLowerCase())
  );
};

const BodyComponent = () => {
  const [searchedText, setSearchedText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    // Fake api
    getAllRestaurants();
  }, []);

  async function getAllRestaurants() {
    const response = await fetch(API_URL);
    const data = await response.json();
    const list = data?.data?.cards[2]?.data?.data?.cards;

    setFilteredRestaurants(list);
    setAllRestaurants(list);
  }

  return (
    <div>
      <p className="restaurant-count">
        <span>{filteredRestaurants.length} restaurants</span>
        <span>
          <input
            type="text"
            placeholder="Search for restaurants..."
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
      <div className="card-container">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard
              {...restaurant.data?.data}
              key={restaurant.data?.data?.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BodyComponent;
