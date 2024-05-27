import { Pokemon } from "../../types";

export const PokemonItem = ({ item }: { item: Pokemon }) => {
  return (
    <div className="grid gap-2">
      <img src={item.imageUrl} width="400" height="400" alt="" />
      <p className="font-bold capitalize"> {item.name}</p>
      <div className="flex gap-2">
        {item?.types.map((type) => {
          return (
            <span className="font-semibold bg-gray-300 p-2 rounded-sm">
              {type}
            </span>
          );
        })}
      </div>
    </div>
  );
};
