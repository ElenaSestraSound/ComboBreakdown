import * as React from 'react';
import { BarMeter } from './BarMeter';
import { useEffect, useState } from 'react';
import { Move } from './../types';

export interface IResultBoxProps {
  firstCharacterName: string | undefined;
  firstCharacterMove: Move | null;
  firstCharacterProperties: string | undefined;
  secondCharacterName: string | undefined;
  secondCharacterMove: Move | null;
  secondCharacterProperties: string | undefined;
}

export function ResultBox ({ firstCharacterMove, secondCharacterMove, firstCharacterName, secondCharacterName, firstCharacterProperties, secondCharacterProperties }: IResultBoxProps) {
  const [winner, setWinner] = useState('DRAW');

  useEffect(() => {
    if (firstCharacterMove && secondCharacterMove) {
      const difference = firstCharacterMove.startup - secondCharacterMove.startup;
      if (difference < 0) return setWinner(firstCharacterName! + ' wins!');
      if (difference > 0) return setWinner(secondCharacterName! + ' wins!');
      if (difference === 0) return setWinner('DRAW');
    }
  }, [firstCharacterMove, firstCharacterName, secondCharacterMove, secondCharacterName]);

  return (
    <>
      {firstCharacterMove &&
        <div className='mb-3'>
          <BarMeter
            key={'bar-1'}
            startup={firstCharacterMove.startup}
            active={firstCharacterMove.active}
            recovery={firstCharacterMove.missRecovery}
            properties={firstCharacterMove.properties} />
        </div>
      }
      {secondCharacterMove &&
        <div className='mb-8'>
          <BarMeter
            key={'bar-2'}
            startup={secondCharacterMove.startup}
            active={secondCharacterMove.active}
            recovery={secondCharacterMove.missRecovery}
            properties={secondCharacterMove.properties} />
        </div>
      }
      {firstCharacterMove && secondCharacterMove &&
        <div className='text-center text-3xl font-bold'>{winner.toUpperCase()}</div>}
    </>
  );
}
