import React, {useState} from 'react';
import usePokemonList from "../../Utils/Hooks/usePokemonList";
import PokemonList from "../PokemonList/PokemonList";
import PaginationButtons from "./PaginationButtons";

function ShowPokemons() {
    let url: string | null, setUrl: any;
    [url, setUrl] = useState(null)
    const { results, next, previous } = usePokemonList(url)
    return (
        <div>
            <PokemonList pokemons={results} />
            <PaginationButtons nextButtonAction={() => setUrl(next)} prevButtonAction={() => setUrl(previous)} />
        </div>
    );
}

export default ShowPokemons;