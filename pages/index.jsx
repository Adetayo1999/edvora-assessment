import axios from "axios";
import React, { useState, useEffect } from "react";
import FilterComponent from "../components/FilterComponent";
import MainComponent from "../components/MainComponent";
import styles from "../styles/Home.module.css";

function Home() {
  // Product States
  const [uniqueProduct, setuniqueProduct] = useState([]);
  const [allProducts, setallProducts] = useState([]);

  useEffect(() => {
    axios.get("https://assessment-edvora.herokuapp.com/").then((response) => {
      setallProducts(response.data);
    });
  }, []);

  useEffect(() => {
    const productName = [];

    allProducts.map((data) => {
      productName.push(data.product_name);
    });

    const myUnique = productName.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

    setuniqueProduct(myUnique);
  }, [allProducts]);

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <FilterComponent
          allProducts={allProducts}
          uniqueProduct={uniqueProduct}
        />
        <MainComponent
          uniqueProduct={uniqueProduct}
          allProducts={allProducts}
        />
      </div>
    </div>
  );
}

export default Home;
