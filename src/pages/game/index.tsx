import { useAtom } from "jotai";
import Board from "../../components/board";
import Button from "../../components/common/button";
import Toggle from "../../components/common/toggle";
import { S } from "./style";
import { settingAtom } from "../../store/atom";

export default function Game() {
  const [setting, setSetting] = useAtom(settingAtom);

  console.log(setting);
  return (
    <S.Container>
      <S.Title>현재 마크 놓을 플레이어 : 1</S.Title>
      <S.BoardContainer>
        <div>
          <Board />
        </div>
        <S.Settings>
          <S.Players>
            <S.Player>
              <S.PlayerName>player 1</S.PlayerName>
              <S.Plate>
                <div>
                  <span>마크 모양 : </span>
                  <span>O</span>
                </div>
                <div>
                  <span>마크 색깔 : </span>
                  <span>◼︎</span>
                </div>
                <div>
                  <span>남은 무르기 : </span>
                  <span> 3회</span>
                </div>
              </S.Plate>
              <Toggle text="player1 무르기" width="122.5px" />
            </S.Player>
            <S.Player>
              <S.PlayerName>player 2</S.PlayerName>
              <S.Plate>
                <div>
                  <span> 마크 모양 : </span>
                  <span>X</span>
                </div>
                <div>
                  <span> 마크 색깔 : </span>
                  <span>◼︎</span>
                </div>
                <div>
                  <span> 남은 무르기 : </span>
                  <span> 3회</span>
                </div>
              </S.Plate>
              <Toggle text="player2 무르기" width="122.5px" />
            </S.Player>
          </S.Players>

          <Button text="게임 다시 시작하기" path="/" width="282px" />
          {/* <Button text="게임 저장하기" path="/result" width="282px" /> */}
        </S.Settings>
      </S.BoardContainer>
    </S.Container>
  );
}
