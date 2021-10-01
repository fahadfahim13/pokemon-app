import {useAppSelector} from "../../app/hooks";
import {selectTeamElements} from "../../Redux/MyTeam";
import {PokemonResult} from "../Constants/API_ResultInterfaces";

function UseTeamPresent(props: PokemonResult) {
    const teamPokemons = useAppSelector(selectTeamElements)
    const idx = teamPokemons.findIndex((el) => el.name === props.name)
    return idx > -1
}

export default UseTeamPresent;