import { useAtom } from "jotai";
import Board from "../../components/board";
import Button from "../../components/common/button";
import { S } from "./style";
import { settingAtom } from "../../store/atom";
import Player from "./player";

export default function Game() {
  const [setting, setSetting] = useAtom(settingAtom);

  console.log(setting);
  const cancelNum = 3;

  return (
    <S.Container>
      <S.Title>현재 마크 놓을 플레이어 : 1</S.Title>
      <S.BoardContainer>
        <div>
          <Board />
        </div>
        <S.Settings>
          <S.Players>
            <Player
              playerName="player 1"
              color={setting.player1Color}
              pattern={setting.player1Pattern}
              number={cancelNum}
            />
            <Player
              playerName="player 2"
              color={setting.player2Color}
              pattern={setting.player2Pattern}
              number={cancelNum}
            />
          </S.Players>

          <Button text="게임 다시 시작하기" path="/" width="299px" />
          {/* <Button text="게임 저장하기" path="/result" width="282px" /> */}
        </S.Settings>
      </S.BoardContainer>
    </S.Container>
  );
}
