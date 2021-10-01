import React, {useState} from 'react';
import {
    Box, Button,
    FormControl,
    FormLabel,
    Grid,
    Input,
} from "@chakra-ui/react";
import usePokemonSearch from "../../Utils/Hooks/usePokemonSearch";

function SearchBar() {
    const [inputValue, setInputValue] = useState('')
    const [searchValue, setSearchValue] = useState(inputValue)
    const [searchResults, error] = usePokemonSearch(searchValue)
    console.log(searchResults, error)

    return (
        <Grid>
            <Box>
                <FormControl id="pokemonSearch">
                    <FormLabel>Search Pokemons</FormLabel>
                    <Input type="text" placeholder="Search Pokemon"
                           onChange={(e) => {
                               setInputValue(e.currentTarget.value)
                           }} />
                    <Button onClick={() => setSearchValue(inputValue)}>Search</Button>
                </FormControl>
            </Box>
        </Grid>
    );
}

export default SearchBar;