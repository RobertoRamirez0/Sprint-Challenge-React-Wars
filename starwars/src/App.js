import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';
import CharacterInfo from "./components/CharacterInfo"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [info, setInfo] = useState([{}]);

  useEffect(() => {
    Axios.get("https://swapi.co/api/people/")
    .then(res => {
      setInfo(res.data.results);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  console.log(info);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {info.map((e, index)=>{
        return <CharacterInfo name={e.name} key ={index} gender={e.gender} year={e.birth_year} />
      })}
    </div>
  );
}

export default App;