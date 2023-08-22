import { Character } from "../types";

export const characters: Character[] = [
  {
    name: "Luke",
    moves: [
      {
        name: "L Sand Blast",
        type: "special",
        cancelable: "SA3",
        damage: 600,
        scaling: "20",
        frameData: {
          startup: 14,
          active: "14-18",
          missRecovery: 47,
          hitStunRecovery: -3,
          blockStunRecovery: -8,
        }
      },
      {
        name: "Crouching Medium Kick",
        type: "normal",
        cancelable: "C",
        damage: 500,
        scaling: "20",
        frameData: {
          startup: 8,
          active: "8-10",
          missRecovery: 19,
          hitStunRecovery: -2,
          blockStunRecovery: -6,
        }
      }
    ]
  },
  {
    name: "Ken",
    moves: [
      {
        name: "Shoryu",
        type: "special",
        cancelable: "SA3",
        damage: 600,
        scaling: "20",
        frameData: {
          startup: 14,
          active: "14-18",
          missRecovery: 47,
          hitStunRecovery: -3,
          blockStunRecovery: -8,
        }
      },
      {
        name: "Standing Light Punch",
        type: "normal",
        cancelable: "C",
        damage: 500,
        scaling: "20",
        frameData: {
          startup: 8,
          active: "8-10",
          missRecovery: 19,
          hitStunRecovery: -2,
          blockStunRecovery: -6,
        }
      }
    ]
  },

];
