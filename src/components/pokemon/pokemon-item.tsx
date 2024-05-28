import { Pokemon } from '../../types'

const PokemonItem = ({ item }: { item: Pokemon }) => {
    return (
        <section className={` shadow-md  grid gap-sm p-sm `}>
            <img src={item.imageUrl} alt="" className="min-w-20 min-h-24" />

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
        </section>
    )
}

export default PokemonItem
