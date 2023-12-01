import React from "react";

function LocationData({ infoData }) {
  const mydata = infoData.results;


//rendering using map function 
  return (
    <div>
        <div 
    style={{ color: 'darkgreen', fontSize: '24px', fontFamily: 'Comic Sans MS, cursive', textAlign: 'center' }}>
  Locations
</div>
        {mydata.map(location => (
            <div key={location.id} className="l-card">
              <div className="font">
               <h2 style={{ color: 'green' }}>Location: {location.name}</h2>
                <h4>Type: {location.type}</h4>
                <h4>Demension: {location.dimension}</h4>
                <h4>Created:{location.created}</h4>
              </div>
               </div>

        
        ))}

    </div>
)

}
    


export default LocationData;