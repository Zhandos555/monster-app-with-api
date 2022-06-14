import React from "react";

const Card = (props) => {
  return <div>{props.monsters.map((monster) => {
    return <h1 key={monster.id}>{monster.name}</h1>
  })}</div>;
};

export default Card;
