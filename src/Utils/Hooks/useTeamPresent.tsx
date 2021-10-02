import {useAppSelector} from "../../app/hooks";
import {selectTeamElements} from "../../Redux/MyTeam";
import {PokemonResult} from "../Constants/API_ResultInterfaces";

function UseTeamPresent(props: PokemonResult) {
    const teamPokemons = useAppSelector(selectTeamElements)
    let idx = teamPokemons.findIndex((el, id) => (el.name === props.name))
    return idx > -1
}

export default UseTeamPresent;