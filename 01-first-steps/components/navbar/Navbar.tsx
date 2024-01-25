import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from ".."

/*
   ?Este componente a sido llamado bajo la ruta:
   * app/(public)/layout.tsx

   ?Botones Dinamicos
   creamos botones de manera dinamica al crear un arreglo que 
   contiene los botones que necesitamos en el navbar
*/

const navItems = [
   {
      path: '/about',
      text: 'About'
   },
   {
      path: '/pricing',
      text: 'Pricing'
   },
   {
      path: '/contact',
      text: 'Contact'
   },
]

export const Navbar = () => {

  return (
    <nav className=" flex bg-blue-700 bg-opacity-30 p-2 m-2 rounded">
      
      <Link className="flex items-center " href={"/"}>
         <HomeIcon />
         <span className="ml-1">Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {
         navItems.map(navItem => (
            <ActiveLink key={navItem.path} {...navItem} />
         ))
      }

    </nav>
  )
}
