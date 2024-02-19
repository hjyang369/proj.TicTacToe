import { TOptions, TSelectValue, TStringObj } from "../types/type";

export const options: TOptions = {
  // 승리 조건 옵션
  winConditionOption: [3, 4, 5, 6, 7, 8, 9],
  // 보드판 크기 옵션
  boardSizeOption: [
    "3 X 3",
    "4 X 4",
    "5 X 5",
    "6 X 6",
    "7 X 7",
    "8 X 8",
    "9 X 9",
  ],
  // 색깔 옵션
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
  // 모양 옵션
  shapeOption: ["X", "O", "♢", "♡", "♧", "♤", "▵", "◻︎"],
  //먼저 마크를 놓을 플레이어 옵션
  startPlayerOption: ["random", "player1", "player2"],
};

// 색깔 옵션 관리할 객체
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

//유저가 설정할 값들의 초기값
export const initValue: TSelectValue = {
  boardSize: "3 X 3",
  winCondition: 3,
  player1Color: "파랑색",
  player1Pattern: "X",
  player2Color: "빨강색",
  player2Pattern: "O",
  startPlayer: "random",
};

// 먼저 마크를 놓을 플레이어 초기값
export const whoIsStartPlayer: TStringObj = {
  first: "",
  second: "",
};

// alert 메세지
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
