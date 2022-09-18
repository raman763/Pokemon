import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Components/Card";
import Pagination from "../Components/Pagination";
import Navbar from "../Components/Navbar";

const PokemonResult = () => {
  const [pokemonApiResult, setPokemonApiResult] = useState([]);
  const [pokemonApiData, setPokemonApiData] = useState(null);

  const updateResult = (pageUrl) => {
    axios
      .get(pageUrl)
      .then((res) => {
        const pokemonResult = res.data;
        setPokemonApiResult(pokemonResult.results);
        setPokemonApiData(pokemonResult);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const baseUrl = `https://pokeapi.co/api/v2/pokemon`;
    updateResult(baseUrl);
  }, []);

  return (
    <>
      <Navbar />
      <Pagination resultData={pokemonApiData} updateResult={updateResult} />
      <Card result={pokemonApiResult} />
      <Pagination resultData={pokemonApiData} updateResult={updateResult} />
    </>
  );
};

export default PokemonResult;
