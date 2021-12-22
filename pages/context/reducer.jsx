export const initialState = {
  product: "",
  city: "",
  state: "",
};

export const actionTypes = {
  Products: "Products",
  City: "City",
  State: "State",
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case actionTypes.Products:
      return {
        ...currentState,
        product: action.payload,
      };
    case actionTypes.City:
      return {
        ...currentState,
        city: action.payload,
      };
    case actionTypes.State:
      return {
        ...currentState,
        state: action.payload,
      };
    default:
      return currentState;
  }
};

export default reducer;
