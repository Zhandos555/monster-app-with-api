import Card from "../card/card.component";

const CardList = (props) => {
  return (
    <div>
      <Card monsters={props.monsters}/>
    </div>
  );
};

export default CardList;
