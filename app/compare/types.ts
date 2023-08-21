export type Character = {
  name: string,
  moves: Move[];
};
export type Move = {
  name: string,
  type: string, // special/superArt/unique/common/throw/normal
  cancelable?: string; // C/SA/SA2/SA3/*
  damage?: number,
  scaling?: string;
  frameData: FrameData;
};

export type FrameData = {
  startup?: number,
  active?: string,
  missRecovery?: number,
  hitStunRecovery?: number,
  blockStunRecovery?: number,
};