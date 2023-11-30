import React from "react";

function CharacterData({ infoData }) {
  const mydata = infoData.results;


//rendering using map function 
  return (
    <div>
        <h1>List of Rick and Morty Characters</h1>
        {mydata.map(character => (
            <div key={character.id} className="card">
                <img className="card-image"
                src={character.image} alt={character.name} />
                <h2>{character.name}</h2>
                <h4>Status: {character.status}</h4>
                <h4>Species: {character.species}</h4>
                <h4>Type: {character.type}</h4>
               <h4>Gender: {character.gender}</h4>
               </div>

        
        ))}

    </div>
)

}
    


export default CharacterData;