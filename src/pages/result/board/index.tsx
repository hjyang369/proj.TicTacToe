import { TStringObj } from "../../../types/type";
import Square from "../square/index";
import { S } from "./style";

type boardProps = {
  squares: Array<string>;
  boardSize?: number;
  setting: TStringObj;
  moveNum: Array<number>;
};

export default function Board({
  squares,
  boardSize,
  setting,
  moveNum,
}: boardProps): JSX.Element {
  const row = Array.from({ length: boardSize }, (_, index) => index);
  const result = squares[squares.length - 1];

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
                />
              );
            })}
          </S.Row>
        );
      })}
    </>
  );
}
