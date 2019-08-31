import React from "react";
import styled from "styled-components"


const CharDiv = styled.div `
  background: black;
  color: white;
`
const CharacterInfo = (props) => {
  return (
    <CharDiv >
      <h2 className="char-name">{props.name}</h2>
      <p className="char-info">{props.gender}</p>
      <p className="char-info">{props.year}</p>
    </CharDiv>
  )
}

export default CharacterInfo