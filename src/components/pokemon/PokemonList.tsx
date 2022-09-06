import { usePokeApi } from "../../hooks/usePokeApi"
import PokemonCard from './PokemonCard'

type Pokemon = {
  name: string;
  url: string;
}

function PokemonList() {
  const { data: pokemons } = usePokeApi<Pokemon[]>('https://pokeapi.co/api/v2/pokemon/?limit=100')

  return (
    <div className="row">
        {pokemons?.map(poke => {
          return (
            <PokemonCard key={poke.name} url={poke.url} />
          )
        })}
    </div>
  )
}

export default PokemonList
