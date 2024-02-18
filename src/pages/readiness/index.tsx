import { S } from "./style";
//
import Button from "../../components/common/button";
import useInputValue from "../../hooks/useInputValue";
import { useSetAtom } from "jotai";
import { playerOrderAtom, settingAtom } from "../../store/atom";
import { useNavigate } from "react-router";
import Select from "../../components/common/select";
import {
  boardSizeOption,
  colorOption,
  initValue,
  shapeOption,
  startPlayerOption,
} from "../../modules/constants";
import { chooseRandomPlayer } from "../../modules/fuction";

export default function Readiness(): JSX.Element {
  const { inputValue, handleInput } = useInputValue(initValue);
  const setSetting = useSetAtom(settingAtom);
  const setOrder = useSetAtom(playerOrderAtom);
  const winScore = inputValue.boardSize.slice(0, 1);

  const startGame = () => {
    const playerArr = startPlayerOption.slice(1, 3);
    if (inputValue.startPlayer === "random") {
      const isFirstPlayer = chooseRandomPlayer(playerArr);
      const secondPlayer = playerArr.filter(player => player !== isFirstPlayer);
      setSetting(inputValue);
      setOrder({ first: isFirstPlayer, second: secondPlayer[0] });
    } else {
      const secondPlayer = playerArr.filter(
        player => player !== inputValue.startPlayer,
      );
      setSetting(inputValue);
      setOrder({ first: inputValue.startPlayer, second: secondPlayer[0] });
    }
  };

  return (
    <S.Container>
      <S.Title>게임 설정</S.Title>
      <S.SettingContainer>
        <S.Space>
          <S.Subject>게임판의 크기</S.Subject>
          <Select
            name="boardSize"
            handleInput={handleInput}
            value={inputValue.boardSize}
            options={boardSizeOption}
          />
        </S.Space>
        <S.Space>
          <S.Subject>플레이어1</S.Subject>
          <S.Selects>
            <Select
              title="색깔"
              name="player1Color"
              handleInput={handleInput}
              value={inputValue.player1Color}
              options={colorOption}
            />
            <Select
              title="모양"
              name="player1Pattern"
              handleInput={handleInput}
              value={inputValue.player1Pattern}
              options={shapeOption}
            />
          </S.Selects>
        </S.Space>
        <S.Space>
          <S.Subject>플레이어2</S.Subject>
          <S.Selects>
            <Select
              title="색깔"
              name="player2Color"
              handleInput={handleInput}
              value={inputValue.player2Color}
              options={colorOption}
            />
            <Select
              title="모양"
              name="player2Pattern"
              handleInput={handleInput}
              value={inputValue.player2Pattern}
              options={shapeOption}
            />
          </S.Selects>
        </S.Space>
        <S.Space>
          <S.Subject>먼저 진행할 사람</S.Subject>
          <S.Selects>
            <Select
              name="startPlayer"
              handleInput={handleInput}
              value={inputValue.startPlayer}
              options={startPlayerOption}
            />
          </S.Selects>
        </S.Space>
        <S.Space>
          <S.Caution>
            * 본인의 마크 {winScore}개를 가로, 세로, 혹은 대각선 상에 놓인
            사람이 승리합니다.
          </S.Caution>
        </S.Space>
      </S.SettingContainer>
      <Button text="게임 시작" startGame={startGame} path="/game" />
    </S.Container>
  );
}
