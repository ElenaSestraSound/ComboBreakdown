"use client";
import { MouseEvent, useEffect, useState } from 'react';
import { characters } from './mockCharacters';
import { Character, Move } from './types';
import DropdownSelector from './DropdownSelector/DropdownSelector';

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
    <div className='max-w-4xl mx-auto flex basis-1/3'>
      <div className='w-full'>
        <DropdownSelector
          list={characterList}
          title={'SELECT A CHARACTER'}
          onChangeSelection={onSelectFirstCharacter} />
        {firstCharacter &&
          <DropdownSelector
            // by adding this key the component knows that the caracter selection
            // has changed and it resets to its default value
            key={firstCharacter.name}
            list={listToPairs(firstCharacter.moves)}
            title={'SELECT MOVE'}
            onChangeSelection={onSelectFirstCharacterMove} />}
      </div>
      <div className='w-full text-center self-center'>
        VS
      </div>
      <div className='w-full'>
        <DropdownSelector
          list={characterList}
          title={'SELECT A CHARACTER'}
          onChangeSelection={onSelectSecondCharacter} />
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