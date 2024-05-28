import { useRef } from 'react'
import { useIntersectionObserver } from '../../hooks/use-intersection-observer'
import { Pokemon } from '../../types'

const PokemonItem = ({ item }: { item: Pokemon }) => {
    const ref = useRef<HTMLDivElement>(null)
    const { isInView } = useIntersectionObserver(ref)

    return (
        <section ref={ref} className="shadow-md p-sm grid gap-sm">
            {isInView && <img src={item.imageUrl} alt="" />}
            <p className="font-bold">{item.name}</p>
            <div className="flex gap-sm">
                {item?.types?.map((type) => {
                    return (
                        <span
                            key={type}
                            className="bg-gray-200 p-xs rounded-sm"
                        >
                            {type}
                        </span>
                    )
                })}
            </div>
        </section>
    )
}

export default PokemonItem
