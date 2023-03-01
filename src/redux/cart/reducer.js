import { ADD_TO_CART, REMOVE_TO_CART } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  const selectedProduct = state.cart.find(
    (product) => product.id === action.payload.id
  );
  switch (action.type) {
    case ADD_TO_CART:
      if (selectedProduct) {
        const newCart = state.cart.filter(
          (product) => product.id !== selectedProduct.id
        );
        selectedProduct.quantity = selectedProduct.quantity + 1;
        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_TO_CART:
      if (selectedProduct.quantity > 1) {
        const newCart = state.cart.filter(
          (product) => product.id !== selectedProduct.id
        );
        selectedProduct.quantity = selectedProduct.quantity - 1;
        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };
    default:
      return state;
  }
};
export default reducer;
