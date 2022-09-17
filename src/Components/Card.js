import React, { Profiler, useState,useEffect } from "react";
import axios from "axios";
import CardUI from "./UI/CardUI";

const Card = (props) => {
  return (
    <CardUI data={props.result}/>
  );
};

export default Card;
