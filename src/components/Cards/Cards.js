import React from "react";
import './Cards.css'
import CardItem from "./CardItem";

const Cards = () => {
  return (
    <div className="cards">
      <h2>Check Out These EPIC Destinations!</h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem src='img-9.jpg' text='Explore the hidden waterfall deep inside the Amazon Jungle' label='Adventure' path='/services' alt='Adventure Image' />
            <CardItem src='img-2.jpg' text='Travel through the Islands of Bali in a private cruise' label='Luxury' path='/services' alt='Luxury Image' />
          </ul>
          <ul className="cards__items">
            <CardItem src='img-3.jpg' text='Set Sail in the Atlantic Ocean visiting uncharted waters' label='Mystery' path='/services' alt='Mystery Image' />
            <CardItem src='img-4.jpg' text='Experience Football on Top of the Himilayan Mountains' label='Adventure' path='/services' alt='Adventure Image' />
            <CardItem src='img-8.jpg' text='Ride through the Sahara Desert on a guided camel tour' label='Adrenaline' path='/services' alt='Adrenaline Image' />
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Cards;
