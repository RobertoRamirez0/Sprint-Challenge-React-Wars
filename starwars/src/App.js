import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';
import styled from "styled-components";
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

  const AppDiv = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
  `
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <AppDiv >
        {info.map((e, index)=>{
        return <CharacterInfo name={e.name} key ={index} gender={e.gender} year={e.birth_year} />
        })}
      </AppDiv>
    </div>
  );
}

export default App;