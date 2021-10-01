import React from 'react';
import PokemonList from "../PokemonList/PokemonList";
import {useAppSelector} from "../../app/hooks";
import {selectTeamElements} from "../../Redux/MyTeam";

function TeamView() {
    const results = useAppSelector(selectTeamElements)
    return (
        <div>
            <PokemonList pokemons={results} />
        </div>
    );
}

export default TeamView;