import { use } from 'react';
import { getCharacters } from '@/utils/get-characters';
import CharacterList from "./character-list";

export default function Main () {
  const characters = use(getCharacters());
  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex flex-col gap-y-3">
        <h2>Characters</h2>
        {characters && (
          <CharacterList characters={characters} />
        )}
      </div>
    </div>
  );
}
