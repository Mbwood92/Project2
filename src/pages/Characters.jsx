import React from "react";
import { useState, useEffect } from "react";
import CharacterData from "../components/CharacterData";

function Character() {
  
  // add state to hold the data of the form
        const [infoData, setInfoData] = useState();

    
      // fetch data from Rick and Morty website 
      const getAllCharacters = async () => {
        const url = `https://rickandmortyapi.com/api/character/`;
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
        getAllCharacters();
      }, []);
    // renders
      return (
        <>
          {infoData ? <CharacterData infoData={infoData} /> : "loading...."}
        </>
      );
    }
export default Character

