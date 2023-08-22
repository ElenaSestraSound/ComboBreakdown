import { type } from "os";

export type Character = {
  name: string,
  bio: string;
  like: string,
  notlike: string,
  height: string,
  weight: string,
};
export type Move = {
  id?: string;
  character?: Character;
  characterId?: string;
  name: string,
  type?: string; // special/superArt/unique/common/throw/normal
  classic: string,
  modern?: string,
  manual?: string, // only for special and super arts
  note?: string; // in some of the movements are notes like (During a Drive Parry)
  driveGauge?: number,
  video?: string,
  definition?: string;
  startup?: number,
  active?: string,
  missRecovery?: number,
  hitStunRecovery?: number,
  blockStunRecovery?: number,
  cancelable?: string; // C/SA/SA2/SA3/*
  damage?: number,
  scaling?: string,
  driveIncreaseHit?: number,
  driveDecreaseBlock?: number,
  driveDecreasePunish?: number,
  superArtGaugeIncrease?: number,
  properties?: string; // H/M/L/T/P,
  miscellaneus?: string;
};

export interface ICharacterList {
  characters: Character[];
  moves?: Move[];
};

export type GlossaryItem = {
  term: string,
  def: string,
  altterm?: string[],
  games?: string[],
  image?: string[],
  video?: string[],
  jp?: string;
};

export interface IGlossaryListItem {
  item: GlossaryItem;
}

export interface IBarMeterProps {
  startup: number,
  active: string,
  recovery: number;
  properties: string;
}