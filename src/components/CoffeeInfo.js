import React from "react";
import { connect } from "react-redux";
import { originField, roastField, updateRecipe, basketSizeField, } from "../actions/index";

class CoffeeInfo extends React.Component {


  firstRecipeHandleClick(e) {
    e.preventDefault();
    const roast = this.props.roast;
    let recipe = {};
    if (roast === "Medium") {
      
      recipe = { Dose: this.props.basketSize - 1, CoffeeOut: 38, Grind: "-", Time: 29, Ratio: 2 };
    } else {
      if (roast === "Light") {
        recipe = { Dose: this.props.basketSize - 2, CoffeeOut: 38, Grind: "-", Time: 30, Ratio: 2 };
      } else {
        recipe = { Dose: this.props.basketSize, CoffeeOut: 38, Grind: "-", Time: 26, Ratio: 2 };
      }
    }
    recipe.BasketSize = this.props.basketSize;
    this.props.updateRecipe(recipe);
    setTimeout(() => {
      window.scrollTo({
        top: 900,
        left: 0,
        behavior: "smooth",
      });
    }, 300);
  }

  render() {
    // TODO: Create a separate object containing all countries and import it here
    const countries = [
      "I don't know",
      "Brazil",
      "Colombia",
      "Guatemala",
      "Kenya",
      "Ethiopia",
      "Italy",
    ];

    const roasts = ["", "Light", "Medium", "Dark"];

    const basketSizes = ["", 17, 18, 20, 21];

    const basketOptions = basketSizes.map((basket, index) => {
      return (<option key={index} value={basket}>{basket}</option>)
      
    })

    const countryItems = countries.map((country, index) => {
      return (
        <option value={country.toString()} key={index}>
          {country.toString()}
        </option>
      );
    });

    const roastOptions = roasts.map((roast, index) => {
      return (
        <option key={index} value={roast}>
          {roast}
        </option>
      );
    });

    return (
      <div className='coffeeInfo'>
        <h2>Tell us a little about your coffee</h2>
        <form>
          <label>
            What is the roast level?
            <br />
            <select
              name='Roast'
              value={this.props.roast}
              onChange={(e) => this.props.roastField(e.target.value)}>
              {roastOptions}
            </select>
          </label>
          <br />
          <br />
          <label>
            What is the size of your basket?
            <br />
            <select
            name='Basket'
            value={this.props.basket}
            onChange={(e)=> {
              this.props.basketSizeField(e.target.value)
            }} >
              {basketOptions}
            </select>
          </label>
          <br />
          <br />
          <label>
            Where does your coffee come from? (Coffee origin)
            <br />
            <select
              onChange={(e) => {
                this.props.originField(e.target.value);
              }}>
              {countryItems}
            </select>
          </label>
          <br />
          <br />
          {this.props.recipeHistory.length > 0 ? (
            ""
          ) : (
            <button
              className='primaryButton'
              onClick={(e) => this.firstRecipeHandleClick(e)}>
              Let's start!
            </button>
          )}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    origin: state.origin,
    roast: state.roast,
    recipeHistory: state.recipeHistory,
    basketSize: state.basketSize,
  };
};


export default connect(mapStateToProps, {
  originField,
  roastField,
  updateRecipe,
  basketSizeField,
})(CoffeeInfo);

