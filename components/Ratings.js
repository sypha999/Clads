import React from "react";
import { useState } from "react";
import Rating from "react-native-easy-rating";

const RatingComponent = () => {
  const [rating, setRating] = useState();

  return (
    <Rating
      rating={rating}
      max={5}
      iconWidth={24}
      iconHeight={24}
      onRate={setRating}
    />
  );
};

export default RatingComponent;
