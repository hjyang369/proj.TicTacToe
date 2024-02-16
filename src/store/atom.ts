import { atom } from "jotai";
import { inputValueData } from "../types/type";

export const settingAtom = atom<inputValueData>({
  boardSize: "3 X 3",
  player1Color: "파랑색",
  player2Color: "빨강색",
  player1Pattern: "X",
  player2Pattern: "O",
  startPlayer: "random",
});
