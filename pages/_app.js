import "../styles/globals.css";
import FilterProvider from "./context";
import reducer, { initialState } from "./context/reducer";

function MyApp({ Component, pageProps }) {
  return (
    <FilterProvider reducer={reducer} initialState={initialState}>
      <Component {...pageProps} />
    </FilterProvider>
  );
}

export default MyApp;
