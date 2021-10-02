import React, {useState} from 'react';
import {
    Box, Button,
    FormControl,
    FormLabel,
    Grid, GridItem,
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
                    <Grid templateColumns="repeat(5, 1fr)">
                        <GridItem colSpan={4}>
                            <Input type="text" placeholder="Search Pokemon"
                                 onChange={(e) => {
                                     setInputValue(e.currentTarget.value)
                                 }} />
                        </GridItem>
                        <GridItem colSpan={1}><Button colorScheme="blue" onClick={() => onSetSearch(inputValue)}>Search</Button></GridItem>
                    </Grid>
                </FormControl>
            </Box>
        </Grid>
    );
}

export default SearchBar;