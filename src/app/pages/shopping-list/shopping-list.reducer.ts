import { Ingredient } from 'src/app/shared/models/ingredients.model';

const initialState = {
  ingredients: [new Ingredient('Maças', 5), new Ingredient('Laranjas', 7)],
};

export function shoppingListReducer(state = initialState, action) {}
