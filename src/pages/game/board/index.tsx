// css, 컴포넌트, 상수, 타입
import { S } from "./style";
import Square from "../square";
//
import { useNavigate } from "react-router-dom";
import { useAtomValue } from "jotai";
import { playerOrderAtom, settingAtom } from "../../../store/atom";
import { calculateWinner } from "../../../modules/function";

type boardProps = {
  squares: Array<string>;
  boardSize: number;
  moveNum: number[];
  setMoveNum: React.Dispatch<React.SetStateAction<number[]>>;
  handleHistory: (nextSquares: string[]) => void;
  isNext: boolean;
  currentMove: number;
};

export default function Board({
  squares,
  boardSize,
  moveNum,
  setMoveNum,
  handleHistory,
  isNext,
  currentMove,
}: boardProps): JSX.Element {
  //보드판의 행만큼의 배열 생성
  const row = Array.from({ length: boardSize }, (_, index) => index);
  const setting = useAtomValue(settingAtom); // 유저가 설정한 조건이 저장된 전역 상태
  const playerOrder = useAtomValue(playerOrderAtom); // 유저 순서가 저장된 전역 상태
  const navigate = useNavigate();

  const handlePlay = (i: number) => {
    if (
      squares[i] ||
      calculateWinner(squares, boardSize, setting.winCondition)
    ) {
      return; // 만약 이미 보드판의 칸에 값이 있거나, 경기가 종료되었다면 early return
    }

    // 만약 리액트 자체 리빌딩으로 인해 플레이어 값이 사라진 경우 재설정하라고 유도함
    if (playerOrder.first.length === 0) {
      const checkValue = window.confirm(
        "먼저 시작할 플레이어 설정이 안 되어 있습니다. 다시 설정하시겠습니까?",
      );
      checkValue && navigate("/readiness");
    }

    const nextSquares = squares.slice(); // 보드판 history
    const moveSquares = moveNum.slice(); // 마크 순서 기록하는 배열

    // 플레이어의 랜덤 순서에 따라 순서가 된다면 순서에 맞는 플레이어의 마크 기록
    if (isNext) {
      nextSquares[i] = setting[`${playerOrder.first}Pattern`]?.toString();
    } else {
      nextSquares[i] = setting[`${playerOrder.second}Pattern`]?.toString();
    }

    moveSquares[i] = currentMove + 1; // 현재 마크가 올라간 횟수 +1
    handleHistory(nextSquares); // 새로운 보드판 history 추가
    setMoveNum(moveSquares); // 변경된 마크 순서 업데이트
  };

  return (
    <>
      {row.map((ele, i) => {
        return (
          <S.Row key={ele}>
            {row.map((ele, j) => {
              //각 칸의 index 계산
              const index = i * boardSize + j;
              return (
                <Square
                  key={index}
                  value={squares[index]}
                  handleClick={() => handlePlay(index)}
                  width={boardSize >= 8}
                />
              );
            })}
          </S.Row>
        );
      })}
    </>
  );
}
