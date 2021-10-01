import React from 'react';
import {PokemonResult} from "../../Utils/Constants/API_ResultInterfaces";
import PokemonListItem from "./PokemonListItem";
import {Grid} from "@chakra-ui/react";

function PokemonList(props:{ pokemons: PokemonResult[] }) {
    const { pokemons } = props

    return (
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            {pokemons.map((poke) => <PokemonListItem key={poke.name} {...poke} />)}
        </Grid>
    );
}

export default PokemonList;