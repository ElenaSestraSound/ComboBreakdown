'use client';

import { useState } from 'react';
import Elem from './elem';

export default function MoveElem(params: any) {
  const { char } = params;
  const [controlGen, setControlGen] = useState('classic');
  const [controlMake, setControlMake] = useState('cap');
  const movesObj = char[0].moves;
  
  return (
    <div>
      <div className="platform-select flex w-96 items-center justify-around bg-gradient-to-r from-purple-950 to-indigo-900 my-5 rounded shadow-inner">
        <button className={controlMake === 'xbox' ? 'active' : '' } type="button" onClick={() => setControlMake('xbox')}>Xbox</button>
        <button className={controlMake === 'play' ? 'active' : '' } type="button" onClick={() => setControlMake('play')}>Playstation</button>
        <button className={controlMake === 'cap' ? 'active' : '' } type="button" onClick={() => setControlMake('cap')}>
          Capcom
        </button>
      </div>
      <div className="control-select flex w-96 items-center justify-around bg-gradient-to-r from-purple-950 to-indigo-900 my-5 rounded shadow-inner">
        <button title="Classic" className={controlGen === 'classic' ? 'active' : '' } type="button" onClick={() => setControlGen('classic')}><img className="h-9" src="\movebtn\logo-classic.png"/></button>
        <button title="Modern" className={controlGen === 'modern' ? 'active' : '' } type="button" onClick={() => setControlGen('modern')}><img className="h-9" src="\movebtn\logo-modern.png"/></button>    
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
  </div>    
)
}