import { useRef } from 'react'
import { useIntersectionObserver } from '../../hooks/use-intersection-observer'
import { Pokemon } from '../../types'

const PokemonItem = ({ item }: { item: Pokemon }) => {
    const ref = useRef<HTMLDivElement>(null)
    const { isInView } = useIntersectionObserver(ref)

    return (
        <section
            ref={ref}
            className={`${item.id % 2 === 0 ? 'bg-green-50' : 'bg-white'} shadow-md   p-sm grid gap-sm`}
        >
            {isInView && (
                <div>
                    <img
                        src={item.imageUrl}
                        alt=""
                        className="min-w-20 min-h-24"
                    />

                    <p className="font-bold capitalize text-xl">{item.name}</p>
                    <div className="flex gap-sm">
                        {item?.types?.map((type) => {
                            return (
                                <span
                                    key={type}
                                    className="bg-green-100 capitalize  px-xs p-1 rounded-sm"
                                >
                                    {type}
                                </span>
                            )
                        })}
                    </div>
                </div>
            )}
        </section>
    )
}

export default PokemonItem
