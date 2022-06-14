import react from "react";
import { useState, useEffect } from "react";
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
      <input type="search" onChange={onSearchChange} />
      {filteredMonsters.map((monster) => {
        return <h1 key={monster.id}>{monster.name}</h1>;
      })}
    </div>
  );
}

export default App;
