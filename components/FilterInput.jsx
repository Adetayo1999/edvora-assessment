import { useState, useEffect } from "react";
import { FilterConsumer } from "../pages/context";
import styles from "../styles/FilterComponent.module.css";

const FilterInput = ({ filter, allProducts, uniqueProduct }) => {
  const [filterText, setFilterText] = useState({ type: "", text: "" });
  const [state, dispatch] = FilterConsumer();
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFilterText({ type: name, text: value });
  };

  useEffect(() => {
    dispatch({
      type: filterText.type,
      payload: filterText.text,
    });
  }, [filterText, dispatch]);

  return (
    <div className={styles.select}>
      <select
        className={styles.standardSelect}
        name={filter}
        onChange={handleChange}
        value={filterText.text}
      >
        <option value=''>{filter}</option>
        {filter === "Products" &&
          uniqueProduct.map((product, index) => (
            <option key={index} value={product}>
              {product}
            </option>
          ))}
        {filter === "State" &&
          allProducts.map((product, index) => (
            <option key={index} value={product.address.state}>
              {product.address.state}
            </option>
          ))}
        {filter === "City" &&
          allProducts.map((product, index) => (
            <option key={index} value={product.address.city}>
              {product.address.city}
            </option>
          ))}
      </select>
    </div>
  );
};

export default FilterInput;
