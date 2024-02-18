import { S } from "./style";
import Button from "../../components/common/button";

export default function Main(): JSX.Element {
  return (
    <S.Container>
      <S.Title>Tic Tac Toe</S.Title>
      <div>
        <Button text="게임 시작" path="/readiness" />
        <Button text="저장된 게임" path="/result" />
      </div>
    </S.Container>
  );
}
