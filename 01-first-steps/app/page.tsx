import Link from "next/link";
import style from '../components/activeLink/ActiveLink.module.css';

export default function HomePage() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <span>Hola mundo </span>
        <span className="text-6xl">Home Page </span>
        <Link className={`${style.link} mt-9`} href={'/about'}>About Page</Link>
      </div>
    </main>
  )

}
