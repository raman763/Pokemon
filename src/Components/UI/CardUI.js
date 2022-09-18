import React, { useState } from "react";
import axios from "axios";
import "./Card.css";
const CardUI = (props) => {
  const poData = [...props.data];
  const getImageUrl = (pokemonUrl) => {
    const pokemonId = pokemonUrl.split("pokemon/")[1].match(/\d+/)[0];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${+pokemonId}.png`;
  };
  const [pokemonDetail, setPokemonDetail] = useState({ weight: 0, height: 0 });

  const updatePokemonDetail = (pageUrl) => {
    axios
      .get(pageUrl)
      .then((res) => {
        const pokemonResult = res.data;
        setPokemonDetail({
          height: pokemonResult.height,
          weight: pokemonResult.weight,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPokemonDetail = (pokemonUrl) => {
    updatePokemonDetail(pokemonUrl);
  };
  return (
    <div className="box_container">
      {poData.map((data, index) => (
        <div key={index} className="flip-card">
          <div className="flip-card-inner">
            <div
              className="flip-card-front"
              data-index={index}
              data-url={data.url}
              onMouseEnter={() => {
                getPokemonDetail(data.url);
              }}
            >
              <div className="titlePokemon">{data.name.toUpperCase()}</div>
              <img alt={data.name} src={getImageUrl(data.url)} />
            </div>
            <div className="flip-card-back">
              <div className="details_Box">
                <div className="titlePokemon">
                  NAME {data.name.toUpperCase()}
                </div>
                {pokemonDetail.height && (
                  <div>Height {pokemonDetail.height}</div>
                )}
                {pokemonDetail.weight && (
                  <div>Weight {pokemonDetail.weight}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardUI;
