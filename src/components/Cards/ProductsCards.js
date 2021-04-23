import React from "react";
import './Cards.css'
import CardItem from "./CardItem";

const ProductsCards = () => {
  return (
    <div className="cards">
      <h2>Awesome travelling tools in one place!</h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem src='safari-pack.jpg' text='Desert safari pack' label='$500' path='/signup' alt='Safari Pack' />
            <CardItem src='park-pack.jpeg' text='Park fixing pack' label='$100' path='/signup' alt='Park Pack' />
            <CardItem src='tailing-pack.jpg' text='Tailing pack' label='$75' path='/signup' alt='Tailing Pack' />
          </ul>
          <ul className="cards__items">
            <CardItem src='shoes-bag.jpg' text='Shoes bag to keep your shoes clean' label='$30' path='/signup' alt='Shoes Bag' />
            <CardItem src='awesome-bag.jpg' text='Awesome bag for your needs' label='$150' path='/signup' alt='Awesome Bag' />
            <CardItem src='stand-camera.jpeg' text='High quality stand camera' label='$450' path='/signup' alt='Stand Camera' />
          </ul>
        </div>
      </div>
    </div>
  )
};

export default ProductsCards;
