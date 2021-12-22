import axios from "axios";
import React, { useState, useEffect } from "react";
import FilterComponent from "../components/FilterComponent";
import MainComponent from "../components/MainComponent";
import styles from "../styles/Home.module.css";
import Head from "next/head";

function Home() {
  // Product States
  const [uniqueProduct, setuniqueProduct] = useState([]);
  const [allProducts, setallProducts] = useState([]);

  // Api Call to get all products
  useEffect(() => {
    axios.get("https://assessment-edvora.herokuapp.com/").then((response) => {
      setallProducts(response.data);
    });
  }, []);

  // Logic to filter out all unique product names to avoid repetitive looping.
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
    <>
      <Head>
        <meta
          name='description'
          content='Edvora Assessment developed by Adetayo Omotomiwa'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Edvora Assessment</title>
      </Head>
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
    </>
  );
}

export default Home;
