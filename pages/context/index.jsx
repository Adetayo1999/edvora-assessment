import { createContext, useContext, useReducer } from "react";
import { initialState } from "./reducer";

const FilterContext = createContext();

const FilterProvider = ({ reducer, initialState, children }) => (
  <FilterContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </FilterContext.Provider>
);

export const FilterConsumer = () => useContext(FilterContext);

export default FilterProvider;
