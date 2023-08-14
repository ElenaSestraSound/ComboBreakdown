"use client";
import { MouseEvent, useState } from 'react';
import { characters } from './mockCharacters';
import { Character, Move } from './types';
export default function Compare () {
  const [character, setCharater] = useState<Character | null>(null);
  const [menuShown, setMenuShown] = useState<boolean>(false);

  const [move, setMove] = useState<Move | null>(null);
  const [moveMenuShown, setMoveMenuShown] = useState<boolean>(false);

  const onClickHandle = (e: MouseEvent<HTMLElement>) => {
    const targetElement = e.target as HTMLElement;
    const targetId = parseInt(targetElement.id);
    setCharater(characters[targetId]);
    setMenuShown(false);
  };

  const onMoveClickHandle = (e: MouseEvent<HTMLElement>) => {
    const targetElement = e.target as HTMLElement;
    const targetId = parseInt(targetElement.id);
    setMove(character!.moves[targetId]);
    setMoveMenuShown(false);
  };

  return (
    <div>
      <div>
        <div onClick={() => setMenuShown(true)}><span>{character ? character.name : 'SELECT A CHARACTER'}</span></div>
        {menuShown &&
          <div>
            {characters.map((character, index) => <span
              id={index.toString()}
              onClick={onClickHandle}
            >{character.name}</span>)}
          </div>}
        {character && <div onClick={() => setMoveMenuShown(true)}><span>{move ? move.name : 'SELECT A MOVE'}</span></div>}
        {moveMenuShown && character?.moves.map((move, index) => <div
          id={index.toString()}
          onClick={onMoveClickHandle}
        >{move.name}</div>)}
      </div>
      {move &&
        <div>
          {move.frameData.startup} frames on startup
        </div>}
    </div>
  );
}