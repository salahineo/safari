import React from "react";
import "./Hero.css";

const SignUpHero = () => {
  return (
    <div className="sign-up" style={{
      backgroundImage: `url('${process.env.PUBLIC_URL}/images/img-8.jpg')`
    }}>
      <div className="sign-up-content">
        <h3>SIGN UP</h3>
      </div>
    </div>
  );
};

export default SignUpHero;
