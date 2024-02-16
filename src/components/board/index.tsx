import Square from "../square";
import { S } from "./style";

type boardProps = {};

export default function Board() {
  return (
    <>
      <S.Row>
        <Square value={0} />
        <Square value={1} />
        <Square value={2} />
      </S.Row>
      <S.Row>
        <Square value={3} />
        <Square value={4} />
        <Square value={5} />
      </S.Row>
      <S.Row>
        <Square value={6} />
        <Square value={7} />
        <Square value={8} />
      </S.Row>
    </>
  );
}
