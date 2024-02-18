import Board from "../../components/board";
import Button from "../../components/common/button";
import Toggle from "../../components/common/toggle";
import { S } from "./style";

export default function Result(): JSX.Element {
  return (
    <S.Container>
      <S.Title>게임 결과</S.Title>
      <S.BoardContainer>
        <Toggle text="2023년2월16일 00시00분" />
        <Board squares={[]} handlePlay={null} />
      </S.BoardContainer>
      <Button text="게임 다시 시작하기" path="/" />
    </S.Container>
  );
}
