export const BASE_API = "https://pokeapi.co/api/v2/"
export const POKEMON_LIST = BASE_API + "pokemon/"

export const getPokemonListApi = () => {
    return POKEMON_LIST
}

export const getPokemonApi = (arg: number | string) => {
    return (POKEMON_LIST + arg)
}

