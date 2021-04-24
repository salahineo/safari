import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import ScrollToTop from "./helpers/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import SignUp from "./pages/SignUp/SignUp";
import Footer from "./components/Footer/Footer";

const App = () => {
  // Return View
  return (
    <main className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/signup" component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
