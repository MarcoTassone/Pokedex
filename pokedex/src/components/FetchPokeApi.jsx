import { useEffect, useState } from 'react';

function FetchPokeApi(name) {
  
    // async function fetchPokemon(name) {
    //   try {
    //     const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    //     const data = await result.json();
    //     console.log(data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }

    // fetchPokemon(name);

  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const pokemonData = [];
        for (const poke of data.results) {
          const pokeResponse = await fetch(poke.url);
          const pokeData = await pokeResponse.json();
          pokemonData.push(pokeData);
        }
        setPokemon(pokemonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
}

export default FetchPokeApi;