interface GETINFOSPOKEMONPROPS {
    url: string
}

interface POKEMONREDUX extends GETINFOSPOKEMONSRESULT {
    loading: boolean,
    url?: string
}

interface GETINFOSPOKEMONSRESULT {
    abilities: ABILITIESPOKEMON[],
    base_experience: number,
    height: number,
    moves: MOVES[],
    name: string,
    stats: STATS[],
    weight: number,
    types: TYPES_POKEMONS[],
    species: DEFAULT_QUERY_RETURN_POKEAPI,
    cries?: CRIES,
    game_indices?: GAME_INDICE[],
    held_items?: any,
    id: number,
    is_default?: boolean,
    location_area_encounters?: string,
    order?: number,
    past_abilities?: any,
    past_types?: any,
    sprites?: any
}

interface TYPES_POKEMONS {
    slot: number,
    type: DEFAULT_QUERY_RETURN_POKEAPI
}

interface STATS {
    base_stat: number,
    effort: number,
    stat: DEFAULT_QUERY_RETURN_POKEAPI
}

interface ABILITIESPOKEMON {
    ability: ABILITY,
    is_hidden: boolean,
    slot: number
}
interface ABILITY {
    name: string,
    url: string
}
interface CRIES {
    latest: string,
    legacy: string
}

interface GAME_INDICE {
    game_index: number,
    version: DEFAULT_QUERY_RETURN_POKEAPI
}

interface MOVES {
    move: DEFAULT_QUERY_RETURN_POKEAPI,
    version_group_details: VERSION_GROUP_DETAILS[]
}

interface VERSION_GROUP_DETAILS  {
    level_learned_at: number,
    move_learn_method: DEFAULT_QUERY_RETURN_POKEAPI,
    version_group: DEFAULT_QUERY_RETURN_POKEAPI
}

interface DEFAULT_QUERY_RETURN_POKEAPI {
    name: string,
    url: string
}