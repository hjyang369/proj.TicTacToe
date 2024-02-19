import { TOptions, TSelectValue, TStringObj } from "../types/type";

export const options: TOptions = {
  winConditionOption: [3, 4, 5, 6, 7, 8, 9],
  boardSizeOption: [
    "3 X 3",
    "4 X 4",
    "5 X 5",
    "6 X 6",
    "7 X 7",
    "8 X 8",
    "9 X 9",
  ],
  colorOption: [
    "빨강색",
    "주황색",
    "노랑색",
    "초록색",
    "파랑색",
    "남색",
    "보라색",
    "핑크색",
  ],
  shapeOption: ["X", "O", "♢", "♡", "♧", "♤", "▵", "◻︎"],

  startPlayerOption: ["random", "player1", "player2"],
};

export const colorChip: TStringObj = {
  빨강색: "#D32117",
  주황색: "#FF6A14",
  노랑색: "#FFBC1A",
  초록색: "#008000",
  파랑색: "#0000ff",
  남색: "#004095",
  보라색: "#800080",
  핑크색: "#E71682",
};

export const initValue: TSelectValue = {
  boardSize: "3 X 3",
  winCondition: 3,
  player1Color: "파랑색",
  player1Pattern: "X",
  player2Color: "빨강색",
  player2Pattern: "O",
  startPlayer: "random",
};

export const whoIsStartPlayer: TStringObj = {
  first: "",
  second: "",
};

export const alertMessage: TStringObj = {
  colorAlert:
    "플레이어 1과 플레이어 2의 색상은 서로 다른 색을 선택해야 합니다. 다시 선택해주세요.",
  shapeAlert:
    "플레이어 1과 플레이어 2의 색상은 서로 다른 모양을 선택해야 합니다. 다시 선택해주세요.",
  winConditionAlert:
    "승리 조건은 보드 판의 크기보다 작거나 같아야합니다. 다시 골라주세요.",
  beforeStartAlert: "게임 시작 전입니다. 게임 시작 후 무르기를 해주세요.",
  runOutAlert: "무르기 횟수를 모두 사용하셨습니다.",
  finishedAlert: "이미 게임이 끝나서 무르기를 할 수 없습니다.",
};
