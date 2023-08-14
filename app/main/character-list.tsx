import { prisma } from '@/lib/prisma';

export default async function CharacterList () {

  let characters = await prisma.character.findMany();

  return (<>
    {characters && (<ul>
      {characters.map((character) => (
        <li key={character.id}> {character.name}</li>
      ))}
    </ul>
    )}
  </>
  );
}
