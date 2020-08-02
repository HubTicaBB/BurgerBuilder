import React, { Component } from 'react';
import Aux from '../../hoc/Auxx';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.8,
  meat: 1.6,
  bacon: 0.8
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,      
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  };

  addIngredientHandler = type => {
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = this.state.ingredients[type] + 1;

    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
  };

  removeIngredientHandler = type => {
    const updatedIngredients = { ...this.state.ingredients };
    if (updatedIngredients[type] < 1) return;
    updatedIngredients[type] = this.state.ingredients[type] -1;

    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
  };

  render () {
    const disabledButtons = { ...this.state.ingredients };
    for (let button in disabledButtons) {
      disabledButtons[button] = disabledButtons[button] < 1;
    };

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          plusClicked={ this.addIngredientHandler } 
          minusClicked={ this.removeIngredientHandler }
          disabled={ disabledButtons }/>
      </Aux>
    )
  };
}

export default BurgerBuilder;
