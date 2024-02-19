// css, 컴포넌트, 상수, 타입
import { S } from "./style";
import Button from "../../components/common/button";
import Select from "../../components/common/select";
import { options, initValue } from "../../modules/constants";
//
import { useSetAtom } from "jotai";
import { playerOrderAtom, settingAtom } from "../../store/atom";
import { chooseRandomPlayer } from "../../modules/function";
import useSelectValue from "../../hooks/useInputValue";

export default function Readiness(): JSX.Element {
  const { selectValue, handleValue } = useSelectValue(initValue);
  const setSetting = useSetAtom(settingAtom);
  const setOrder = useSetAtom(playerOrderAtom);
  const winScore = selectValue.winCondition;
  const {
    boardSizeOption,
    colorOption,
    shapeOption,
    startPlayerOption,
    winConditionOption,
  } = options;

  const startGame = () => {
    const playerArr = startPlayerOption.slice(1, 3);
    if (selectValue.startPlayer === "random") {
      const isFirstPlayer = chooseRandomPlayer(playerArr);
      const secondPlayer = playerArr.filter(player => player !== isFirstPlayer);
      setSetting(selectValue);
      setOrder({ first: isFirstPlayer, second: secondPlayer[0] });
    } else {
      const secondPlayer = playerArr.filter(
        player => player !== selectValue.startPlayer,
      );
      setSetting(selectValue);
      setOrder({ first: selectValue.startPlayer, second: secondPlayer[0] });
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
            handleInput={handleValue}
            value={selectValue.boardSize}
            options={boardSizeOption}
          />
        </S.Space>
        <S.Space>
          <S.Subject>승리 조건</S.Subject>
          <Select
            name="winCondition"
            handleInput={handleValue}
            value={selectValue.winCondition}
            options={winConditionOption}
          />
        </S.Space>
        <S.Space>
          <S.Subject>플레이어1</S.Subject>
          <S.Selects>
            <Select
              title="색깔"
              name="player1Color"
              handleInput={handleValue}
              value={selectValue.player1Color}
              options={colorOption}
            />
            <Select
              title="모양"
              name="player1Pattern"
              handleInput={handleValue}
              value={selectValue.player1Pattern}
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
              handleInput={handleValue}
              value={selectValue.player2Color}
              options={colorOption}
            />
            <Select
              title="모양"
              name="player2Pattern"
              handleInput={handleValue}
              value={selectValue.player2Pattern}
              options={shapeOption}
            />
          </S.Selects>
        </S.Space>
        <S.Space>
          <S.Subject>먼저 진행할 사람</S.Subject>
          <S.Selects>
            <Select
              name="startPlayer"
              handleInput={handleValue}
              value={selectValue.startPlayer}
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
