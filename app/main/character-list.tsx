import { use } from 'react';
import { getCharacters } from '@/utils/get-characters';

export default function CharacterList () {

  const characters = use(getCharacters());

  return (<>
    {characters && (
      <ul>
        {characters.map((character) => (
          <li key={character.id}> {character.name}</li>
        ))}
      </ul>
    )}
  </>
  );
}
