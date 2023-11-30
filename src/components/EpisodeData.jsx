import React from "react";

function EpisodeData({ infoData }) {
  const mydata = infoData.results;


//rendering using map function 
  return (
    <div>
        <h1>List of Rick and Morty Episodes</h1>
        {mydata.map(episode => (
            <div key={episode.id} className="card">
                <img className="card-image"
                  src={episode.image} alt={episode.name} />
                <h2>Name: {episode.name}</h2>
                <h4>Air Date: {episode.air_date}</h4>
                <h4>Episode: {episode.episode}</h4>
                {episode.characters.map((character,i) => (
                    <div key={i} >
                        <h4>characters: {character}</h4>
                    </div>
                    
                ))} 
               
               </div>

        
        ))}

    </div>
)

}
    


export default EpisodeData;