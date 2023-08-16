'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function HeaderNav () {
  const pathname = usePathname();
  return (
    <nav className="flex ml-auto place-self-end">
      <ul className="flex flex-row uppercase text-base">
        <li><Link href="/" className={pathname === "/" ? 'active' : ''}>Main</Link></li> <span>·</span>
        <li><Link href="/compare" className={pathname === "/compare" ? 'active' : ''}>Compare</Link></li> <span>·</span>
        <li><Link href="/glossary" className={pathname === "/glossary" ? 'active' : ''}>Glossary</Link></li>
      </ul>
    </nav>
  );
}

