import background from "../../assets/css/Background.module.css"
import './Workout.css';
import React from 'react';
import Carousel from './Carousel';
import plan1 from "../../assets/images/ExerciseImages/Image1.jpg";
import plan2 from "../../assets/images/ExerciseImages/Image2.jpg";
import plan3 from "../../assets/images/ExerciseImages/Image3.jpg";
import plan4 from "../../assets/images/ExerciseImages/Image4.jpg";
import plan5 from "../../assets/images/ExerciseImages/Image5.jpg";
import { imageData } from "./imageData";

export default function Workout() {

    return (
        <div className={background.default}>
            <div className="Greeting" >
                <h1>Hello, Joseph</h1>
                <h2>What would you like to do?</h2>
            </div>
            <div className='Searchbar'>

            </div>
            <div className="ExercisePlans">
                <div className="header-container">
                    <div className="ExercisePlanTitle"><h1>Exercise Plan</h1></div>
                    <button className="rectangle-button">
                        <span>Schedule</span>
                        <span>Exercise</span>
                    </button>
                </div>
                <div>
                    <Carousel images={[plan1, plan2, plan3, plan4, plan5]}/>
                </div>
            </div>
            <div className='Space' style={{marginTop: '50px'}}></div>
            <div className="Exercises">
                <h1>Exercises</h1>
            </div>
            <div>
                <Carousel images={imageData}/>
            </div>
        </div>
    )
}
