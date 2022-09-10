import { firstGenImg, secondGenImg, thirdGenImg, fourthGenImg, fifthGenImg, sixthGenImg, seventhGenImg } from '../../constants/imgGlobal'


import './PokemonList.css';
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import PokemonCard from '../pokemonCard/PokemonCard'

type Pokemon = {
  name: string;
  url: string;
}



function PokemonList() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    AtualizarLista(9, 0)
  }, [])

  function AtualizarLista(limit: number, startIndex: number) {
    api.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`).then((response) => {
      let data: Pokemon[] = response.data['results'];
      data = data.slice(startIndex, limit)

      setPokemons(data);
    });
  }

  function BuscarPokemon(nome: string) {
    api.get(`https://pokeapi.co/api/v2/pokemon/${nome}`).then((response) => {
      if(response.status == 200){
        let data: Pokemon[] = [{
          name: response.data['name'],
          url: `https://pokeapi.co/api/v2/pokemon/${nome}`
        }]
        setPokemons(data);
      }
      else throw new Error('HTTP response status not code 200 as expected.');

      
      
    });
  }

  return (
    <>
      <div className='row'>
        <div className='col-md-8 divBtns'>
          <button className='btnImg'><img className='imageBtn' src={firstGenImg} title="1º Geração" onClick={() => AtualizarLista(151, 0)} /></button>
          <button className='btnImg'><img className='imageBtn' src={secondGenImg} title="2º Geração" onClick={() => AtualizarLista(251, 151)} /></button>
          <button className='btnImg'><img className='imageBtn' src={thirdGenImg} title="3º Geração" onClick={() => AtualizarLista(386, 251)} /></button>
          <button className='btnImg'><img className='imageBtn' src={fourthGenImg} title="4º Geração" onClick={() => AtualizarLista(493, 386)} /></button>
          <button className='btnImg'><img className='imageBtn' src={fifthGenImg} title="5º Geração" onClick={() => AtualizarLista(649, 493)} /></button>
          <button className='btnImg'><img className='imageBtn' src={sixthGenImg} title="6º Geração" onClick={() => AtualizarLista(721, 649)} /></button>
          <button className='btnImg'><img className='imageBtn' src={seventhGenImg} title="7º Geração" onClick={() => AtualizarLista(807, 721)} /></button>
        </div>
        <div className='col-md-4 divSearch'>
          <input className='inputSearch' placeholder='Nome do pokemon' value={search} onChange={(e) => setSearch(e.target.value)} />
          <button className='btnSearch'role="button" onClick={() => BuscarPokemon(search.toLowerCase())}>Buscar</button>
        </div>
      </div>

      <div className="row">
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
