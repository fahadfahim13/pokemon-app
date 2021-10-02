import React, {useEffect, useState} from 'react';
import usePokemonList from "../../Utils/Hooks/usePokemonList";
import PokemonList from "../PokemonList/PokemonList";
import PaginationButtons from "./PaginationButtons";
import {useToast} from "@chakra-ui/react";
import {SearchErrorToast} from "../../Utils/Constants/ToastConstants";

function ShowPokemons(props: {showToast: boolean}) {
    const { showToast } = props
    let url: string | null, setUrl: any;
    [url, setUrl] = useState(null)
    const { results, next, previous } = usePokemonList(url)
    const toast = useToast()

    useEffect(() => {
        if(showToast){
            toast(SearchErrorToast)
        }
    }, [toast, showToast])

    return (
        <div>
            <PokemonList pokemons={results} />
            <br />
            <PaginationButtons nextButtonAction={() => setUrl(next)} prevButtonAction={() => setUrl(previous)} />
            <br />
        </div>
    );
}

export default ShowPokemons;