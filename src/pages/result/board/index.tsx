import { S } from "./style";
import Square from "../square/index";
import { TSelectValue } from "../../../types/type";

type boardProps = {
  squares: Array<string>;
  boardSize: number;
  setting: TSelectValue;
  moveNum: Array<number>;
};

export default function Board({
  squares,
  boardSize,
  setting,
  moveNum,
}: boardProps): JSX.Element {
  //보드판의 행만큼의 배열 생성
  const row: number[] = Array.from({ length: boardSize }, (_, index) => index);
  // 로컬 스토리지에 저장된 게임의 히스토리 중 맨 마지막 결과
  const result: string = squares[squares.length - 1];

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
                  value={result[index]}
                  setting={setting}
                  moveNum={moveNum[index]}
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
