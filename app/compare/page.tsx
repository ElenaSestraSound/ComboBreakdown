"use client";
import { MouseEvent, useEffect, useState } from 'react';
import { characters } from './mockCharacters';
import { Character, Move } from './types';
import DropdownSelector from './DropdownSelector/DropdownSelector';
import DropdownCharacterSelector from './DropdownSelector/DropdownCharacterSelector';

export default function Compare () {
  const characterList = listToPairs(characters);

  const [firstCharacter, setFirstCharacter] = useState<Character | null>(null);
  const [firstCharacterMove, setFirstCharacterMove] = useState<Move | null>(null);

  const [secondCharacter, setSecondCharacter] = useState<Character | null>(null);
  const [secondCharacterMove, setSecondCharacterMove] = useState<Move | null>(null);

  const [winner, setWinner] = useState('DRAW');

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

  useEffect(() => {
    if (firstCharacterMove && secondCharacterMove) {
      const difference = firstCharacterMove.frameData.startup - secondCharacterMove.frameData.startup;
      if (difference < 0) return setWinner(firstCharacter!.name);
      if (difference > 0) return setWinner(secondCharacter!.name);
      if (difference === 0) return setWinner('DRAW');
    }
  }, [firstCharacterMove, secondCharacterMove]);

  return (
    <div className='max-w-4xl mx-auto py-20'>
      <div className='flex basis-1/3'>
        <div className='w-full'>
          <DropdownCharacterSelector
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
        <div className='w-full text-center self-center text-4xl font-bold'>
          VS
        </div>
        <div className='w-full'>
          <DropdownCharacterSelector
            list={characterList}
            title={'SELECT A CHARACTER'}
            onChangeSelection={onSelectSecondCharacter}
            alignRight={true} />
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
      {firstCharacter && firstCharacterMove &&
        <div className='text-center'>
          P1: {firstCharacterMove.frameData.startup} frames on Startup
        </div>
      }
      {secondCharacter && secondCharacterMove &&
        <div className='text-center'>
          P2: {secondCharacterMove.frameData.startup} frames on Startup
        </div>
      }
      {firstCharacterMove && secondCharacterMove &&
        winner !== 'DRAW' &&
        <div className='text-center'>{winner} Wins</div>
      }
      {firstCharacterMove && secondCharacterMove &&
        winner === 'DRAW' &&
        <div className='text-center'>DRAW</div>}
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