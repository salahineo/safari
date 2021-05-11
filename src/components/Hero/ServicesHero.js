import React from "react";
import "./Hero.css";

const ProductsHero = () => {
  return (
    <div className="services" style={{
      backgroundImage: `url('${process.env.PUBLIC_URL}/images/img-2.jpg')`
    }}>
      <div className="services-content">
        <h3>SERVICES</h3>
      </div>
    </div>
  );
};

export default ProductsHero;
