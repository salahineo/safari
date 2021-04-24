import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <form className="user-form" onSubmit={e => e.preventDefault()}>
      <h2>Join our community</h2>
      <div className="form-group">
        <div className="group">
          <label htmlFor="first-name">First Name</label>
          <input id="first-name" type="text" />
        </div>
        <div className="group">
          <label htmlFor="last-name">Last Name</label>
          <input id="last-name" type="text" />
        </div>
      </div>
      <div className="group">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
      </div>
      <div className="group">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <input type="submit" value="Register" />
    </form>
  );
};

export default Form;
