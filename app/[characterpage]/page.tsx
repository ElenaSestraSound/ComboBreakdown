import { use } from 'react';
import { getCharacters } from '@/utils/get-characters';
import MoveElem from '@/app/main/Move/move';
import { ICharacterPage } from "@/utils/types";

export default function CharacterPage({ searchParams }: ICharacterPage) {

  const charObj = use(getCharacters()); // Get data from app service
  const charDisp = charObj?.filter(x => x.name === searchParams.charName);
  const bckURL = `'/characterpage/${searchParams.charName}.png'`;

  return (
    <div className="character-page max-w-4xl mx-auto h-full" 
    style={{ backgroundImage: `url(${bckURL})` }}>
      <div className="overlay w-full h-full lg:flex justify-center content-center lg:flex-row lg:justify-around lg:sticky pos-0">
        <div id="bio" className="px-20 pr-40 pt-20 lg:pr-0 lg:max-w-xl">
          <h2 className="text-4xl">{charDisp ? charDisp[0]['name'].toUpperCase() : 'CharTitle'}</h2>
          <p>{charDisp ? charDisp[0]['height'] : 'CharHeight'}</p>
          <p>{charDisp ? charDisp[0]['weight'] : 'CharWeight'}</p>
          <p>{charDisp ? charDisp[0]['like'] : 'CharLike'}</p>
          <p>{charDisp ? charDisp[0]['notlike'] : 'CharNotlike'}</p>
          <p>{charDisp ? charDisp[0]['bio'] : 'CharBio'}</p>
        </div>
        <div id="moves" className="pt-20 px-20 md:px-20 content-center ">
          <MoveElem
            char={charDisp}
          />
        </div>
      </div>
    </div>
  );
}