import React, { useEffect, useState } from "react";
import "./Products-list.css";

const Productslist = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <>
    
      <div className="products-container">
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
          </div>
        ))}
        </div>

        {/* <div className="product-container">

        </div> */}
    </>
  );
};

export default Productslist;
