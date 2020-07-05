import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      input: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ monsters: users });
      });
  }

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { monsters, input } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(input.toLocaleLowerCase());
    });
    return (
      <div className="App">
        <h1>Monsters</h1>
        <SearchBox
          placeholder="Search Monsters"
          onInputChange={this.handleInputChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
