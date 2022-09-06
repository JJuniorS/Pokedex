import { usePokeApi, usePokeDetailsApi } from "../../hooks/usePokeApi";

type props = {
    url: string;
}

type pokeDetails = {
    name: string;
    id: string;
    sprites: {
        front_default: string;
    }
}

function PokemonList(props: props) {
    const { data: pokeDetails } = usePokeDetailsApi<pokeDetails>(props.url)

    console.log({ pokeDetails })
    return (
        <div className="col-md-2" style={{padding: 10}}>
            <div className="card">
                <h5 className="card-header">{pokeDetails?.id} - {pokeDetails?.name}</h5>
                <div className="card-body">
                    <img src={pokeDetails?.sprites.front_default} />
                </div>
            </div>
        </div>
    )
}

export default PokemonList