import React, { useState, useEffect} from 'react';
 
const Example = () => {
    const [pokemon, setPokemon] = useState([]);


    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(response => response.json())
        
        .then(response => setPokemon(response.results))
        console.log(pokemon)
    }, []);

return (
    <div>
        {
        pokemon ? pokemon.map((item, index) =>{
            return(<div key={index}>{item.name}</div>)
        }):null
        
        }
    </div>
);

}
export default Example
