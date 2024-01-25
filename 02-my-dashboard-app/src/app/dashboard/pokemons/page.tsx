import { PokemonsResponse, SimplePokemon } from "@/pokemons";
import { PokemonsGrid } from "@/pokemons/components/PokemonsGrid";

/*
  ? IMPLEMENTACION DE LAS INTERFACES: PokemonsResponse, SimplePokemon --------------
  Lo que se esta haciendo aqui, es obtener la data tal cual como viene pero
  referenciarla con nuestra interfase PokemonsResponse, ya que contiene todos
  los tipos de datos que contempla la data que nos devuelve el fetching de datos,
  esto con el fin de colar la data para que la funcion getPokemons nos entregue solo
  los datos necesarios que obvedecen con la interfas simplePokemon, de esta manera en
  un array se obtendran todos los pokemons con los datos requeridos.
*/

/*
  ! IMPORTANTE: TENER EN CUENTA ----------------------------------------------------
  se corta el url por cada '/' que encuentre con la funcion split, luego
  con at(-2) tomamos el antepenultimo valor que es donde se encuentra nuestro id
  dentro de la cadena del url 'https://pokeapi.co/api/v2/ability/7/', al final de la
  linea se queja next porque el valor del id puede ser undefine | string por tanto se
  hace uso del nullable '!' para asegurarle a Next que nunca sera undefine, de esta forma
  se logra que los datos cumplan con lo estipulado en la interfaz simplePokemon
*/

export const metadata = {
  title: "Pokemons",
  description: "Pokemons Page",
};

const getPokemons = async (
  limit = 20,
  offset = 0,
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  ).then((response) => response.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(40);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokemons <small>Estático</small>
      </span>

      <PokemonsGrid pokemons={pokemons} />
    </div>
  );
}
