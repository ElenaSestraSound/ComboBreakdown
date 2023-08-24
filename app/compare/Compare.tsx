"use client";
import { useState } from 'react';
import { Character, Move } from './types';
import DropdownSelector from './DropdownSelector/DropdownSelector';
import DropdownCharacterSelector from './DropdownSelector/DropdownCharacterSelector';
import { ResultBox } from './ResultBox/ResultBox';
import Image from 'next/legacy/image';
import { DynamicBackground } from './DynamicBackground/DynamicBackground';
import Animate from './Animate/Animate';

export interface ICompareProps {
  characters: Character[];
}

export default function Compare ({ characters }: ICompareProps) {
  const characterList = listToPairs(characters);
  const [firstCharacter, setFirstCharacter] = useState<Character | null>(null);
  const [firstCharacterMove, setFirstCharacterMove] = useState<Move | null>(null);
  const [secondCharacter, setSecondCharacter] = useState<Character | null>(null);
  const [secondCharacterMove, setSecondCharacterMove] = useState<Move | null>(null);

  const onSelectFirstCharacterMove = (index: number) => {
    setFirstCharacterMove(firstCharacter!.moves![index]);
  };

  const onSelectFirstCharacter = (index: number) => {
    setFirstCharacter(characters[index]);
    setFirstCharacterMove(null);
  };

  const onSelectSecondCharacterMove = (index: number) => {
    setSecondCharacterMove(secondCharacter!.moves![index]);
  };

  const onSelectSecondCharacter = (index: number) => {
    setSecondCharacter(characters[index]);
    setSecondCharacterMove(null);
  };

  return (
    <>
      <DynamicBackground left={firstCharacter?.name} right={secondCharacter?.name} />
      <div className='max-w-4xl mx-auto py-20 px-10 md:px-20'>
        <div className='block basis-1/3 mb-8 md:flex'>
          <div className='w-full'>
            <div className='mb-4'>
              <DropdownCharacterSelector
                list={characterList}
                title={'SELECT A CHARACTER'}
                onChangeSelection={onSelectFirstCharacter} />
            </div>
            {firstCharacter &&
              <DropdownSelector
                // by adding this key the component knows that the caracter selection
                // has changed and it resets to its default value
                key={firstCharacter.name}
                list={listToPairs(firstCharacter.moves!)}
                title={'SELECT MOVE'}
                onChangeSelection={onSelectFirstCharacterMove} />
            }
          </div>
          <div className='w-1/2 mx-auto md:w-full m-w-min'>
            <Animate>
              <Image src={'/common/vs.png'} priority={true} alt={'An image of VS letters'} layout='responsive' width={100} height={100} />
            </Animate>
          </div>
          <div className='w-full'>
            <div className='mb-4'>
              <DropdownCharacterSelector
                list={characterList}
                title={'SELECT A CHARACTER'}
                onChangeSelection={onSelectSecondCharacter}
                alignRight={true} />
            </div>
            {secondCharacter &&
              <DropdownSelector
                // by adding this key the component knows that the caracter selection
                // has changed and it resets to its default value
                key={secondCharacter.name}
                list={listToPairs(secondCharacter.moves!)}
                title={'SELECT MOVE'}
                onChangeSelection={onSelectSecondCharacterMove} />
            }
          </div>
        </div>
        <ResultBox
          firstCharacterName={firstCharacter?.name}
          firstCharacterMove={firstCharacterMove}
          firstCharacterProperties={firstCharacterMove?.properties}
          secondCharacterName={secondCharacter?.name}
          secondCharacterMove={secondCharacterMove}
          secondCharacterProperties={secondCharacterMove?.properties} />
      </div>
    </>
  );
}

const listToPairs = (list: any[]) => {
  return list.map((elem, index) => {
    return {
      name: elem.name as string,
      index
    };
  });
};
