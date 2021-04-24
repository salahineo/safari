import React from "react";
import './Cards.css'
import CardItem from "./CardItem";

const ServicesCards = () => {
  return (
    <div className="cards">
      <h2>Check out our awesome services!</h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem src='detailed-map.jpg' text='Detailed map to explore all places' label='Free' path='/signup' alt='Map' />
            <CardItem src='tour-guide.jpg' text='Professional tour guide' label='Free' path='/signup' alt='Tour Guide' />
          </ul>
          <ul className="cards__items">
            <CardItem src='photo-session.jpg' text='Photo session during the journey' label='$20' path='/signup' alt='Photo Session' />
            <CardItem src='bus.jpg' text='In-City bus for transportation' label='$30' path='/signup' alt='Bus' />
            <CardItem src='hotel.jpg' text='5 Stars hotel' label='$50 / night' path='/signup' alt='Hotel' />
          </ul>
        </div>
      </div>
    </div>
  )
};

export default ServicesCards;
