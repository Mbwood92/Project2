import React from "react";

function Results({ infoData }) {
  const mydata = infoData.results;

  if(!mydata) {
    return null;
  }

//rendering using map function 
  return (
    <div>
        <h2>List of Rick and Morty Characters</h2>
        {mydata.map(character => (
            <div key={character.id}>
                <img src={character.image} alt={character.name} />
                <h2>Name: {character.name}</h2>
                <h4>Status: {character.status}</h4>
                <h4>Species: {character.species}</h4>
                <h4>Gender: {character.gender}</h4>
                </div>
        ))}
    </div>
);
        };
   

export default Results;