import React from "react";
import "./Hero.css";

const ProductsHero = () => {
  return (
    <div className="products" style={{
      backgroundImage: `url('${process.env.PUBLIC_URL}/images/img-9.jpg')`
    }}>
      <div className="products-content">
        <h3>PRODUCTS</h3>
      </div>
    </div>
  );
};

export default ProductsHero;
