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

export interface ability {
    ability: PokemonResult;
    is_hidden: boolean;
    slot: number;
}

export interface GameIndices {
    version: PokemonResult;
    game_index: number;
}

export interface HeldItems {
    item: PokemonResult;
    version_details: any[]
}

export interface VersionGroupDetails {
    level_learned_at: number;
    move_learn_method: PokemonResult;
    version_group: PokemonResult;
}

export interface Move {
    move: PokemonResult;
    version_group_details: VersionGroupDetails[];
}

export interface Sprite {
    back_default: string;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | undefined;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: any;
    versions: any;
}

export interface Stat {
    base_stat: number;
    effort: number;
    stat: PokemonResult;
}

export interface Type {
    slot: number;
    type: PokemonResult;
}

export interface Pokemon {
    abilities: ability[];
    base_experience: number;
    forms: PokemonResult[];
    game_indices: GameIndices[];
    height: number;
    held_items: HeldItems[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    past_types: any[];
    species: PokemonResult;
    sprites: Sprite;
    stats: Stat[];
    types: Type[];
    weight: number;
}