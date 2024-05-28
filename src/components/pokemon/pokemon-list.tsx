import { useEffect, useState } from 'react'

import { getPokemonListWithDetails } from '../../api/get-pokemon-list.tsx'
import { Pokemon } from '../../types/index.ts'
import FetchMorePokemon from './fetch-more-pokemon.tsx'
import PokemonItem from './pokemon-item.tsx'

const PokemonList = () => {
    const [lists, setLists] = useState<Pokemon[]>([])
    const [offset, setOffset] = useState<number>(0)

    useEffect(() => {
        const getLists = async () => {
            const list = await getPokemonListWithDetails(10, offset)
            setLists((prev: Pokemon[]) => [...prev, ...list])
        }
        getLists()
    }, [offset])

    return (
        <section className="grid gap-md">
            <div className="grid gap-md grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
                {lists?.map((item: Pokemon) => (
                    <PokemonItem key={item.id} item={item} />
                ))}
            </div>
            {lists.length > 0 && <FetchMorePokemon setOffset={setOffset} />}
        </section>
    )
}

export default PokemonList
