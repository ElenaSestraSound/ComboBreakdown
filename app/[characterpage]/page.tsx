import { use } from 'react';
import { getCharacters } from '@/utils/get-characters';
import Image from 'next/image'
// import { useRouter } from 'next/navigation';
// import { cache } from 'react';
// import { prisma } from '@/lib/prisma';
// import { useSearchParams } from "next/navigation";

export default function CharacterPage({ searchParams }) {
  console.log('look at this poop... I mean prop :)', searchParams.charName);

  const charObj = use(getCharacters()); // Get data from app service
  const charDisp = charObj?.filter(x => x.name === searchParams.charName);

  console.log('.. but don´t look at its obj...', charDisp[0]);
  
  return (
    <div className="h-full flex flex-row justify-around">
    <div id="bio" className="p-24 w-2/5">
      <h2 className="text-4xl">{charDisp ? charDisp[0]['name'] : 'CharTitle'}</h2>
      <p>{charDisp ? charDisp[0]['height'] : 'CharTitle'}</p>
      <p>{charDisp ? charDisp[0]['weight'] : 'CharTitle'}</p>
      <p>{charDisp ? charDisp[0]['bio'] : 'CharTitle'}</p>
      </div>
      <div id="moves" className="p-24">
        <div id="controller-options">
          <button className="" type="button">Classic</button>
          <button type="button">Modern</button>
          <button type="button">Xbox</button>
        </div>
        <ul>
          {charDisp &&
            charDisp[0]['moves'].map((move) => (
              <li key={move.id}>
                <div className="flex items-center p-3">
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
  )
}



// For getting data correctly:

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