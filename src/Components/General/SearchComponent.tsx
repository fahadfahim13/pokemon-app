import React, {useState} from 'react';
import SearchBar from "./SearchBar";
import usePokemonSearch from "../../Utils/Hooks/usePokemonSearch";
import PokemonListItem from "../PokemonList/PokemonListItem";
import {getPokemonApi} from "../../Utils/Constants/API_Constants";
import ShowPokemons from "./ShowPokemons";

function SearchComponent() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResults, error] = usePokemonSearch(searchValue)

    return (
        <div>
            <SearchBar onSetSearch={(value: string) => setSearchValue(value)} />
            {(searchResults.name && !error)?
                <PokemonListItem name={searchResults.name} url={getPokemonApi(searchValue)} />
                :
                <ShowPokemons showToast={error} />
            }
        </div>
    );
}

export default SearchComponent;