import { SimplePokemon } from "../simplePokemon";
import { PokemonsCard } from "./PokemonsCard";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonsGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((poke) => (
        <PokemonsCard key={poke.id} pokemons={poke} />
      ))}
    </div>
  );
};
