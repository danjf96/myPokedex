interface POKEDEXREDUX {
    loading: boolean,
    listOfPokemons: LISTPOKES[]
}

interface LISTPOKES {
    name: string,
    url: string
}