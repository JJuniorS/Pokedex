import { usePokeDetailsApi } from "../../hooks/usePokeApi";
import './PokemonCard.css';


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

    let typeCss = ''
    types?.map((type, index) => {
        if(index == 0){
            typeCss = type
        }
        
    })
    
    return (
        <div className="col-md-2 " style={{padding: 10}}>
            <div className={"card " + typeCss}>
                <h5 className="card-header pokeName">{pokeDetails?.name.toUpperCase()}</h5>
                <div className="card-body">
                    <p className="pokeIndice">#{pokeDetails?.id}
                    
                    </p>
                    <img src={pokeDetails?.sprites.front_default} />
                </div>
            </div>
        </div>
    )
}

export default PokemonList