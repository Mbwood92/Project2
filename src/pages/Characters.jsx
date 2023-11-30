import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CharacterData from "../components/CharacterData";

function Character() {
  const params = useParams()
  // add state to hold the data of the form
    const [formData, setFormData] = useState({
        searchterm: "",
      });
      const [infoData, setInfoData] = useState(null);
      const [info, setInfo] = useState({})
    
      //handleChange - updates formData when we type into form
      const handleChange = (event) => {
       //use the event object to detect key and value to update
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = (event) => {
        // prevent page from refreshing on form submissin
        event.preventDefault();
        getSearch(formData.searchterm);
      };
    
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

const getSearch = async (keyword) => {
  const url = `https://rickandmortyapi.com/api/character/${params.id}`;
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
         <div>Enter character names </div> 
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="searchterm"
                onChange={handleChange}
                value={formData.searchterm}
              />
              <input type="submit" value="submit" />
            </form>
          </div>
          {infoData ? <CharacterData infoData={infoData} /> : "loading...."}
        </>
      );
    }
export default Character

