import { api } from '../../services/api';
import './PokemonCard.css';
import PokemonTypes from "../pokemonTypes/PokemonTypes";
import { useEffect, useState } from 'react';


type props = {
    url: string;
}

type pokeDetails = {
    name: string;
    id: string;
    types: [{
        type: {
            name: string
        }
    }]
    sprites: {
        front_default: string;
    }

}

function PokemonCard(props: props) {

    const [ pokeDetails, setPokeDetails ] = useState<pokeDetails>()

    useEffect(() => {
        api.get<pokeDetails>(props.url).then(response => {
            setPokeDetails(response.data);
        });
      });

    const types = pokeDetails?.types.map(item => {
        return item.type.name
    })

    let baseType = ''
    types?.map((type, index) => {
        if (index == 0) {
            baseType = type
        }

    })

    return (
        <div className="col-md-2 " style={{ padding: 10 }}>
            <div className={"card " + baseType}>
                <h5 className="card-header pokeName">{pokeDetails?.name.toUpperCase()}</h5>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-5">
                            <p className="pokeIndice">#{pokeDetails?.id} </p>
                        </div>
                        <div className="col-md-7">
                            {types?.map(type => {
                                return (
                                    <PokemonTypes key={type} type={type} />
                                )
                            })}
                        </div>
                    </div>
                    <img src={pokeDetails?.sprites.front_default} />
                </div>
            </div>
        </div >
    )
}

export default PokemonCard