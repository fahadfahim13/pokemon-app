import axios from 'axios'
import { getPokemonListApi, getPokemonApi } from "../Constants/API_Constants";

export const getPokemonList = async (url: string | null | undefined) => {
    let api_url = url
    if(url === null || url === undefined) {
        api_url = getPokemonListApi()
    } else{
        api_url = url
    }
    let result;
    await axios.get(api_url)
        .then((response) => {
            result = response.data
        })
        .catch((error) => {
            result = error
        })
    return result
}

export const getPokemon = async (arg: number | string) => {
    const url = getPokemonApi(arg)
    let result: any = {}
    await axios.get(url)
        .then((response) => {
            console.log(response.data)
            result = response.data
        })
        .catch((err) => {
            result = "Error"
        })
    return result
}
