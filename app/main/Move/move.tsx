'use client';
import { useState } from 'react';
import Elem from './elem';
import Image from 'next/image';

export default function MoveElem (params: any) {
  const { char } = params;
  const [controlGen, setControlGen] = useState('classic');
  const [controlMake, setControlMake] = useState('cap');
  let movesObj = char[0].moves;

  return (
    <>
      <div className="platform-select flex lg:w-96 items-center justify-around bg-gradient-to-r from-purple-950 to-indigo-900 rounded shadow-inner">
        <button className={controlMake === 'xbox' ? 'active' : ''} type="button" onClick={() => setControlMake('xbox')}>Xbox</button>
        <button className={controlMake === 'play' ? 'active' : ''} type="button" onClick={() => setControlMake('play')}>Playstation</button>
        <button className={controlMake === 'cap' ? 'active' : ''} type="button" onClick={() => setControlMake('cap')}>Capcom</button>
      </div>
      <div className="control-select flex lg:w-96 items-center justify-around bg-gradient-to-r from-purple-950 to-indigo-900 my-5 rounded shadow-inner">
        <button title="Classic" className={controlGen === 'classic' ? 'active' : ''} type="button" onClick={() => setControlGen('classic')}>
          <Image
            title="i1"
            height={60}
            width={120}
            src={'/movebtn/logo/logoclassic.png'}
            className="z-10 p-0 mr-2"
            alt="Classic"
          />
        </button>
        <button title="Modern" className={controlGen === 'modern' ? 'active' : ''} type="button" onClick={() => setControlGen('modern')}>
          <Image
            title="i2"
            height={60}
            width={120}
            src={'/movebtn/logo/logomodern.png'}
            className="z-10 p-0 mr-2"
            alt="Modern"
          />
        </button>
      </div>
      <div>
        <ul>
          {
            movesObj &&
            movesObj.map((move: any) => (
              <li key={move.id}>
                <Elem
                  move={move}
                  controlGen={controlGen}
                  controlMake={controlMake}
                />
              </li>
            ))
          }
        </ul>
      </div>
    </>
  );
}