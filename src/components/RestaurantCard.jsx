import { FALL_BACK_IMG } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  const imageUrl =
    resData?.menus?.[0]?.popularItems?.[0]?.imgUrl ||
    resData?.menus?.[0]?.popularItems?.[1]?.imgUrl ||
    FALL_BACK_IMG; // extra fallback
  return (
    <div className="data-card">
      <img className="res-logo" src={imageUrl} alt="Restaurant Logo" />
      <div className="data-info">
        <h5>{resData.name}</h5>
        <h5>{resData.description}</h5>
        <h5 className="rating">{resData.averageRating.toFixed(1)}⭐</h5>
        <h4>{resData.displayDeliveryFee}</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;
