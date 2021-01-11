import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className='landingPage'>
      <div className='landingHero'>
        <div className='leftColumnHero'>
          <h1>You deserve better espresso</h1>
          <p>
            Get the grips of dialing in your shots and save your recipes for
            next time. No waste, no fuss.
          </p>
          <p>
            1espresso helps you dial in your shot, save the recipes and more.
          </p>
          <p>
            You provide information about your coffee, we give you a recipe to
            start with. After trying it out you have a chance to give feedback
            on taste and we will help adjust your recipe to perfection.
          </p>
        </div>
        <div className='rightColumnHero'>
          <Link to='/App'>
            <button className='callToActionButton'>Get started!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
