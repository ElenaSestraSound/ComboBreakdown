import { use } from 'react';
import { getCharacters } from '@/utils/get-characters';
import Image from 'next/image';
import MoveElem from '@/app/main/Move/move';
import { ICharacterPage } from "@/utils/types";

export default function CharacterPage({ searchParams }: ICharacterPage) {

  const charObj = use(getCharacters()); // Get data from app service
  const charDisp = charObj?.filter(x => x.name === searchParams.charName);
  const bckURL = `'/characterpage/${searchParams.charName}.png'`;
    const prefix: string = '';

  return (
    // <div className="character-page h-full block lg:flex lg:flex-row items-center lg:justify-around relative" style={{ backgroundImage: `url(${bckURL})` }}>
    //   {/* tailwind prop: opacity-10 */}
    //   <div className="overlay w-full h-full block lg:flex lg:flex-row lg:justify-around">
      <div className="character-page h-full block lg:flex lg:justify-center relative" 
    style={{ backgroundImage: `url(${bckURL})` }}>
    <div className="overlay w-full h-full lg:flex justify-center block lg:flex-row lg:justify-around lg:sticky pos-0">
        <div id="bio" className="shrink-0 p-24 max-w-xl ">
          <h2 className="text-4xl">{charDisp ? charDisp[0]['name'].toUpperCase() : 'CharTitle'}</h2>
          <p>{charDisp ? charDisp[0]['height'] : 'CharHeight'}</p>
          <p>{charDisp ? charDisp[0]['weight'] : 'CharWeight'}</p>
          <p>{charDisp ? charDisp[0]['like'] : 'CharLike'}</p>
          <p>{charDisp ? charDisp[0]['notlike'] : 'CharNotlike'}</p>
          <p>{charDisp ? charDisp[0]['bio'] : 'CharBio'}</p>
        </div>
        <div id="moves" className="p-24 static ">
          <div id="controller-options" className=" w-96 shadow-inner bg-gradient-to-r from-purple-950 to-indigo-900 p-3 px-4 flex justify-around rounded">
            <div>
              <button title='1' className="" type="button"><Image height={10} width={100} src="/moveBtn/logo-classic.png" alt="Classic"></Image></button>
            </div>
            <div>
              <button title='2' type="button"><Image height={10} width={100} src="/moveBtn/logo-modern.png" alt="Modern"></Image></button>
            </div>
          </div>
          <ul>
            {
              charDisp &&
              charDisp[0]['moves'].map((move) => (
                <MoveElem
                key={move.id}
                move={move}
                prefix={prefix}
                />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}