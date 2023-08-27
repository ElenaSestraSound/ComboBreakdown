import { use } from 'react';
import { getCharacter } from '@/utils/get-character';
import MoveElem from '@/app/main/Move/move';
import { ICharacterPage } from "@/utils/types";

export default function CharacterPage ({ searchParams }: ICharacterPage) {

  const character = searchParams.charName && use(getCharacter(searchParams.charName));
  const bckURL = `'/characterpage/${searchParams.charName}.png'`;

  return (
    <div className="character-page max-w-4xl mx-auto h-full"
      style={{ backgroundImage: `url(${bckURL})` }}>
      <div className="overlay w-full h-full lg:flex justify-center content-center lg:flex-row lg:justify-around lg:sticky pos-0">
        {character && (<>
          <div id="bio" className="px-10 pt-20 md:px-20 lg:px-0 lg:max-w-xl">
            <h2 className="text-6xl font-bold leading-[2.75rem] mb-9 p-0 uppercase">
              {character['name']}
            </h2>
            <p className="mb-6">{character['bio']}</p>
            <p>Hates: {character['notlike']}</p>
            <p>Likes: {character['like']}</p>
            <p>Height: {character['height']}</p>
            <p>Weight: {character['weight']}</p>
          </div>
          <div id="moves" className="pt-20 px-10 md:px-20 lg:pr-0">
            <MoveElem
              char={character}
            />
          </div>
        </>)}
      </div>
    </div>
  );
}