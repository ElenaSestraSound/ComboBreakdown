import { use } from 'react';
import { getCharacters } from '@/utils/get-characters';
import Image from 'next/image'

export default function CharacterPage({ searchParams }) {
  // console.log('look at this poop... I mean prop :)', searchParams.charName);

  const charObj = use(getCharacters()); // Get data from app service
  const charDisp = charObj?.filter(x => x.name === searchParams.charName);
  const bckURL = "'/characterpage/" + searchParams.charName + ".png'";

  return (
  <div className="character-page h-full flex flex-row justify-around relative" style={{backgroundImage: `url(${bckURL})`}}>
      {/* tailwind prop: opacity-10 */}
      <div className="overlay h-full flex flex-row justify-around">
        <div id="bio" className="p-24 w-2/5 sticky">
          <h2 className="text-4xl">{charDisp ? charDisp[0]['name'] : 'CharTitle'}</h2>
          <p>{charDisp ? charDisp[0]['height'] : 'CharHeight'}</p>
          <p>{charDisp ? charDisp[0]['weight'] : 'CharWeight'}</p>
          <p>{charDisp ? charDisp[0]['like'] : 'CharLike'}</p>
          <p>{charDisp ? charDisp[0]['notlike'] : 'CharNotlike'}</p>
          <p>{charDisp ? charDisp[0]['bio'] : 'CharBio'}</p>
        </div>
        <div id="moves" className="p-24 static">
          <div id="controller-options" className=" w-96 shadow-inner bg-gradient-to-r from-purple-950 to-indigo-900 p-3 px-4 flex justify-around rounded shadow-md">
            <div>
            <button className="" type="button"><Image height={10} width={100} src="/moveBtn/logo-classic.png" alt="Classic"></Image></button>
            </div>
            <div>
            <button type="button"><Image height={10} width={100} src="/moveBtn/logo-modern.png" alt="Modern"></Image></button>
            </div>
          </div>
          <ul>
            {charDisp &&
              charDisp[0]['moves'].map((move) => (
                <li key={move.id}>
                  <div className="flex w-96 items-center p-3 bg-purple-950 my-5 rounded shadow-inner">
                    <Image
                      src="/moves/101.jpg"
                      height={56}
                      width={56}
                      alt="Move-Image"
                      className="w-auto rounded shadow-md"
                    />
                    <div className="text-center pl-3">
                    <p>{move.name}</p>
                    <p>{move.classic}</p>
                    </div>
                  </div>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}






// FOR GETTING DATA FROM DB USING NEXT.JS STANDARDS:
// import { useRouter } from 'next/navigation';
// import { cache } from 'react';
// import { prisma } from '@/lib/prisma';
// import { useSearchParams } from "next/navigation";

// const getOneChar = cache(async () => {
//   try {
//     let characters = await prisma.character.findFirst({name: SearchParams.charName });
//     await prisma.$disconnect();
//     console.log('Working? ',characters);
//     return characters;
//   } catch (err) {
//     console.error(err);
//   }
// });