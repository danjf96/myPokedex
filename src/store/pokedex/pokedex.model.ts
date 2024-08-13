interface POKEDEXREDUX {
    loading: boolean,
    listOfPokemons: LISTPOKES[],
    count: number
    next?: string,
    previous?: string,
    search?: string,
    myList: LISTPOKES[]
}

interface LISTPOKES {
    name: string,
    url: string,
    img?: string,
    number?: number ,
}

interface GETLISTOFPOKEMONSPROPS {
    offset: number,
    limit: number,
    next?: string,
    search?: string
}

interface GETLISTOFPOKEMONSRESULT {
    results: LISTPOKES[],
    count: number
    next: string,
    previous: string,
}