// 유저가 설정한 조건에 대한 타입
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

// 저장된 게임에 대한 타입
export type THistory = {
  id: string;
  history: Array<string>;
  time: string;
  boardSize: number;
  moveNum: number[];
  setting: TSelectValue;
  winner: string;
};

// 유저가 설정한 조건들의 옵션에 대한 타입
export type TOptions = {
  winConditionOption: number[];
  boardSizeOption: string[];
  colorOption: string[];
  shapeOption: string[];
  startPlayerOption: string[];
};

// 유저가 설정한 조건들 중 게임 화면에 보여지는 조건들에 대한 타입
export type TPlateOption = {
  id: number;
  text: string;
  mark: string;
};

// 객체 타입
export type TStringObj = {
  [key: string]: string;
};

export type TBooleanObj = {
  [key: string]: boolean;
};

export type TNumberObj = {
  [key: string]: number;
};
