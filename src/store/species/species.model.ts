interface GETINFOSPECIESPROPS {
    url: string
}

interface SPECIESREDUX extends GETINFOSSPECIESRESULT {
    loading: boolean
}

interface GETINFOSSPECIESRESULT {
    color: DEFAULT_QUERY_RETURN_POKEAPI,
    egg_groups: DEFAULT_QUERY_RETURN_POKEAPI[],
    id: number,
    base_happiness?: number,
    capture_rate?: number,
    evolves_from_species?: any,
    flavor_text_entries?: any,
    form_descriptions?: any
}