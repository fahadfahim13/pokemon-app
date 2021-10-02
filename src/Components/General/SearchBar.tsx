import React, {useState} from 'react';
import {
    Box, Button,
    FormControl,
    FormLabel,
    Grid,
    Input,
} from "@chakra-ui/react";

function SearchBar(props: { onSetSearch: (value: string) => void }) {
    const [inputValue, setInputValue] = useState('')
    const { onSetSearch } = props

    return (
        <Grid>
            <Box>
                <FormControl id="pokemonSearch">
                    <FormLabel>Search Pokemons</FormLabel>
                    <Input type="text" placeholder="Search Pokemon"
                           onChange={(e) => {
                               setInputValue(e.currentTarget.value)
                           }} />
                    <Button onClick={() => onSetSearch(inputValue)}>Search</Button>
                </FormControl>
            </Box>
        </Grid>
    );
}

export default SearchBar;