const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cartState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};


const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cartState', serializedState);
  } catch (err) {
  }
};

const initialState = loadState() || {
  cart: {
    items: [],
  },
};

export const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case "ADD_TO_CART":
      newState = {
        ...state,
        cart: {
          ...state.cart,
          items: [...state.cart.items, action.payload],
        },
      };
      saveState(newState);
      return newState;
    case "DELETE_FROM_CART":
      newState = {
        ...state,
        cart: {
          ...state.cart,
          items: state.cart.items.filter(
            (item) => item.id !== action.payload.id
          ),
        },
      };
      saveState(newState);
      return newState;
    default:
      return state;
  }
};
