import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function allCharacters() {
    // add state to hold the data of the form
const [formData, setFormData] = useState({
    searchterm: "",
  });
  // state to hold the character data
  const [character, setCharacter] = useState(null);

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


   
    // these two lines get the params object from the url (address bar), 
    // and then we save into a variable called symbol for us to use later
    const params = useParams();
    // console.log(params);
    const symbol = params.symbol;
    // use the apiKey and symbol variables to make our url
    const baseUrl = `https://rickandmortyapi.com/api`;

    
   

    // function to fetch character data
    const getCharacter = async () => {
        try {
        
            //console.log(baseUrl)
            const response = await fetch(`${baseUrl}/character/`);
            const data = await response.json();
            setCharacter(data);
        } catch (e) {
            console.error(e);
            //throw error;
        }
    }

    // useEffect to run getCartoon when component mounts
    useEffect(() => {
        getCharacter();
    }, []);

    // loaded function shows up when the data has been fetched
    const loaded = () => {
        return (
            <div>
                <h1>{character.name}</h1>
                <h2>{character.status}</h2>
                <h2>{character.species}</h2>
                <h2>{character.type}</h2>
                <h2>{character.gender}</h2>
                <h2>{character.origin}</h2>
                <h2>{character.name}</h2>
                <h2>url</h2>
                <h2>{cartoon.Location}</h2>
                <h2>url</h2>
                <h2>{character.image}</h2>
                <h2>{character.episode}</h2>
                <h2>url</h2>
                <h2>{character.created}</h2>
                {cartoon.data && character.data.map (data => {
                    return (<><h4>{data.Source}</h4>
                    <h4>{data.Value}</h4></>)
                })  }
            </div>
        )
    }

    // function for when data doesn't exist yet
    const loading = () => {
        return <h1>Loading...</h1>
    }

    // if cartoon has data - so if cartoon is not null

  return (
    character && character.data ? loaded() : loading()
  )
}

export default allCharacters