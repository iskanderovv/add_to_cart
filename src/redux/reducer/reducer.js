export const initialState = {
  cart: {
    items: [],
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          items: [...state.cart.items, action.payload],
        },
      };
    case "DELETE_FROM_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          items: state.cart.items.filter(
            (item) => item.id !== action.payload.id
          ),
        },
      };
    default:
      return state;
  }
};
