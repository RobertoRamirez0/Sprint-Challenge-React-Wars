import React from "react";
import styled from "styled-components"


const CharDiv = styled.div `
  background: black;
  color: white;
  opacity: 0.7;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  width: 40%;
  padding-right: 20px;
  padding-left: 20px;
  margin-top: 20px;
`
const CharacterInfo = (props) => {
  return (
    <CharDiv >
      <h2 className="char-name">Character Name: {props.name}</h2>
      <p className="char-info">Gender: {props.gender}</p>
      <p className="char-info">Birth Year: {props.year}</p>
    </CharDiv>
  )
}

export default CharacterInfo