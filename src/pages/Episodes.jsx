import React from "react";
import { useState, useEffect } from "react";
import EpisodeData from "../components/EpisodeData";

function Episodes() {
  // add state to hold the data of the form
      const [infoData, setInfoData] = useState(null);
    
    // fetch data from nasa website 
      const getSreach = async (keyword) => {
        const url = `https://rickandmortyapi.com/api/episode/`;
        try {
          const response = await fetch(url);
          const data = await response.json();
          setInfoData(data);
          console.log(data);
        } catch (e) {
          console.error(e);
        }
      };
    //fetch the data onto my react 
      useEffect(() => {
        getSreach();
      }, []);
    // renders
      return (
        <>
       
        {infoData ? <EpisodeData infoData={infoData} /> : "loading...."}
        </>
      );
    }
export default Episodes

