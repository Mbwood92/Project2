import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Characters() {
    // make a variable to store our api key
    // get the currency symbol from the url
    // these two lines get the params object from the url (address bar), 
    // and then we save into a variable called symbol for us to use later
    const params = useParams();
    // console.log(params);
    const symbol = params.symbol;
    // use the apiKey and symbol variables to make our url
    const baseUrl = `https://rickandmortyapi.com/api`;

    // state to hold the character data
    const [cartoon, setCartoon] = useState("null");

    // function to fetch character data
    const getCartoon = async () => {
        try {
        
            console.log(baseUrl)
            const response = await fetch(`${baseUrl}/character/`);


            const data = await response.json();
            setCartoon(data);
        } catch (e) {
            console.error(e);
            throw error;
        }
    }

    // useEffect to run getCartoon when component mounts
    useEffect(() => {
        getCartoon();
    }, []);

    // loaded function shows up when the data has been fetched
    const loaded = () => {
        return (
            <div>
                <h1>{cartoon.Characters}</h1>
                <h2>{cartoon.Info}</h2>
                <img src={cartoon.poster} alt={cartoon.title} />
                <h2>{cartoon.Location}</h2>
                <h3>Ratings</h3>
                {cartoon.data && cartoon.data.map (data => {
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
    cartoon && cartoon.data ? loaded() : loading()
  )
}

export default Characters