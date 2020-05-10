import React from "react";

const Recepie = ({ label, calories, image, ingredients }) => {
  return (
    <div>
      <h1>{label}</h1>
      <img src={image} alt="pic" />

      <ul>
        {ingredients.map((ing) => (
          <li>{ing.text}</li>
        ))}
      </ul>

      <h2>Calories: {calories}</h2>
    </div>
  );
};

export default Recepie;
