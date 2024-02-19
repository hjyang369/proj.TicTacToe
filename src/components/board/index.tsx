import { S } from "./style";
import Square from "../square";

type boardProps = {
  squares: Array<string>;
  handlePlay: (i: number) => void;
  boardSize?: number;
};

export default function Board({
  squares,
  handlePlay,
  boardSize,
}: boardProps): JSX.Element {
  const row = Array.from({ length: boardSize }, (_, index) => index);

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
                />
              );
            })}
          </S.Row>
        );
      })}
    </>
  );
}
