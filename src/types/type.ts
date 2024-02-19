export type TSelectValue = {
  boardSize: string;
  winCondition: number;
  player1Color: string;
  player1Pattern: string;
  player2Color: string;
  player2Pattern: string;
  startPlayer: string;
  [key: string]: string | number;
};

export type THistory = {
  id: string;
  history: Array<string>;
  time: string;
  boardSize: number;
  moveNum: number[];
  setting: TSelectValue;
  winner: string;
};

export type TOptions = {
  winConditionOption: number[];
  boardSizeOption: string[];
  colorOption: string[];
  shapeOption: string[];
  startPlayerOption: string[];
};

export type TStringObj = {
  [key: string]: string;
};

export type TBooleanObj = {
  [key: string]: boolean;
};

export type TNumberObj = {
  [key: string]: number;
};
