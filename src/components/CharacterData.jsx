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
                <div className="font">
                <h2 style={{ color: 'green' }}>{character.name}</h2>
                <h3 style={{ color: 'red' }}>Status: {character.status}</h3>
                <h4>Species: {character.species}</h4>
                <h4>Type: {character.type}</h4>
               <h4>Gender: {character.gender}</h4>
               </div>
               </div>

        
        ))}

    </div>
)

}
    


export default CharacterData;