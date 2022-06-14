import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import "./App.css";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setsearchField] = useState("");

  console.log(monsters);
  console.log(searchField);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => {
        setMonsters(users);
      })
    );
  }, []);

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    setsearchField(searchString);
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1>Monsters</h1>
      <input type="search" onChange={onSearchChange} />
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}

export default App;
