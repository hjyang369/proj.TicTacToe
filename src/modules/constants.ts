export const options = {
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
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "navy",
    "purple",
    "pink",
  ],
  shapeOption: ["X", "O", "♢", "♡", "♧", "♤", "▵", "◻︎"],

  startPlayerOption: ["random", "player1", "player2"],
};

export const initValue = {
  boardSize: "3 X 3",
  winCondition: 3,
  player1Color: "blue",
  player1Pattern: "X",
  player2Color: "red",
  player2Pattern: "O",
  startPlayer: "random",
};

export const whoIsStartPlayer = {
  first: "",
  second: "",
};

export const alertMessage = {
  colorAlert:
    "플레이어 1과 플레이어 2의 색상은 서로 다른 색을 선택해야 합니다. 다시 선택해주세요.",
  shapeAlert:
    "플레이어 1과 플레이어 2의 색상은 서로 다른 모양을 선택해야 합니다. 다시 선택해주세요.",
  winConditionAlert:
    "승리 조건은 보드 판의 크기보다 작거나 같아야합니다. 다시 골라주세요.",
};
