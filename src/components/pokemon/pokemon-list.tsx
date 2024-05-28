import { useEffect, useState } from 'react'
import { getPokemonListWithDetails } from '../../api/get-pokemon-list.tsx'
import { Pokemon } from '../../types/index.ts'
import FetchMorePokemon from './fetch-more-pokemon.tsx'
import PokemonItem from './pokemon-item.tsx'
import Skeleton from '../ui/skeleton.tsx'

const PokemonList = () => {
    const [lists, setLists] = useState<Pokemon[]>([])
    const [offset, setOffset] = useState<number>(0)
    const skeletons = new Array(15).fill(null)

    useEffect(() => {
        const getLists = async () => {
            const list = await getPokemonListWithDetails(10, offset)
            setLists((prev: Pokemon[]) => [...prev, ...list])
        }
        getLists()
    }, [offset])

    return (
        <section className="grid gap-md ">
            <div className="grid gap-md grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
                {lists.length > 0 ? (
                    lists?.map((item: Pokemon) => (
                        <PokemonItem key={item.id} item={item} />
                    ))
                ) : (
                    <div className="h-[90vh] grid gap-md grid-cols-[repeat(auto-fit,minmax(200px,1fr))] overflow-hidden py-sm ">
                        {skeletons.map((s, ind) => {
                            return <Skeleton key={ind} />
                        })}
                    </div>
                )}
            </div>
            {lists.length > 0 && <FetchMorePokemon setOffset={setOffset} />}
        </section>
    )
}

export default PokemonList
