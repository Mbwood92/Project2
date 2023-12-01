import React from "react";

function LocationData({ infoData }) {
  const mydata = infoData.results;


//rendering using map function 
  return (
    <div>
        <h1>List of Rick and Morty Episodes</h1>
        {mydata.map(location => (
            <div key={location.id} className="card">
              <div className="font">
               <h2 style={{ color: 'green' }}>Location: {location.name}</h2>
                <h4>Type: {location.type}</h4>
                <h4>Demension: {location.dimension}</h4>
              </div>
               </div>

        
        ))}

    </div>
)

}
    


export default LocationData;