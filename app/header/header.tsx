import Link from 'next/link';
import NavBar from "./header-nav";

export default function Header () {
  return (
    <header className="grid grid-cols-2 p-4">
      <Link href="/"><h1 className="text-xl uppercase leading-4">Combo <span className="block tracking-tighter leading-5 italic text-lg mx-2">Breakdown</span></h1></Link>
      <NavBar></NavBar>
    </header>
  );
}
