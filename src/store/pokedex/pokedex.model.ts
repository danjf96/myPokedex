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
    limit: number
}

interface GETLISTOFPOKEMONSRESULT {
    results: LISTPOKES[],
    count: number
    next: string,
    previous: string,
}