import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
const Body = () => {
  const [restaurantList, setList] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          "https://my-json-api-k060.onrender.com/restaurants"
        );
        const data = await response.json();

        setList(data);
      } catch (error) {
        console.log("Error fetching the data", error);
      }
    };
    fetchRestaurants();
  }, []);
  if (restaurantList.length == 0) {
    return <h1>Loading🔃.Please Wait</h1>;
  }
  return (
    <div>
      <button
        className="filter-btn"
        onClick={() => {
          setList(restaurantList.filter((res) => res.averageRating > 4.6));
        }}
      >
        Top Rated Restaurants
      </button>

      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
