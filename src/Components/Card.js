import React, { Profiler, useState,useEffect } from "react";
import axios from "axios";
import CardUI from "./UI/CardUI";

const Card = () => {
 
  const [pokemonAPI, setPokemonAPIData] = useState([]);
  useEffect(()=>{
   const data = axios
   .get(`https://pokeapi.co/api/v2/pokemon?query=html`)
   .then((res) => {
    const pokemon=res.data.results
    setPokemonAPIData(pokemon)
   })
   .catch((err) => setPokemonAPIData(err))
  },[])
  return (
    <CardUI data={pokemonAPI}/>
  );
};

export default Card;
