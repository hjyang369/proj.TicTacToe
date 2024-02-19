// css, 컴포넌트, 상수, 타입
import { alertMessage } from "../modules/constants";
import { TSelectValue } from "../types/type";
//
import { useState } from "react";

const useSelectValue = (initValue: TSelectValue) => {
  const [selectValue, setSelectValue] = useState<TSelectValue>(initValue); // select 값 저장한 상태
  const { colorAlert, shapeAlert, winConditionAlert } = alertMessage; // alert 메세지 상수 데이터

  //select 값 변경하는 함수
  const handleValue = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = e.target;

    //만약 플레이어끼리 같은 색깔을 고른 경우 alert 메세지 띄워줌
    const isSameColor =
      (name === "player2Color" && value === selectValue.player1Color) ||
      (name === "player1Color" && value === selectValue.player2Color);
    //만약 플레이어끼리 같은 모양을 고른 경우 alert 메세지 띄워줌
    const isSameShape =
      (name === "player1Pattern" && value === selectValue.player2Pattern) ||
      (name === "player2Pattern" && value === selectValue.player1Pattern);
    //만약 보드판의 크기보다 승리조건이 큰 경우 alert 메세지 띄워줌
    const checkMaxNum =
      (name === "winCondition" &&
        Number(value) > Number(selectValue.boardSize.slice(0, 1))) ||
      (name === "boardSize" &&
        Number(value.slice(0, 1)) < selectValue.winCondition);

    // 조건이 해당되면 early return
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
    // 조건이 해당되지 않으면 그 값을 상태에 업데이트
    setSelectValue({ ...selectValue, [name]: value });
  };

  return { selectValue, handleValue } as const;
};

export default useSelectValue;
