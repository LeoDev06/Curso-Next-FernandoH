/*
   ? CREAR UNA INTERFACE SEGUN LA DATA DELL API
   lo que se hace es hacer una consulta en postman
   se copia el resultado de la peticion, luego mediante la 
   paleta de comandos ctrl+shift+p buscamos "paste json as code"
   nos abrira una tabla con opciones entre las cuales esta typescript
   seleccionamos, damos el nombre de la interfas y damos enter, mediante 
   quicktype automanticamente nos genera las interfaces necesarias que maneja
   la data del api en este caso la data que nos devuelve el api de pokeapi.
*/

// Generated by https://quicktype.io

export interface PokemonsResponse {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}
