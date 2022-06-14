import React from "react";

const Card = (props) => {
  return (
    <div>
      {props.monsters.map((monster) => {
        return (
          <div key={monster.id}>
            <img src={`https://robohash.org/${monster.id}?set=set2&size=100x100`}/>
            <h1 >{monster.name}</h1>
            <p>{monster.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
