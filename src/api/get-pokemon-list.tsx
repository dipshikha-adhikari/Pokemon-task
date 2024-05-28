import { api } from '../lib/api-client'
import { getCache, setCache } from '../utils/cache'

const CACHE_PREFIX = 'pokemon_cache'

export async function getPokemonLists(limit: number, offset: number) {
    const cacheKey = `${CACHE_PREFIX}_lists_${limit}_${offset}`
    const cachedData = getCache(cacheKey)
    if (cachedData) {
        return cachedData
    }
    const data = (await api.get(`pokemon?limit=${limit}&offset=${offset}`)).data
    setCache(cacheKey, data)
    return data
}

export async function getPokemonDetails(url: string) {
    const cacheKey = `${CACHE_PREFIX}_details_${url}`
    const cachedData = getCache(cacheKey)
    if (cachedData) {
        return cachedData
    }

    const response = await api.get(url)
    const types = response.data.types.map(
        (type: { type: { name: string } }) => type.type.name
    )
    const imageUrl = response.data.sprites.front_default
    const data = {
        id: response.data.id,
        name: response.data.name,
        imageUrl,
        types,
    }
    setCache(cacheKey, data)
    return data
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
