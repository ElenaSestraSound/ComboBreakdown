import Link from 'next/link';

export default function HeaderNav () {
  return (
    <nav className="ml-auto">
      <ul>
        <li><Link href="/">Main</Link></li>
        <li><Link href="/compare">Compare</Link></li>
        <li><Link href="/glossary">Glossary</Link></li>
      </ul>
    </nav>
  );
}
