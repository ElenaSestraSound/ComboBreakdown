import * as React from 'react';
import { BarMeter } from './BarMeter';
import { Move } from '../types';
import { useEffect, useState } from 'react';


export interface IResultBoxProps {
  firstCharacterName: string | undefined;
  firstCharacterMove: Move | null;
  secondCharacterName: string | undefined;
  secondCharacterMove: Move | null;
}

export function ResultBox ({ firstCharacterMove, secondCharacterMove, firstCharacterName, secondCharacterName }: IResultBoxProps) {
  const [winner, setWinner] = useState('DRAW');

  useEffect(() => {
    if (firstCharacterMove && secondCharacterMove) {
      const difference = firstCharacterMove.startup - secondCharacterMove.startup;
      if (difference < 0) return setWinner(firstCharacterName! + ' wins!');
      if (difference > 0) return setWinner(secondCharacterName! + ' wins!');
      if (difference === 0) return setWinner('DRAW');
    }
  }, [firstCharacterMove, secondCharacterMove]);

  return (
    <>
      {firstCharacterMove &&
        <div className='mb-4'>
          <BarMeter
            startup={firstCharacterMove.startup}
            active={firstCharacterMove.active}
            recovery={firstCharacterMove.missRecovery} />
        </div>
      }
      {secondCharacterMove &&
        <div className='mb-6'>
          <BarMeter
            startup={secondCharacterMove.startup}
            active={secondCharacterMove.active}
            recovery={secondCharacterMove.missRecovery} />
        </div>
      }
      {firstCharacterMove && secondCharacterMove &&
        <div className='text-center text-3xl font-bold'>{winner.toUpperCase()}</div>}
    </>
  );
}
