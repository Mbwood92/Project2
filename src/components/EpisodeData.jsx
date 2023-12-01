import React from "react";

function EpisodeData({ infoData }) {
  const mydata = infoData.results;

//rendering using map function. Styling the header. classnames to style in app.css
  return (
    <div>
            <div 
    style={{ color: 'darkgreen', fontSize: '24px', fontFamily: 'Comic Sans MS, cursive', textAlign: 'center' }}>
  Episodes
</div>
        {mydata.map(episode => (
            <div key={episode.id} className="e-card">
               <div className="font">
              <h2 style={{ color: 'darkgreen' }}> Episode: {episode.name}</h2>
                <h4>Air Date: {episode.air_date}</h4>
                <h4>Season: {episode.episode}</h4>
                <h4>Created: {episode.created}</h4>
      
                 </div>

        </div>
        ))}

    </div>
)

}
    


export default EpisodeData;