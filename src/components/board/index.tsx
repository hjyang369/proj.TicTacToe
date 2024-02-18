import Square from "../square";
import { S } from "./style";

type boardProps = {
  squares: Array<string>;
  handlePlay: (i: number) => void;
};

export default function Board({
  squares,
  handlePlay,
}: boardProps): JSX.Element {
  return (
    <>
      <S.Row>
        <Square value={squares[0]} handleClick={() => handlePlay(0)} />
        <Square value={squares[1]} handleClick={() => handlePlay(1)} />
        <Square value={squares[2]} handleClick={() => handlePlay(2)} />
      </S.Row>
      <S.Row>
        <Square value={squares[3]} handleClick={() => handlePlay(3)} />
        <Square value={squares[4]} handleClick={() => handlePlay(4)} />
        <Square value={squares[5]} handleClick={() => handlePlay(5)} />
      </S.Row>
      <S.Row>
        <Square value={squares[6]} handleClick={() => handlePlay(6)} />
        <Square value={squares[7]} handleClick={() => handlePlay(7)} />
        <Square value={squares[8]} handleClick={() => handlePlay(8)} />
      </S.Row>
    </>
  );
}
