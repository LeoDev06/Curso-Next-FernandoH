/* 
  TODO: hide Order Component 
  Su nombre se debe porque resiven un children como parametro de la funcion

  TODO: Layout y layout anidados
  para que el layout aparezca en todas las pages, es necesario agrupar las 
  paginas en una carpeta en general y definir nuestro archivo layout a mismo
  nivel de las pages, asi no tendremos que repetir el layaut para cada page
  si es que va a tener la misma funcionalidad.
*/

import { Navbar } from "@/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <h1>Hola mundo</h1>
        {children}
      </main>
    </>
  );
}