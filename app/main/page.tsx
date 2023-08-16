// import { use } from 'react';
// import { getCharacters } from '@/utils/get-characters';
import CharacterList from "./character-list";
import { characters } from './mockCharacters';

export default function Main () {
  // const characters = use(getCharacters()); // Get data from db

  return (
    <>
      <div className="h-full grid grid-rows-[auto_1fr]" >
        <h2 className="flex justify-center text-5xl m-9">Characters</h2>
        <div className="">
          {characters && (
            <CharacterList characters={characters} />
          )}
        </div>
      </div>
    </>
  );
}

