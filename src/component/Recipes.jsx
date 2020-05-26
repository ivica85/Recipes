import React, { useEffect, useState } from "react";
import Recipe from './Recipe';
import uuid from "react-uuid";
import axios from "axios";
import {
  TextField,
  Grid,
  Divider,
  AppBar,
  Toolbar,
  Button,
  Typography,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      flexGrow: 1,
    },
  },
  marginB: {
    marginBottom: theme.spacing(10),
  },
  marginR: {
    marginRight: theme.spacing(5),
  },
  title: {
    marginRight: theme.spacing(30),
  },
  recipe: {
    marginBottom: theme.spacing(120),
  },
  button: {
    marginTop: theme.spacing(1.2),
  },
}));

const Recipes = () => {
  const classes = useStyles();
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const API_ID = "18d77cba";
  const APP_KEY = "d01ed5c9bbe9b56aa02c36687ab0dded";
  const LINK = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getLink();
  }, [query]);

  const getLink = async () => {
    const response = await axios.get(LINK);
    setRecipe(response.data.hits);
    console.log(response.data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div>
      <AppBar position="static" color="transparent" className={classes.marginB}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Find Recipes
          </Typography>
          <form onSubmit={getSearch}>
            <TextField
              id="standard-basic"
              variant="outlined"
              label="Input desire food"
              value={search}
              onChange={updateSearch}
              className={classes.marginR}
            />
            <Button type="submit" className={classes.button}>
              Search
            </Button>
          </form>
        </Toolbar>
      </AppBar>

      <Divider />

      <Grid
        wrap="wrap"
        container
        spacing={3}
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
      >
        {recipe.map((recipe) => (
          <Grid item xs={3}>
            <CardContent>
              <Recipe
                key={uuid()}
                label={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
              />
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Recipes;
