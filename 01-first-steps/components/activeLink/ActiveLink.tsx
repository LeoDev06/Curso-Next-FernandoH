'use client'

import Link from "next/link";
import style from './ActiveLink.module.css';
import { usePathname } from "next/navigation";

/* 
   ! Para aplicar estilos css es necesario nombrar el archivo con .module.css

   !usePathName
   para poder hacer uso del hook de next devemos colocar en el niel superior
   'use client', ya que el usar el hook, deja de ser un componente del lado
   del servidor y pasa a ser del lado del cliente.

*/

interface props {
   path: string;
   text: string;
}

export const ActiveLink = ({path, text}:props) => {

   const pathName = usePathname();

  return (
    <Link className={ ` ${style.link} ${(pathName === path) && style['actve-link']} ` } href={path}>{text}</Link>
  )
}
