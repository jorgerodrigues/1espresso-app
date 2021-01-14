import React from "react";
import { calculateNewRecipe } from "./utils/recipeCalculationTool";

const About = () => {
  return (
    <div>
      <h1>Espresso matters</h1>
      <p>Espresso is an experience. Be it by itself, or as a milk drink. You want it creamy and gorgeous, otherwise, why bother?</p>
      <p>
        The home-barista comes in all forms and shapes. Some of us, got a coffee machine as a gift and still have no clue how to pull a shot, while some others, have a full-blown expensive setup.
        Regardless of which situation you are in, you can use 1espresso to get your shot dialed in.
      </p>
      <h1>Less coffee waste</h1>
      <p>Reducing coffee waste is one of the main drivers for creating 1espresso</p>
      <p>A professional barista uses anything between 2 and 7 espressos to dial in their setup when changing coffee, machine, etc.</p>
      <p>This setup can amount to almost half a coffee bag.</p>
      <p>
        This process is all fine and well for a coffee house, but not good enough for a home-barista. That would mean that if you really want to get your shot dialled in, you would have to waste
        around 40% of your expensive speciality coffee bag.
      </p>
      <h2>How to dial in</h2>
      <p>
        The tool below will help you dial-in an excellent shot. You should let us know some basic info on your coffee and we will give you a first recipe. All the adjustments will be suggested based
        on time, dose and taste.
      </p>
      <p>
        We want you to always hit your numbers by having your shot being extract within the ideal time window, which is between 25 and 33 seconds. However, if you found a different set of settings
        that works great for you, all the better.
      </p>
      <h2>Grind settings</h2>
      <p>Proper grinding is the key to a gorgeous shot.</p>
      <p>
        Start your first grind with whatever setting you have used for your previous espresso and from there we will help you adjust to find the proper grind setting. We recommend you make small
        adjustments each time. For example, one step if you have a stepped grinder.
      </p>
    </div>
  );
};

export default About;
