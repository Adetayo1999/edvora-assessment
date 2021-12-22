import React from "react";
import { FilterConsumer } from "../pages/context";
import styles from "../styles/MainComponent.module.css";
import Product from "./Product";

function MainComponent({ uniqueProduct, allProducts }) {
  const [state, dispatch] = FilterConsumer();
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainHeading}>
        <h1>Edvora</h1>
        <h3>Products</h3>
      </div>
      {uniqueProduct.length < 1 ? (
        <p>Loading...</p>
      ) : (
        uniqueProduct
          .filter((item) => {
            if (state.product === "") return item;
            return item === state.product;
          })
          .map((unique) => (
            <Product key={unique} unique={unique} allProducts={allProducts} />
          ))
      )}
    </div>
  );
}

export default MainComponent;
