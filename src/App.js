import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { Search } from "./components/search/search.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ monsters: data }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 id="title">Monsters</h1>
        <Search
          placeholder="search monsters"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        ></Search>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
