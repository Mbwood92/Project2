import React, { useState, useEffect } from "react";
import CharacterData from "../components/CharacterData";

function Character() {
  // add state to hold the data of the form
  const [infoData, setInfoData] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  // fetch data from Rick and Morty website
  const getAllCharacters = async (searchTerm) => {
    const url = `https://rickandmortyapi.com/api/character/?name=${searchTerm}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setInfoData(data);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  // fetch all characters onto my react 
  useEffect(() => {
    getAllCharacters(searchTerm);
  }, [searchTerm]);

  //handleChange - updates formData when we type into form
  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setSearchTerm(event.target.value);
  };

  // prevent page from refreshing on form submissin
  const handleSubmit = (event) => {
    event.preventDefault();
    getAllCharacters(searchTerm);
  };

  // renders and added style font above search bar 
  return (
    <>
    <div className="character-container">
    <div 
    style={{ color: 'darkgreen', fontSize: '16px', fontFamily: 'Comic Sans MS, cursive' }}>
  Enter character names
</div> 
      <div>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="searchterm"
            onChange={handleChange}
            value={searchTerm}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
      </div>
      </div>
      {infoData ? <CharacterData infoData={infoData} /> : "loading...."} 
    </>
  );
}

export default Character;


