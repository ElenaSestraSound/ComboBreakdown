import { getCharacters } from '@/utils/get-characters';

export default async function CharacterList () {

  let characters = await getCharacters();

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
