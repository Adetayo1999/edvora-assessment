import React from "react";
import styles from "../styles/FilterComponent.module.css";
import FilterInput from "./FIlterInput";

const FilterComponent = ({ allProducts, uniqueProduct }) => {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterHeading}>
        <h4>Filters</h4>
      </div>
      <div className=''>
        <FilterInput
          filter='Products'
          allProducts={allProducts}
          uniqueProduct={uniqueProduct}
        />
        <FilterInput filter='State' allProducts={allProducts} />
        <FilterInput filter='City' allProducts={allProducts} />
      </div>
    </div>
  );
};

export default FilterComponent;
