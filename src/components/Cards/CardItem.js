import React from "react";
import {Link} from "react-router-dom";

const CardItem = (props) => {
  return (
    <React.Fragment>
      <li className="cards__item">
        <Link to={props.path} className="cards__item__link">
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img src={`images/${props.src}`} alt={props.alt} className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </React.Fragment>
  );
};

export default CardItem;
