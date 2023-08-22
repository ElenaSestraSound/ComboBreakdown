import * as React from 'react';
import { BarMeter } from './BarMeter';
import { useEffect, useState } from 'react';
import { Move } from './../types';


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
      if (firstCharacterMove.frameData.startup && secondCharacterMove.frameData.startup) {
        const difference = firstCharacterMove.frameData.startup - secondCharacterMove.frameData.startup;
        if (difference < 0) return setWinner(firstCharacterName! + ' wins!');
        if (difference > 0) return setWinner(secondCharacterName! + ' wins!');
        if (difference === 0) return setWinner('DRAW');
      }
    }
  }, [firstCharacterMove, firstCharacterName, secondCharacterMove, secondCharacterName]);

  return (
    <>
      {/* TODO Remove exclamation marks when merge the new BarMeter */}
      {firstCharacterMove &&
        <div className='mb-4'>
          <BarMeter
            startup={firstCharacterMove.frameData.startup!}
            active={firstCharacterMove.frameData.active!}
            recovery={firstCharacterMove.frameData.missRecovery!} />
        </div>
      }
      {secondCharacterMove &&
        <div className='mb-6'>
          <BarMeter
            startup={secondCharacterMove.frameData.startup!}
            active={secondCharacterMove.frameData.active!}
            recovery={secondCharacterMove.frameData.missRecovery!} />
        </div>
      }
      {firstCharacterMove && secondCharacterMove &&
        <div className='text-center text-3xl font-bold'>{winner.toUpperCase()}</div>}
    </>
  );
}
