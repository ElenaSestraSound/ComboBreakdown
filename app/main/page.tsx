import { use, createContext, useState } from 'react';
import { getCharacters } from '@/utils/get-characters';
import Image from 'next/image'
import Link from 'next/link'

export default function Main () {
  const characters = use(getCharacters());
  return (
    <>
      <div className="h-full grid my-16 grid-rows-[auto_1fr]" >
          {characters && (
            <ul className="flex m-auto w-4/5 flex-wrap justify-center">
              {characters.map((character) => (
                <li key={character.name} >
                  <Link href={{ pathname: `/[${character.name}].tsx`, query: { charName: character.name }}}>
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
      </>
    );
  }
