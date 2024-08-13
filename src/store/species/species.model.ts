interface GETINFOSPECIESPROPS {
    url: string
}

interface SPECIESREDUX {
    loading: boolean
}

interface GETINFOSSPECIESRESULT {
    base_happiness: number,
    capture_rate: number,
    color: DEFAULT_QUERY_RETURN_POKEAPI,
    egg_groups: DEFAULT_QUERY_RETURN_POKEAPI[],
    evolves_from_species: any,
    flavor_text_entries: any,
    form_descriptions: any,
    id: number
}