function PokeApi(name) {
  
    async function fetchPokemon(name) {
      try {
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await result.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPokemon(name);
}

export default PokeApi;