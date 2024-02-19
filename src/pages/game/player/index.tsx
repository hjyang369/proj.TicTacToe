// css, 컴포넌트, 상수, 타입
import { S } from "./style";
import Toggle from "../../../components/common/toggle";
import { alertMessage, colorChip } from "../../../modules/constants";
import { TNumberObj, TPlateOption } from "../../../types/type";
//
import { useState } from "react";
import { useAtomValue } from "jotai";
import { settingAtom } from "../../../store/atom";

type playerProps = {
  playerName: string;
  currentMove: number;
  winner: string | null;
  setCurrentMove: React.Dispatch<React.SetStateAction<number>>;
};

export default function Player({
  playerName,
  currentMove,
  winner,
  setCurrentMove,
}: playerProps): JSX.Element {
  const setting = useAtomValue(settingAtom); // 유저가 설정한 조건이 저장된 전역 상태
  const { beforeStartAlert, runOutAlert, finishedAlert } = alertMessage; // alert 메세지 상수 데이터
  //무르기 횟수 상태
  const [remainingTime, setRemainingTime] = useState<TNumberObj>({
    player1: 3,
    player2: 3,
  });

  // 유저가 설정한 조건 관리하는 객체
  const plateOption: TPlateOption[] = [
    {
      text: "마크 모양 : ",
      id: 1,
      // 유저의 이름으로 전역 상태의 값을 동적으로 가져옴
      // string임을 명시하기 위해 .toString() 사용
      mark: setting[`${playerName}Pattern`].toString(),
    },
    {
      text: "마크 색깔 : ",
      id: 2,
      mark: setting[`${playerName}Color`].toString(),
    },
    { text: "남은 무르기 : ", id: 3, mark: `${remainingTime[playerName]}회` },
  ];

  // 무르기 함수
  const minusMove = (player: string, time: number) => {
    // 게임 시작 전이거나
    if (currentMove === 0) {
      return alert(beforeStartAlert);
    }
    // 무르기 횟수가 없거나
    if (time === 0) {
      return alert(runOutAlert);
    }
    // 이미 경기가 종료된 경우 alert 메세지 띄우고 early return
    if (winner) {
      return alert(finishedAlert);
    }
    // 위 조건에 해당되지 않는 경우 현재 마크 이전의 마크로 되돌아감
    setCurrentMove(prev => prev - 1);
    // 무르기 횟수도 줄여줌
    setRemainingTime(prevState => ({
      ...prevState,
      [player]: prevState[player] - 1,
    }));
  };

  return (
    <S.Container>
      <S.PlayerName>{playerName}</S.PlayerName>
      <S.Plate>
        {plateOption.map(option => {
          return (
            <div key={option.id}>
              <span>{option.text}</span>
              {/* 무르기 횟수는 style 적용 안해주기 위해 조건문 추가 */}
              {option.id === 3 ? (
                <span>{option.mark}</span>
              ) : (
                <S.MarkColor $color={colorChip[setting[`${playerName}Color`]]}>
                  {option.mark}
                </S.MarkColor>
              )}
            </div>
          );
        })}
      </S.Plate>
      <Toggle
        text={`${playerName} 무르기`}
        width="135px"
        onclick={() => minusMove(playerName, remainingTime[playerName])}
      />
    </S.Container>
  );
}
