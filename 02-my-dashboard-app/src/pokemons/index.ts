/*
   ! Type
   En este caso como las exportaciones obedecen a una interface
   es decir es un tipo "type" lo que estamos exportando mas no
   un objeto y por eso tira error si no especificamos el type
*/

export type { PokemonsResponse } from "./pokemonsResponse";
export type { SimplePokemon } from "./simplePokemon";
