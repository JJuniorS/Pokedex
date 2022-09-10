import firstGen from '../../assets/generations/first_gen.svg'
import secondGen from '../../assets/generations/second_gen.png'
import thirdGen from '../../assets/generations/third_gen.png'
import fourthGen from '../../assets/generations/fourth_gen.png'
import fifthGen from '../../assets/generations/fifth_gen.png'
import sixthGen from '../../assets/generations/sixth_gen.png'
import seventhGen from '../../assets/generations/seventh_gen.png'


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

  return (
    <>
      <div className='row'>
        <div className='col-md-12 divBtns'>
          <button className='btnImg'><img className='imageBtn' src={firstGen} title="1º Geração" onClick={() => AtualizarLista(151, 0)} /></button>
          <button className='btnImg'><img className='imageBtn' src={secondGen} title="2º Geração" onClick={() => AtualizarLista(251, 151)} /></button>
          <button className='btnImg'><img className='imageBtn' src={thirdGen} title="3º Geração" onClick={() => AtualizarLista(386, 251)} /></button>
          <button className='btnImg'><img className='imageBtn' src={fourthGen} title="4º Geração" onClick={() => AtualizarLista(493, 386)} /></button>
          <button className='btnImg'><img className='imageBtn' src={fifthGen} title="5º Geração" onClick={() => AtualizarLista(649, 493)} /></button>
          <button className='btnImg'><img className='imageBtn' src={sixthGen} title="6º Geração" onClick={() => AtualizarLista(721, 649)} /></button>
          <button className='btnImg'><img className='imageBtn' src={seventhGen} title="7º Geração" onClick={() => AtualizarLista(807, 721)} /></button>
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
