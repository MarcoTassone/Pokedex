import Pokedex from "./components/Pokedex"
import "./Style/Pokedex.css"
import FetchPokeApi from "./components/FetchPokeApi"
function App() {

  return (
    <>
     <Pokedex/>
     <div className="App">
      <FetchPokeApi/>
     </div>
    </>
  )
}

export default App
