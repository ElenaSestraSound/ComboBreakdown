import { getCharacters } from "@/utils/get-characters";
import Compare from "./Compare";
import { use } from 'react';
import { Character, Move } from "./types";
import NotFound from "../not-found";

export default function ComparePage () {
  const data: any = use(getCharacters());
  const characters = characterMapper(data);

  return (
    <>
      {data ?
        <Compare characters={characters} /> :
        <NotFound />}
    </>);
}

const characterMapper = (characters: any): Character[] => {
  return characters.map((character: any) => {
    return {
      name: character.name,
      moves: movesMapper(character.moves)
    } as Character;
  });
};

const movesMapper = (moves: any): Move[] => {
  return moves.map((move: any) => {
    return {
      name: move.name,
      type: move.type,
      cancelable: nullable(move.cancelable),
      damage: nullable(move.damage),
      scaling: nullable(move.scaling),
      frameData: {
        startup: nullable(move.startup),
        active: nullable(move.active),
        missRecovery: nullable(move.missRecovery),
        hitStunRecovery: nullable(move.hitStunRecovery),
        blockStunRecovery: nullable(move.blockStunRecovery)
      }
    };
  });
};

const nullable = (property: any) => {
  return property === null ? undefined : property;
}

