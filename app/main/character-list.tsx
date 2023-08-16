import { ICharacterList } from '@/utils/types';
import Image from 'next/image'
import Link from 'next/link'

export default function CharacterList({ characters }: ICharacterList) {
  return (<>
    {characters && (
      <ul className="flex m-auto w-4/5 flex-wrap justify-center">
        {characters.map((character) => (
          <li key={character.name} >
            <Link href={`../character/${character.name}`}>
                  <Image src={`/character/${character.name}.png`}
                    width={144}
                    height={144}
                    alt="Character-Image"
                    className="mb-4 rounded shadow-md"
                  />
               </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}


