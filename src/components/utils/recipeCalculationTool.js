//Brew ratio is affected by the roast level. The darker it is the easier it is to extract. Therefore, reducing the ratio also helps with fixing bitterness

//Coffee is bitter when over-extracted. Over extraction can be caused by either a too slow shot or a too short (small ratio) shot.
// So, if the pull is coming in too slow, we increase the dose. If it is within range, but still bitter, reduce the ratio a little bit.
// too hot of a temperature increases extraction, which can cause over extraction

// Sourness is often a sign of a coffee that is under-extracted. Under extraction can be caused by a shot that runs too fast or a shot from a coffee that is being pulled with a too-small ratio for a given coffee (common with light roast coffee)
// Adjustments here will be done to increase extraction. In this order
// Get the shot within the brewing window by adjusting the grind finer (making the shot slower)
// If the shot is now within the time window but still sour, we increase the ratio - forcing more water through to help with the extraction.
// If the user has the possibility, suggest an increase in temperature in the machine. That helps extraction even more.

// Adjusting dose: This is done to round off the shot, meaning, should be done when we are on the ballpark of good but not quite there yet.
const fixTaste = (recipeHistory, taste) => {
  switch (taste) {
    case "Too bitter":
      console.log("Fixing bitterness");
      recipeHistory.CoffeeOut = recipeHistory.CoffeeOut - 1;
      return recipeHistory;
    case "Too sour":
      console.log("Fixing sourness");
      recipeHistory.CoffeeOut = recipeHistory.CoffeeOut + 1;
      return recipeHistory;

    default:
      break;
  }
};

const fixFloW = ({ ...recipeHistory }, flow) => {
  switch (flow) {
    case "Too slow":
      console.log("Too Slow");
      recipeHistory.Grind = "Coarser";
      return recipeHistory;
    case "Too quick":
      console.log("Too quick");
      recipeHistory.Grind = "Finer";
      return recipeHistory;

    default:
      recipeHistory.Grind = "-";
      return recipeHistory;
  }
};

// todo rename the function
export const calculateNewRecipe = (recipeHistory, flow, taste) => {
  console.log(recipeHistory);
  let updatedRecipe = recipeHistory;
  updatedRecipe = fixFloW(updatedRecipe, flow);
  updatedRecipe = fixTaste(updatedRecipe, taste);
  console.log(updatedRecipe);
  return updatedRecipe;
};
