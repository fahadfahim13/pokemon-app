import {useEffect, useState} from 'react';
import {PokemonList} from "../Constants/API_ResultInterfaces";
import { getPokemonList } from "../API/PokemonListApi";


export default function usePokemonList(url: string | null) {
    let initialList: PokemonList = {
        count: 0,
        next: null,
        previous: null,
        results: []
    }
    let pokemonlist: PokemonList, setPokemonList: any;
    [pokemonlist, setPokemonList] = useState(initialList);

    useEffect(() => {
        let result = getPokemonList(url)
        result.then((res) => setPokemonList(res))
    }, [setPokemonList, url])

    return pokemonlist
}