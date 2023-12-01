import React from "react";
import { useState, useEffect } from "react";
import EpisodeData from "../components/EpisodeData";

function Episodes() {
  // add state to hold the data of the form
      const [infoData, setInfoData] = useState(null);
    
    // fetch data from episode website 
      const getSearch = async (keyword) => {
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
        getSearch();
      }, []);
    // renders
      return (
        <>
   
        {infoData ? <EpisodeData infoData={infoData} /> : "loading...."} 
        </> //The component must return some JSX
      );
    }
export default Episodes // We must export the component to use it in other files

