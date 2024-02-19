import { useState } from "react";
import { TSelectValue } from "../types/type";
import {
  colorAlert,
  shapeAlert,
  winConditionAlert,
} from "../modules/constants";

const useSelectValue = (initInput: TSelectValue) => {
  const [selectValue, setSelectValue] = useState<TSelectValue>(initInput);

  const handleValue = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = e.target;

    const isSameColor =
      (name === "player2Color" && value === selectValue.player1Color) ||
      (name === "player1Color" && value === selectValue.player2Color);

    const isSameShape =
      (name === "player1Pattern" && value === selectValue.player2Pattern) ||
      (name === "player2Pattern" && value === selectValue.player1Pattern);

    const checkMaxNum =
      (name === "winCondition" &&
        Number(value) > Number(selectValue.boardSize.slice(0, 1))) ||
      (name === "boardSize" &&
        Number(value.slice(0, 1)) < selectValue.winCondition);

    if (isSameColor) {
      alert(colorAlert);
      return;
    }
    if (isSameShape) {
      alert(shapeAlert);
      return;
    }
    if (checkMaxNum) {
      alert(winConditionAlert);
      return;
    }
    setSelectValue({ ...selectValue, [name]: value });
  };

  return { selectValue, handleValue } as const;
};

export default useSelectValue;
