import Image from "next/image";
import React, { createRef } from "react";
import { FilterConsumer } from "../pages/context";
import styles from "../styles/Product.module.css";

function Product({ unique, allProducts }) {
  const productRef = createRef();
  const [state, dispatch] = FilterConsumer();
  const handleScrolling = () => {
    productRef.current.scrollLeft += 100;
  };

  return (
    <div className={styles.product}>
      <div className={styles.productNavigator}>
        <button onClick={handleScrolling}>
          <Image
            src='/arrow-right.png'
            width={10}
            height={33}
            alt='Product Arrow'
          />
        </button>
      </div>
      <div className={styles.container}>
        <h2 className={styles.productName}>{unique}</h2>
        <div className={styles.productsContainer} ref={productRef}>
          {allProducts
            .filter((product) => product.product_name === unique)
            .filter((item1) => {
              if (state.city === "") return item1;
              return item1.address.city === state.city;
            })
            .filter((item2) => {
              if (state.state === "") return item2;
              return item2.address.state === state.state;
            })
            .map((product, index) => (
              <div key={index} className={styles.productCard}>
                <div className={styles.productCardTop}>
                  <img
                    src={product.image}
                    alt='Product'
                    className={styles.productCardImage}
                  />
                  <div className={styles.productCardInfo}>
                    <h4>{product.product_name}</h4>
                    <p>{product.brand_name}</p>
                    <h5>$ {product.price}</h5>
                  </div>
                </div>
                <div className={styles.productCardBottom}>
                  <div>
                    <p>{product.address.state}</p>
                    <p>
                      Date:<span>10:12:2021</span>
                    </p>
                  </div>
                  <p className={styles.productCardDesc}>
                    {product.discription}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
