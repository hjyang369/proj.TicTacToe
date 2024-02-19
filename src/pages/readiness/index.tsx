// css, 컴포넌트, 상수, 타입
import { S } from "./style";
import Button from "../../components/common/button";
import Select from "../../components/common/select";
import Title from "../../components/common/title";
import { options, initValue } from "../../modules/constants";
//
import { useSetAtom } from "jotai";
import { playerOrderAtom, settingAtom } from "../../store/atom";
import { chooseRandomPlayer } from "../../modules/function";
import useSelectValue from "../../hooks/useInputValue";

export default function Readiness(): JSX.Element {
  const { selectValue, handleValue } = useSelectValue(initValue); // select 값을 변경하는 hook 호출
  const setSetting = useSetAtom(settingAtom); // 유저가 설정할 조건들을 전역 상태에 저장할 set 함수 호출
  const setOrder = useSetAtom(playerOrderAtom); // 플레이어 순서를 전역 상태에 저장할 set 함수 호출
  const winScore: number = selectValue.winCondition; // 유저가 설정한 승리 조건
  const {
    boardSizeOption,
    colorOption,
    shapeOption,
    startPlayerOption,
    winConditionOption,
  } = options; // 조건들에 대한 select 옵션

  //유저가 설정한 조건들을 전역 상태에 저장하는 함수
  const startGame = () => {
    // 유저 2명에 대한 배열
    const playerArr: string[] = startPlayerOption.slice(1, 3);
    // 만약 유저가 설정한 플레이어 순서가 랜덤이라면
    if (selectValue.startPlayer === "random") {
      // 랜덤으로 유저 추출할 함수 호출해 return된 값을 첫번째 순서로
      const isFirstPlayer: string = chooseRandomPlayer(playerArr);
      // 첫번째 순서 외에 다른 플레이어를 두번째 순서로 지정
      const [secondPlayer]: string[] = playerArr.filter(
        player => player !== isFirstPlayer,
      );
      // 전역상태에 값 저장
      setSetting(selectValue);
      setOrder({ first: isFirstPlayer, second: secondPlayer });
    } else {
      //이미 첫번째 플레이어가 정해져있다면 첫번째 플레이어 외에 다른 플레이어를 두번째 플레이어로 지정
      const [secondPlayer]: string[] = playerArr.filter(
        player => player !== selectValue.startPlayer,
      );
      // 전역상태에 값 저장
      setSetting(selectValue);
      setOrder({ first: selectValue.startPlayer, second: secondPlayer });
    }
  };

  return (
    <S.Container>
      <Title value="게임 설정" />
      <S.SettingContainer>
        <S.Space>
          <S.Subject>게임판의 크기</S.Subject>
          <Select
            name="boardSize"
            handleValue={handleValue}
            value={selectValue.boardSize}
            options={boardSizeOption}
          />
        </S.Space>
        <S.Space>
          <S.Subject>승리 조건</S.Subject>
          <Select
            name="winCondition"
            handleValue={handleValue}
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
              handleValue={handleValue}
              value={selectValue.player1Color}
              options={colorOption}
            />
            <Select
              title="모양"
              name="player1Pattern"
              handleValue={handleValue}
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
              handleValue={handleValue}
              value={selectValue.player2Color}
              options={colorOption}
            />
            <Select
              title="모양"
              name="player2Pattern"
              handleValue={handleValue}
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
              handleValue={handleValue}
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
      <Button text="게임 시작" handelGame={startGame} path="/game" />
    </S.Container>
  );
}
