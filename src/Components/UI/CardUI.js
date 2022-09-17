import React from "react";
import "./Card.css";
const CardUI = (props) => {
  console.log(props);
  const getImageUrl = (pokemonUrl) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${+pokemonUrl
      .split("pokemon/")[1]
      .match(/\d+/)[0]}.png`;
  };
  return (
    // <div className="box_container">
    //   {props.data.map((data, index) => (
    //     <div key={index} className="box">
    //       <div className="imageGraphic">
    //         <img alt={data.name} src={getImageUrl(data.url)} />
    //       </div>
    //       <div className="details_Box">
    //         <div className="titlePokemon">{data.name.toUpperCase()}</div>
    //         {/* <div className="description">Description</div> */}
    //       </div>
    //     </div>
    //   ))}

    // </div>
    <div className="box_container">
      {props.data.map((data, index) => (
        <div key={index} class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <div className="titlePokemon">{data.name.toUpperCase()}</div>
              <img alt={data.name} src={getImageUrl(data.url)} />
            </div>

            <div class="flip-card-back">
              <div className="details_Box">
                <div className="titlePokemon">NAME {data.name.toUpperCase()}</div>
                <div>Height</div>
                <div>Weight</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardUI;
