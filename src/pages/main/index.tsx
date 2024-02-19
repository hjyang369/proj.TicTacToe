import { S } from "./style";
import Button from "../../components/common/button";
import Title from "../../components/common/title";

export default function Main(): JSX.Element {
  return (
    <S.Container>
      <Title value="Tic Tac Toe" isMain />
      <div>
        <Button text="게임 시작" path="/readiness" />
        <Button text="저장된 게임" path="/result" />
      </div>
    </S.Container>
  );
}
