import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./component/List";
import AddToList from "./component/AddToList"

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}
function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      age: 36,
      note: "notes..."
    }
  ])

  return (
    <div className="App">
      <h1>Liste</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
