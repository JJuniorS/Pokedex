import { usePokeDetailsApi } from "../../hooks/usePokeApi";
import './PokemonCard.css';
import PokemonTypes from "../pokemonTypes/PokemonTypes";


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

function PokemonList(props: props) {

    const { data: pokeDetails } = usePokeDetailsApi<pokeDetails>(props.url)

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

export default PokemonList