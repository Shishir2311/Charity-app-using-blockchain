import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Projects extends Component {

    render() {
      return (
        <div>
                   <div class="grid">
        <div class="grid-item">
            <div class="card">

                <div class="card-content">
                    <h1 class="card-header">Project Meal</h1>
                    <p class="card-text">
                      Mission: 10 Million Meals is an endeavor to deliver 10 million mid-day meals to schoolchildren in one year. All it takes is 2,000 donors committing to donate ₹2,000 ($30) every month and 43,000 hungry children can be fed one hot meal every school day in 19 states across India.
                    </p>
                 <NavLink  aria-current="page" to="/Meal">
                    <button className="btn btn-dark">Donate <span></span></button>
                    </NavLink>
                </div>
            </div>
        </div>
        <div class="grid-item">
            <div class="card">

                <div class="card-content">
                    <h1 class="card-header">Project Education</h1>
                    <p class="card-text">
                      Education is a fundamental right for all children, but girls from impoverished, illiterate families are mostly denied this right in India. By the time they reach adolescence, 40% are out of school, kept at home doing household chores. Join Mission: Every Girl in School and support the education of thousands of girls. ₹600/month can make a huge difference to one girl's life.
                    </p>
                     <NavLink  aria-current="page" to="/Education">
                    <button className="btn btn-dark">Donate <span></span></button>
                    </NavLink>
                </div>
            </div>
        </div>
        <div class="grid-item">
            <div class="card">

                <div class="card-content">
                    <h1 class="card-header">Mission Oxygen</h1>
                    <p class="card-text">
                      Mission Oxygen is an initiative of the Democratic People Foundation. We have partnered with United Way India to enable people from outside India to contribute to the cause.
                    </p>
                    <NavLink  aria-current="page" to="/Oxygen">
                    <button className="btn btn-dark">Donate <span></span></button>
                    </NavLink>
                </div>
            </div>
        </div>
    </div>

        </div>
    );
}
}

 
export default Projects;