import React from "react";
import MealCardContainer from '../../components/MealCardContainer.jsx';

const categorizedMeals = {
  LowSodium: [
    {
      imageSrc: "/meals/akaraandpap.png",
      altText: "Akara and Pap",
      title: "Akara and Pap",
    },
    {
      imageSrc: "/meals/creamysaladandboiledegg.jpg",
      altText: "Creamy Salad and Boiled Egg",
      title: "Creamy Salad and Boiled Egg",
    },
  ],
  LowFat: [
    {
      imageSrc: "/meals/scrambledsalad.png",
      altText: "Scrambled Salad",
      title: "Scrambled Salad",
    },
    {
      imageSrc: "/meals/avocadosalad.png",
      altText: "Avocado Salad",
      title: "Avocado Salad",
    },
  ],
  JuiceandDrinks: [
    {
      imageSrc: "/meals/orangejuice.png",
      altText: "Orange Juice",
      title: "Orange Juice",
    },
    {
      imageSrc: "/meals/beetsmoothie.png",
      altText: "Beet Smoothie",
      title: "Beet Smoothie",
    },
  ],
};

const MealGroups = ({ categorizedMeals }) => {
  // Check if categorizedMeals is undefined or null
  if (!categorizedMeals) {
    return <div>No meals available</div>; // Handle the case where categorizedMeals is not provided
  }

  return (
    <div>
      {Object.entries(categorizedMeals).map(([category, meals]) => (
        <div key={category} style={{ marginBottom: "2rem" }}>
          <h2>{category}</h2>
          <MealCardContainer meals={meals} />
        </div>
      ))}
    </div>
  );
};

// Main component to render MealGroups
const Meals = () => {
  return <MealGroups categorizedMeals={categorizedMeals} />;
};

export default Meals;
