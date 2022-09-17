import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Components/Card";
import Pagination from "../Components/Pagination";
// import Flip from "./Flip";


const PokemonResult = () => {
  // const [pokemonAPI, setPokemonAPIData] = useState(null);
  const [pokemonApiResult, setPokemonApiResult] = useState([]);
  const [pokemonApiData, setPokemonApiData] = useState(null);
  const baseUrl = `https://pokeapi.co/api/v2/pokemon`;

  const updateResult = (pageUrl) => {
   const data = axios
   .get(pageUrl)
   .then((res) => {
    const pokemonResult=res.data
    setPokemonApiResult(pokemonResult.results);
    setPokemonApiData(pokemonResult);
   })
   .catch((err) => {
    console.log(err)
   });
  };

  useEffect(()=>{
   updateResult(baseUrl);
  },[]);


  return (
   <>
   <Pagination resultData={pokemonApiData} updateResult={updateResult}/>
    <Card result={pokemonApiResult}/>
    {/* <Flip result={pokemonApiData}/> */}
    <Pagination resultData={pokemonApiData} updateResult={updateResult}/>
   </>
  );
};

export default PokemonResult;
