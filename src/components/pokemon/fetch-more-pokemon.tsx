import { useEffect, useRef } from 'react'
import { useIntersectionObserver } from '../../hooks/use-intersection-observer'

const FetchMorePokemon = ({
    setOffset,
}: {
    setOffset: (update: (prev: number) => number) => void
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const { isInView } = useIntersectionObserver(ref)

    useEffect(() => {
        setOffset((prev: number) => prev + 10)
    }, [isInView])

    return (
        <div ref={ref} className="text-center py-md">
            Loading more...
        </div>
    )
}

export default FetchMorePokemon
