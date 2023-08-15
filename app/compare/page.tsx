"use client";
import { useState } from 'react';
import { characters } from './mockCharacters';
import { Character, Move } from '@/utils/types';
import DropdownSelector from './DropdownSelector/DropdownSelector';
import DropdownCharacterSelector from './DropdownSelector/DropdownCharacterSelector';
import { ResultBox } from './ResultBox/ResultBox';

export default function Compare () {
  const characterList = listToPairs(characters);
  const [firstCharacter, setFirstCharacter] = useState<Character | null>(null);
  const [firstCharacterMove, setFirstCharacterMove] = useState<Move | null>(null);
  const [secondCharacter, setSecondCharacter] = useState<Character | null>(null);
  const [secondCharacterMove, setSecondCharacterMove] = useState<Move | null>(null);

  const onSelectFirstCharacterMove = (index: number) => {
    setFirstCharacterMove(firstCharacter!.moves[index]);
  };

  const onSelectFirstCharacter = (index: number) => {
    setFirstCharacter(characters[index]);
    setFirstCharacterMove(null);
  };

  const onSelectSecondCharacterMove = (index: number) => {
    setSecondCharacterMove(firstCharacter!.moves[index]);
  };

  const onSelectSecondCharacter = (index: number) => {
    setSecondCharacter(characters[index]);
    setSecondCharacterMove(null);
  };

  return (
    <div className='max-w-4xl mx-auto py-20'>
      <div className='flex basis-1/3 mb-8'>
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
              list={listToPairs(firstCharacter.moves)}
              title={'SELECT MOVE'}
              onChangeSelection={onSelectFirstCharacterMove} />}
        </div>
        <div className='w-full text-center self-center text-4xl font-bold'>
          VS
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
              list={listToPairs(secondCharacter.moves)}
              title={'SELECT MOVE'}
              onChangeSelection={onSelectSecondCharacterMove} />}
        </div>
      </div>
      <ResultBox
        firstCharacterName={firstCharacter?.name}
        firstCharacterMove={firstCharacterMove}
        secondCharacterName={secondCharacter?.name}
        secondCharacterMove={secondCharacterMove} />
    </div>
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