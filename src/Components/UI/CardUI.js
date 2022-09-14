import React from "react";
import "./Card.css";
const CardUI = (props) => {
  console.log(props)
  return (
    <div className="box_container">
      {props.data.map((data) => (
        <div key={data.id} className="box">
          <div className="imageGraphic">
            <img src="" alt="" />
          </div>
          <div className="details_Box">
          <div className="titlePokemon">{data.name}</div>
          <div className="description">Description</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardUI;
