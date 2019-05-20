import {createStore} from 'redux'

const initialState = {
  name: '',
  category: '',
  authorFirst: '',
  authorLast: '',
  ingredients: [],
  instructions: [],
  recipes: []
}

export const UPDATE_RECIPE = 'UPDATE_RECIPE'
export const UPDATE_RECIPE_CATEGORY = 'UPDATE_RECIPE_CATEGORY'
export const UPDATE_AUTHOR_FIRST = 'UPDATE_AUTHOR_FIRST'
export const UPDATE_AUTHOR_LAST = 'UPDATE_AUTHOR_LAST' 
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS'
export const ADD_INSTRUCTIONS = 'ADD_INSTRUCTIONS'
export const ADD_RECIPE = 'ADD_RECIPE'

function reducer(state = initialState, action){
  const{type, payload} = action;
  switch(type){
    case UPDATE_RECIPE:
      return{
        ...state, name: payload
      }
    case UPDATE_RECIPE_CATEGORY:
      return{
        ...state, category: payload
      }
    case UPDATE_AUTHOR_FIRST:
      return{
        ...state, authorFirst: payload
      }
    case UPDATE_AUTHOR_LAST:
      return{
        ...state, authorLast: payload
      }
    case UPDATE_INGREDIENTS: 
      const newIngredients = [...state.ingredients, payload]
      return{
        ...state, ingredients: newIngredients
      }
    case ADD_INSTRUCTIONS:
      const newInstructions = [...state.instructions, payload]
      return{
        ...state, instructions: newInstructions
      }
    case ADD_RECIPE:
      const {
        name,
        category,
        authorFirst,
        authorLast,
        ingredients,
        instructions
      } = state;
      const recipe = {
        name,
        category,
        authorFirst,
        authorLast,
        ingredients,
        instructions        
      };
      const newRecipes = [...state.recipes, recipe];
      return {...state, recipes: newRecipes };
    default:
      return state
  }
}

export default createStore(reducer)