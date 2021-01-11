import React from "react";

const Recipe = (props) => {
  const grindField = (
    <div className='recipeItem grind'>
      <label className='labelArea'>Grind:</label>
      <label className='valueArea'>{props.grind}</label>
    </div>
  );

  const timeField = (
    <div className='recipeItem'>
      <label className='labelArea'>Time:</label>
      <label className='valueArea'>{props.time}s</label>
    </div>
  );

  const coffeeOutField = (
    <div className='recipeItem'>
      <label className='labelArea'>Coffee out:</label>
      <label className='valueArea'>{props.coffeeOut}g</label>
    </div>
  );

  const doseField = (
    <div className='recipeItem'>
      <label className='labelArea'>Dose:</label>
      <label className='valueArea'>{props.dose}g</label>
    </div>
  );

  return (
    <div>
      <form>
        <div className='recipe'>
          {props.dose ? doseField : ""}
          {props.coffeeOut ? coffeeOutField : ""}
          {props.time ? timeField : ""}
          {props.grind ? grindField : ""}
        </div>
      </form>
    </div>
  );
};

export default Recipe;
