interface POKEDEXREDUX {
    loading: boolean,
    listOfPokemons: LISTPOKES[],
    count: number
    next?: string,
    previous?: string,
}

interface LISTPOKES {
    name: string,
    url: string
}

interface GETLISTOFPOKEMONSPROPS {
    offset: number,
    limit: number,
    next?: string
}

interface GETLISTOFPOKEMONSRESULT {
    results: LISTPOKES[],
    count: number
    next: string,
    previous: string,
}