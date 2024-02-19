// css, 컴포넌트, 상수, 타입
import { S } from "./style";
import Square from "../square";
//
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
  const row = Array.from({ length: boardSize }, (_, index) => index);
  const setting = useAtomValue(settingAtom);
  const playerOrder = useAtomValue(playerOrderAtom);

  const handlePlay = (i: number) => {
    if (
      squares[i] ||
      calculateWinner(squares, boardSize, setting.winCondition)
    ) {
      return;
    }
    const nextSquares = squares.slice();
    const moveSquares = moveNum.slice();
    if (isNext) {
      nextSquares[i] = setting[`${playerOrder.first}Pattern`].toString();
    } else {
      nextSquares[i] = setting[`${playerOrder.second}Pattern`].toString();
    }
    moveSquares[i] = currentMove + 1;
    handleHistory(nextSquares);
    setMoveNum(moveSquares);
  };

  return (
    <>
      {row.map((ele, i) => {
        return (
          <S.Row key={ele}>
            {row.map((ele, j) => {
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
