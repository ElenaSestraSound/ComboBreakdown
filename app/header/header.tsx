import Link from 'next/link';
import NavBar from "./header-nav";

export default function Header () {
  return (
    <header className="grid grid-cols-2 p-2">
      <Link href="/"><h1>Combo Breakdown</h1></Link>
      <NavBar></NavBar>
    </header>
  );
}
