import { useParams } from "react-router-dom"
import PokemonData from "../components/pokemonData";
import React from "react";

export default function Pokemon (){

    const { pokemonId } = useParams();
    
    const [pokemon, setPokemon] = React.useState({});

  function Proximo() {
    pokemonId = pokemonId + 1;
    Carregar()
  }

  function Voltar() {
    if (pokemonId != 1)
      pokemonId = pokemonId - 1;
    Carregar()
  }

  function Carregar() {
    fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonId)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemon(data);
      });
  }

  return (
    PokemonData.sprites ?
      
      <div class=" col-md-12 text-center d-flex align-items-center justify-content-center">
      
        <div class="border-white border border-4 w-75 p-3 bg-dark">
      
          <div class="row justify-content-around">
      
            <div class=" d-flex justify-content-center">
      
              <button class="btn btn-secondary btn-lg col-2" onClick={Voltar}>Voltar</button>
      
              <h1 class="col-8">Nº {pokemonId}</h1>
      
              <button class="btn btn-secondary btn-lg col-2" onClick={Proximo}>Proximo</button>
      
            </div>
      
            <PokemonData imagem={pokemon.sprites.front_default} nome={pokemon.name} tipo={pokemon.types.map(type => type.type.name).join(",")} habilidades={pokemon.abilities.map(ability => ability.ability.name).join(",")} ataques={pokemon.moves.slice(0, 3).map(move => move.move.name).join(" / ")}/>
      
          </div>
      
        </div>
      </div>
      
      :
      
      <div class=" align-items-center justify-content-center text-white bg-dark col-md-12 text-center d-flex">
      
        <div class="w-75 p-3">

          <button class="btn" onClick={Carregar}>
            <img class="img-fluid w-75" src="pokebola.png"></img>
          </button>
      
        </div>
      
      </div>
  );
}
    //return <h1>Pokemon {pokemonId}</h1>