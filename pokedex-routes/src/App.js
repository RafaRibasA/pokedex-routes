import { Routes, Route} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Pokemons from './user/Pokemons'
import Pokemon from './user/Pokemon';


function App() {
  return (
    <Routes>
      <Route path='/pokemons'>
        <Route path=':pokemonId' element={<Pokemon/>}/>
      </Route>
    </Routes>
  );
}

export default App;
