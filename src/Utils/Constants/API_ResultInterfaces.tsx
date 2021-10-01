export interface PokemonResult {
    name: string;
    url: string;
}

export interface PokemonList {
    count: number | null;
    next: string | null;
    previous: string | null;
    results: PokemonResult[] | []
}