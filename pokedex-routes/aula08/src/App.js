import { Routes, Route} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Pokemons from './user/Pokemons'
import Pokemon from './user/Pokemon';


function App() {
  return (
    <Routes>
      <Route path='/'>

        <Route index element={<Home/>}/>
        <Route path='about' element={<About />}/>
      
      </Route>
      <Route path='/pokemons'>

        <Route index element={<Pokemons/>}></Route>
        <Route path=':pokemonId' element={<Pokemon/>}/>
      </Route>
    </Routes>
  );
}

export default App;
