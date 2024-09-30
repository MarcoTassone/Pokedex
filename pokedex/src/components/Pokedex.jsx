import { useEffect, useState } from 'react';

function Pokedex(){

  const [searchTerm, setSearchTerm] = useState('');
  const [searchedPokemon, setSearchedPokemon] = useState('');
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPokemon(data.results); // Store only the results array
        setLoading(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  const searchPokemon = async () => {
    if (!searchTerm) {
      setSearchedPokemon(null);
      return;
    }
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
      if (!response.ok) {
        throw new Error('Pokémon not found');
      }
      const data = await response.json();
      setSearchedPokemon(data);
    } catch (error) {
      setError(error.message);
      setSearchedPokemon(null);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="container">

        <div className="left-side">
          <div className="top-layer-border">
            <div className="top-layer-red">
              <div className="border-blue-led">
                <div className="big-blue-led"></div>
              </div> 
              <div className="stoplight">
                <div className="circles"></div>
                <div className="circles"></div>
                <div className="circles"></div>  
              </div> 
            </div>
            </div>
          <div className="inside-left-border">
            <div className="inside-inside-left-background">
              <div className="top-circles">
                <div className="red-circle"></div>
                <div className="red-circle"></div>
              </div>
              <div className="container-red-button">
                <div className="red-button"></div>
              </div>
              <div className="container-speaker">
                <div className="speaker">
                  <div className="speaker-lines"></div>
                  <div className="speaker-lines"></div>
                  <div className="speaker-lines"></div>
                  <div className="speaker-lines"></div>
                </div>
              </div>
              <div className="border-display">
                {searchedPokemon && (
                  <div className="display">
                  <img src={searchedPokemon.sprites.front_default} alt={searchedPokemon.name} />
                </div>
                )}
              </div>
              
              <div className="container-black-button">
                <div className="black-button"></div>
              </div>

              <div className="container-lines">
                <div className="red-line"></div>
                <div className="blue-line"></div>
              </div>

              <div className="container-pad">
                <div className="pad">
                  <div className="center-circle"></div>
                </div>
              </div>

              <div className="container-green-screen">
                <div className="green-screen"></div>
              </div>
            </div>
          </div>

          
        </div>

        <div className="right-side">
          <div className="inside-right-border">
            <div className="inside-inside-right-background">
              <div className="search-bar">
                <input type="text"
                  placeholder="Search Pokémon"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} 
                  onSubmit={searchPokemon}/>
              </div>
              <div className="button-grid">
                <div className="button"></div>
                <div className="button"></div>
                <div className="button"></div>
                <div className="button"></div>
                <div className="button"></div>
                <div className="button"></div>
                <div className="button"></div>
                <div className="button"></div>
                <div className="button"></div>
                <div className="button"></div>
              </div>
              <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <div className="button-grid-white">
                <div className="white-button"></div>
                <div className="white-button"></div>
              </div>

              <div className="container-yellow-circle">
                <div className="yellow-circle"></div>
              </div>
              
              <div className="container-rectangles">
                <div className="rectangle-left"></div>
                <div className="rectangle-right"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pokedex;