import React from "react";
import './styles/MealCard.css';

const MealCard = ({ imageSrc, title }) => {
  return (
    <div className="food-card">
      <img
        src={"https://picsum.photos/id/237/200/300"}
        alt={"cute dog"}
        className="food-image"
      />
      <div className="food-title">{"Cutie"}</div>
    </div>
  );
};

export default MealCard;
