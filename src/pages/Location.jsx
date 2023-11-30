import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LocationData from "../components/LocationData";

function Location() {
  // add state to hold the data of the form
    const [formData, setFormData] = useState({
        searchterm: "",
      });
      const [infoData, setInfoData] = useState(null);
    
      //handleChange - updates formData when we type into form
      const handleChange = (event) => {
       //use the event object to detect key and value to update
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = (event) => {
        // prevent page from refreshing on form submissin
        event.preventDefault();
        getSreach(formData.searchterm);
      };
    
      // fetch data from website 
      const getSreach = async () => {
        const url = `https://rickandmortyapi.com/api/location/`;
        try {
          const response = await fetch(url);
          const data = await response.json();
          setInfoData(data);
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
         <div>Location</div> 
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
          {infoData ? <LocationData infoData={infoData} /> : "loading...."}
        </>
      );
    }
export default Location

