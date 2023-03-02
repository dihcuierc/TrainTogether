import background from "../../assets/css/Background.module.css"
import './Workout.css';
import React from 'react';
// import Carousel from './Carousel';
import plan1 from "../../assets/images/ExerciseImages/Image1.jpg";
import plan2 from "../../assets/images/ExerciseImages/Image2.jpg";
import plan3 from "../../assets/images/ExerciseImages/Image3.jpg";
import plan4 from "../../assets/images/ExerciseImages/Image4.jpg";
import plan5 from "../../assets/images/ExerciseImages/Image5.jpg";
import { imageData } from "./imageData";
import SearchBar from '../components/searchbar/SearchBar'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Workout() {
    return (
        <div className={background.default}>
            <div className="greeting">
                <h1 className='title'>Hello, John</h1> 
                <p>What would you like to do?</p> 
                <SearchBar className="search-bar" placeholder="Search"/>
            </div>
            <div className="carousel-container">
              <h1>Exercise Plan</h1>
              <Carousel responsive={responsive} showDots={true} infinite={true}>
                  <Card variant="outlined">{card}</Card>
                  <div>Item 2</div>
                  <div>Item 3</div>
                  <div>Item 4</div>
                  <div>Item 5</div>
                  <div>Item 6</div>
              </Carousel>
            </div>

            <div className="carousel-container">
              <h1>Exercises</h1>
              <Carousel responsive={responsive} showDots={true} infinite={true}>
                  <Card variant="outlined">{card}</Card>
                  <div>Item 2</div>
                  <div>Item 3</div>
                  <div>Item 4</div>
                  <div>Item 5</div>
                  <div>Item 6</div>
              </Carousel>
            </div>
        </div>
)
}

const responsive = {
desktop: {
  breakpoint: { max: 3000, min: 1024 },
  items: 3,
  slidesToSlide: 1 // optional, default to 1.
},
tablet: {
  breakpoint: { max: 1024, min: 464 },
  items: 2,
  slidesToSlide: 1 // optional, default to 1.
},
mobile: {
  breakpoint: { max: 464, min: 0 },
  items: 1,
  slidesToSlide: 1 // optional, default to 1.
}
};
const bull = (
<Box
  component="span"
  sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
>
  •
</Box>
);
const card = (
<React.Fragment>
  <CardContent>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      Word of the Day
    </Typography>
    <Typography variant="h5" component="div">
      be{bull}nev{bull}o{bull}lent
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
      adjective
    </Typography>
    <Typography variant="body2">
      well meaning and kindly.
      <br />
      {'"a benevolent smile"'}
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">Learn More</Button>
  </CardActions>
</React.Fragment>
);

