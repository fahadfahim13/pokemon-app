import React, {useState} from 'react';
import SearchBar from "./SearchBar";
import usePokemonSearch from "../../Utils/Hooks/usePokemonSearch";
import PokemonListItem from "../PokemonList/PokemonListItem";
import {getPokemonApi} from "../../Utils/Constants/API_Constants";
import ShowPokemons from "./ShowPokemons";
import {Box} from "@chakra-ui/react";

function SearchComponent() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResults, error] = usePokemonSearch(searchValue)

    return (
        <Box>
            <SearchBar onSetSearch={(value: string) => setSearchValue(value)} />
            <br />
            {(searchResults.name && !error)?
                <PokemonListItem name={searchResults.name} url={getPokemonApi(searchValue)} />
                :
                <ShowPokemons showToast={error} />
            }
        </Box>
    );
}

export default SearchComponent;