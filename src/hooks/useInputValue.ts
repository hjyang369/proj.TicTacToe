import { useState } from "react";
import { inputValueData } from "../types/type";

const useInputValue = (initInput: inputValueData) => {
  const [inputValue, setInputValue] = useState<inputValueData>(initInput);

  const handleInput = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = e.target;
    const isSameColor =
      (name === "player2Color" && value === inputValue.player1Color) ||
      (name === "player1Color" && value === inputValue.player2Color);
    const isSameShape =
      (name === "player1Pattern" && value === inputValue.player2Pattern) ||
      (name === "player2Pattern" && value === inputValue.player1Pattern);

    if (isSameColor) {
      alert(colorAlert);
      return;
    }
    if (isSameShape) {
      alert(shapeAlert);
      return;
    }
    setInputValue({ ...inputValue, [name]: value });
  };

  return { inputValue, handleInput } as const;
};

export default useInputValue;

const colorAlert =
  "플레이어 1과 플레이어 2의 색상은 서로 다른 색을 선택해야 합니다. 다시 선택해주세요.";
const shapeAlert =
  "플레이어 1과 플레이어 2의 색상은 서로 다른 모양을 선택해야 합니다. 다시 선택해주세요.";
