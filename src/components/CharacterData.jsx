import React from "react";

function CharacterData({ infoData }) {
  const mydata = infoData.results;


//rendering using map function 
  return (
    <div>
        <div 
    style={{ color: 'darkgreen', fontSize: '24px', fontFamily: 'Comic Sans MS, cursive', textAlign: 'center' }}>
  Rick & Morty
</div>
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