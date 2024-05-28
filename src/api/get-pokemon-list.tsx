import { api } from '../lib/api-client'

export async function getPokemonLists(limit: number, offset: number) {
    return (await api.get(`pokemon?limit=${limit}&offset=${offset}`)).data
}

export async function getPokemonDetails(url: string) {
    const response = await api.get(url)
    const types = response.data.types.map(
        (type: { type: { name: string } }) => type.type.name
    )
    const imageUrl = response.data.sprites.front_default
    return {
        id: response.data.id,
        name: response.data.name,
        imageUrl: imageUrl,
        types: types,
    }
}

export async function getPokemonListWithDetails(limit: number, offset: number) {
    const data: { results: { url: string }[] } = await getPokemonLists(
        limit,
        offset
    )
    const pokemonDetailsPromises = data?.results?.map(
        async (pokemon: { url: string }) => {
            return getPokemonDetails(pokemon.url)
        }
    )
    const pokemonDetails = await Promise.all(pokemonDetailsPromises || [])
    return pokemonDetails
}
