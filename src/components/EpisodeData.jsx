import React from "react";

function EpisodeData({ infoData }) {
  const mydata = infoData.results;

  const episodeImages = {
    id : 'placeholder.jpg'
    // Add more episodes and image URLs as needed
  };

//rendering using map function 
  return (
    <div>
        <h1>List of Rick and Morty Episodes</h1>
        {mydata.map(episode => (
            <div key={episode.id} className="card">
               <div className="font">
              <h2 style={{ color: 'darkgreen' }}> Episode: {episode.name}</h2>
                <h4>Air Date: {episode.air_date}</h4>
                <h4 style={{ color: 'white' }}>Season: {episode.episode}</h4>
                
                    
               
               
               </div>

        </div>
        ))}

    </div>
)

}
    


export default EpisodeData;