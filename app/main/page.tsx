import { use } from 'react';
import { getCharacters } from '@/utils/get-characters';
import Link from 'next/link';
import Image from 'next/image';

export default function Main () {
  const characters = use(getCharacters());
  return (
    <div className='max-w-4xl mx-auto pl-10 pr-40 py-20 md:pr-20 md:pl-0 main-page'>
      <div className='h-full grid mb-8 md:flex'>
        {characters && (
          <ul className="flex flex-wrap justify-center self-start">
            {characters.map((character) => (
              <li key={character.name} >
                <Link href={{ pathname: `/[${character.name}].tsx`, query: { charName: character.name } }}>
                  <Image src={`/character/${character.name}.png`}
                    height={144}
                    width={144}
                    alt="Character-Image"
                    className="w-auto mb-4 rounded shadow-md"
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}