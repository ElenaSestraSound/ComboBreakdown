import { ICharacterList } from '@/utils/types';

export default function CharacterList ({ characters }: ICharacterList) {
  return (<>
    {characters && (
      <ul>
        {characters.map((character) => (
          <li key={character.name}> {character.name}</li>
        ))}
      </ul>
    )}
  </>
  );
}
