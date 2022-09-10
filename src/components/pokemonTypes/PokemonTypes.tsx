import {bugIcon, darkIcon, dragonIcon, electricIcon, fairyIcon, fightingIcon, fireIcon, flyingIcon, ghostIcon, grassIcon, groundIcon,
    iceIcon, normalIcon, poisonIcon, psychicIcon, rockIcon, steelIcon, waterIcon} from '../../constants/imgGlobal'

import './PokemonTypes.css'

type props = {
    type: string;
}

function PokemonTypes(props: props) {
    const pokemonTypeIcons = [
        { type: "bug", url: bugIcon },
        { type: "dark", url: darkIcon },
        { type: "dragon", url: dragonIcon },
        { type: "electric", url: electricIcon },
        { type: "fairy", url: fairyIcon },
        { type: "fighting", url: fightingIcon },
        { type: "fire", url: fireIcon },
        { type: "flying", url: flyingIcon },
        { type: "ghost", url: ghostIcon },
        { type: "grass", url: grassIcon },
        { type: "ground", url: groundIcon },
        { type: "ice", url: iceIcon },
        { type: "normal", url: normalIcon },
        { type: "poison", url: poisonIcon },
        { type: "psychic", url: psychicIcon },
        { type: "rock", url: rockIcon },
        { type: "steel", url: steelIcon },
        { type: "water", url: waterIcon },
    ]

    const typeToShow = pokemonTypeIcons.find((element) => {
        return element.type === props.type;
    })

    return (
        <>
            <img className='typeIcon' src={typeToShow?.url} alt="" />
        </>
    )
}

export default PokemonTypes