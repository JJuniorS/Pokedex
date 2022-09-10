import { useEffect, useState } from "react";
import { api } from "../../services/api";
import PokemonCard from '../pokemonCard/PokemonCard'

type Pokemon = {
  name: string;
  url: string;
}


function PokemonList() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  useEffect(() => {
    AtualizarLista('9')
  }, [])

  function AtualizarLista(limit: string) {
    api.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`).then((response) => {
      setPokemons(response.data['results']);
    });
  }

  return (
    <>
      <div className="row">
        <button onClick={() => AtualizarLista("20")}></button>
        {pokemons?.map(poke => {
          return (
            <PokemonCard key={poke.name} url={poke.url} />
          )
        })}
      </div>
    </>
  )
}

export default PokemonList
