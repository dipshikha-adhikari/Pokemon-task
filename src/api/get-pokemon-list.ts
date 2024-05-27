import { api } from "../lib/api-client";

async function getPokemonLists() {
    try {
        return (await api.get('/pokemon?limit=2')).data;
    } catch (err) {
        throw err;
    }
}

async function getPokemonDetails(url: string) {
    try {
        const response = await api.get(url);
        const types = response.data.types.map((type: any) => type.type.name);
        const imageUrl = response.data.sprites.front_default;
        return {
            name: response.data.name,
            imageUrl: imageUrl,
            types: types
        };
    } catch (err) {
        throw err;
    }
}

export async function getPokemonListWithDetails() {
    try {
        const list = await getPokemonLists();
        const pokemonDetailsPromises = list.results?.map(async (pokemon: any) => {
            return await getPokemonDetails(pokemon.url);
        });
        const pokemonDetails = await Promise.all(pokemonDetailsPromises || []);
        return pokemonDetails;
    } catch (err) {
        throw err;
    }
}
