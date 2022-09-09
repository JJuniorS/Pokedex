import bugIcon from '../../assets/icons/bug.svg'
import darkIcon from '../../assets/icons/dark.svg'
import dragonIcon from '../../assets/icons/dragon.svg'
import electricIcon from '../../assets/icons/electric.svg'
import fairyIcon from '../../assets/icons/fairy.svg'
import fightingIcon from '../../assets/icons/fighting.svg'
import fireIcon from '../../assets/icons/fire.svg'
import flyingIcon from '../../assets/icons/flying.svg'
import ghostIcon from '../../assets/icons/ghost.svg'
import grassIcon from '../../assets/icons/grass.svg'
import groundIcon from '../../assets/icons/ground.svg'
import iceIcon from '../../assets/icons/ice.svg'
import normalIcon from '../../assets/icons/normal.svg'
import poisonIcon from '../../assets/icons/poison.svg'
import psychicIcon from '../../assets/icons/psychic.svg'
import rockIcon from '../../assets/icons/rock.svg'
import steelIcon from '../../assets/icons/steel.svg'
import waterIcon from '../../assets/icons/water.svg'

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