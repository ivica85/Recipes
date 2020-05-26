import React from "react";
import uuid from "react-uuid";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Recipe = ({ label, calories, image, ingredients }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title="Food" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {label}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="ul">
            {ingredients.map((ing) => (
              <li key={uuid()}>{ing.text}</li>
            ))}
          </Typography>
          <Divider />
          <Typography variant="body2" color="secondary" component="span">
            Calories: {calories}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Recipe;
