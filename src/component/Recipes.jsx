import React, { useEffect, useState } from "react";
import Recepie from "./Recepie";
import uuid from "react-uuid";
import axios from "axios";

const Recipes = () => {
  const [query, setQuery] = useState("chicken");
  const [recepie, setRecepie] = useState([]);
  const [search, setSearch] = useState("");

  const API_ID = "18d77cba";
  const APP_KEY = "d01ed5c9bbe9b56aa02c36687ab0dded";
  const LINK = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getLink();
  }, []);

  const getLink = async () => {
    const response = await axios.get(LINK);
    setRecepie(response.data.hits);
    console.log(response.data.hits);
  };

  return (
    <div>
      {recepie.map((recipe) => (
        <Recepie
          key={uuid()}
          label={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
};

export default Recipes;
