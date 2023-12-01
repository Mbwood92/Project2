import React from "react";
import { useState, useEffect } from "react";
import LocationData from "../components/LocationData";

function Location() {
  // add state to hold the data of the form
    const [infoData, setInfoData] = useState(null);
    
      // fetch data from website 
      const getSearch = async () => {
        const url = `https://rickandmortyapi.com/api/location/`;
        try {
          const response = await fetch(url);
          const data = await response.json();
          setInfoData(data);
          console.log(data)
        } catch (e) {
          console.error(e);
        }
      };
    //fetch the data onto my react 
      useEffect(() => {
        getSearch();
      }, []);
    // renders
      return (
        <>

          {infoData ? <LocationData infoData={infoData} /> : "loading...."}
        </>
      );
    }
export default Location

