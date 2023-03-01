import { ADD_TO_CART, REMOVE_TO_CART } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_TO_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id)
      }
    default:
      return state;
  }
};
export default reducer;

