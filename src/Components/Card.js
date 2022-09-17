import CardUI from "./UI/CardUI";

const Card = (props) => {
  return (
    <CardUI data={props.result}/>
  );
};

export default Card;
