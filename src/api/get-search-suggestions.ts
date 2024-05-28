import { getPokemonLists } from './get-pokemon-list'

export const getSearchSuggestions = async (text: string, limit: number) => {
    try {
        const data = await getPokemonLists(limit, 0)
        // Filter results based on search text
        const filteredData: [] = data.results.filter(
            (pokemon: { name: string }) =>
                pokemon.name.toLowerCase().includes(text.toLowerCase())
        )

        return filteredData.slice(0, 10)
    } catch (err) {
        console.error(err)
        throw err
    }
}
